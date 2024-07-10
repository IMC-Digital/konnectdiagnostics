const userService = require('../services/userService');
const { response } = require("express");
const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const fetchUserProfileAndSendResponse = (userId, orderId) => {
    return new Promise((resolve, reject) => {
        userService.getUserProfile(userId, (error, response) => {
            if (error) {
                console.error('Error fetching user profile data:', error);
                reject(error);
            } else if (response.length > 0) {
                resolve({ success: true, orderId, userProfile: response[0] });
            } else {
                console.log("No profile of user " + userId);
                resolve({ success: false, message: "No profile found" });
            }
        });
    });
};

const placeOrder = async (orderData, callback) => {
    const queryAsync = (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, values, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };

    function generateQueries(orderId, userId, cart, membersSelected) {
        const queries = [];
        cart.forEach((cartItem, cartIndex) => {
            membersSelected[cartIndex % membersSelected.length].forEach(memberName => {
                let productId, productName;
    
                if (cartItem.type === "test") {
                    productId = cartItem.test_id;
                    productName = cartItem.test_name;
                } else if (cartItem.type === "package") {
                    productId = cartItem.package_id;
                    productName = cartItem.package_name;
                }
    
                const query = "(?, ?, ?, ?, ?, ?, ?)";
                queries.push([orderId, userId, productId, cartItem.type, productName, cartItem.price, memberName]);
            });
        });
        return queries;
    }
    
    try {
        const { checkOutFormData, paymentDetails, cart } = orderData;
        // const { checkOutFormData, cart } = orderData;

        const { userId, selectedMember, amount, selectedSession, sampleCollection } = checkOutFormData;
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentDetails;

        // Insert into orders table
        const orderInsertResult = await queryAsync(
            "INSERT INTO orders (user_id, sample_submission_type, order_status) VALUES (?, ?, ?)",
            [checkOutFormData.userId, sampleCollection.sampleCollectionAt === 0 ? 'home' : 'clinic', 'active']
        );

        const orderId = orderInsertResult.insertId;
        
        // Insert into order_payments table
        const paymentInsertResult = await queryAsync(
            "INSERT INTO order_payments (order_id, razorpay_order_id, razorpay_payment_id, razorpay_signature) VALUES (?,?,?,?)",
            [orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature]
        )
        const paymentId = paymentInsertResult.insertId;

        // Insert into order_items table
        const resultQueries = generateQueries(orderId, userId, cart, selectedMember);
        await queryAsync("INSERT INTO order_items (order_id, user_id, product_id, product_type, product_name, price, member_name) VALUES ?", [resultQueries]);

        // Insert into order_billings table
        await queryAsync(
            "INSERT INTO order_billings (order_id, user_id, order_subtotal_amount, order_coupon_code_applied, order_coupon_code_discount, order_discount_amount, order_total_amount, payment_id) VALUES (?,?,?,?,?,?,?,?)",
            [orderId, userId, amount.subTotalAmount, amount.couponCode, amount.couponCodeDiscount, amount.couponCodeDiscount, amount.totalAmount, paymentId]
        );

        // Insert into order_sessions table
        const fulldate = `${selectedSession.date.date} ${selectedSession.date.month} ${selectedSession.date.day}`;
        await queryAsync(
            "INSERT INTO order_sessions (order_id, user_id, order_session_time, order_session_date) VALUES (?, ?, ?, ?)",
            [orderId, userId, selectedSession.time, fulldate]
        );

        // Insert into sample collection table based on sampleCollectionAt
        if (sampleCollection.sampleCollectionAt === 0) {
            await queryAsync(
                "INSERT INTO order_sample_at_home (order_id, user_id, address_id, alternate_mobile_number) VALUES (?,?,?,?)",
                [orderId, userId, sampleCollection.homeSampleCollection.address_id, sampleCollection.homeSampleCollection.alternate_mobile_number]
            );
        } else {
            await queryAsync(
                "INSERT INTO order_sample_at_clinic (order_id, user_id, clinic_id) VALUES (?, ?, ?)",
                [orderId, userId, sampleCollection.clinicSampleCollection.id]
            );
        }

        const result = await fetchUserProfileAndSendResponse(checkOutFormData.userId, orderId);
        callback(null, result);       

    } catch (error) {
        console.error("Error placing order:", error); 
        throw { success: false, error };
    }
};

const getOrderDetails = async (orderId, callback) => {
    let sampleCollType;
    let billingDetails;
    let orderSessions;
    let alternateMobileNumber;
    let sampleColl;

    // Helper function to promisify the database queries
    const queryAsync = (sql, params) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, params, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };

    const q1 = 'SELECT * FROM orders WHERE order_id = ?';
    try {
        const q1res = await queryAsync(q1, [orderId]);
        if (q1res && q1res.length > 0) {
            sampleCollType = q1res[0];

            // Logic for sample submission type
            if (q1res[0].sample_submission_type === "home") {
                const q11res = await queryAsync('SELECT * FROM order_sample_at_home WHERE order_id = ?', [orderId]);
                if (q11res && q11res.length > 0) {
                    alternateMobileNumber = q11res[0].alternate_mobile_number;
                    const q111res = await queryAsync('SELECT * FROM user_addresses WHERE address_id = ?', [q11res[0].address_id]);
                    sampleColl = q111res[0];
                }
            } else if (q1res[0].sample_submission_type === "clinic") {
                const q11res = await queryAsync('SELECT * FROM order_sample_at_clinic WHERE order_id = ?', [orderId]);
                if (q11res && q11res.length > 0) {
                    const q111res = await queryAsync('SELECT * FROM clinics WHERE id = ?', [q11res[0].clinic_id]);
                    sampleColl = q111res[0];
                }
            }
        }

        // Other queries for additional details
        billingDetails = await queryAsync('SELECT * FROM order_billings WHERE order_id = ?', [orderId]);
        orderSessions = await queryAsync('SELECT * FROM order_sessions WHERE order_id = ?', [orderId]);
        const orderItems = await queryAsync('SELECT * FROM order_items WHERE order_id = ?', [orderId]);

        // Construct the order details object
        const orderDetails = {
            sampleCollType: sampleCollType,
            billingDetails: billingDetails[0],
            orderSessions: orderSessions[0],
            sampleColl: sampleColl, // Include sampleColl in the final object
            orderItems: orderItems,
            alternateMobileNumber: alternateMobileNumber
        };

        callback(null, orderDetails);
    } catch (error) {
        console.error('Error in getOrderDetails:', error);
        throw new Error('An error occurred while fetching order details');
    }
};

// const getActiveOrders = async (userId, callback) => {
//     // callback(null, userId)
//     const ordersData = {}
//     pool.query("SELECT * FROM orders WHERE user_id = ? AND order_status = ?", [userId, "active"], (err1, response) => {
//         // callback(error, response);
//         if (err1) { callback(err1, null) } else {
//             if (response.length === 0) {
//                 callback(null, null)
//             } else {
//                 ordersData.orders = response;
//                 response.forEach((item) => {
//                     try {
//                         item.order_billing_id = pool.query(`SELECT * FROM order_billings WHERE order_id = ${item.order_id}`);
//                         item.order_session = pool.query(`SELECT * FROM order_sessions WHERE order_id = ${item.order}`);
//                         item.order_items = pool.query(`SELECT * FROM order_items WHERE order_id = ${item.order}`);
//                     } catch (err) {
//                         console.error(err);
//                     }

//                 })
//                 // callback(err1, ordersData);
//             }
//         }
//     })
// }

// const getActiveOrders = async (userId, callback) => {
//     const queryAsync = (sql, values) => {
//         return new Promise((resolve, reject) => {
//             pool.query(sql, values, (error, result) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });
//     };

//     try {
//         const response = await queryAsync("SELECT * FROM orders WHERE user_id = ? AND order_status = ?", [userId, "active"]);

//         if (response.length === 0) {
//             callback(null, null);
//             return;
//         }

//         const ordersData = { orders: response };

//         await Promise.all(response.map(async (item) => {
//             try {
//                 item.order_billing = await queryAsync(`SELECT * FROM order_billings WHERE order_id = ${item.order_id}`);
//                 item.order_session = await queryAsync(`SELECT * FROM order_sessions WHERE order_id = ${item.order_id}`);
//                 item.order_items = await queryAsync(`SELECT * FROM order_items WHERE order_id = ${item.order_id}`);
//                 await Promise.all(item.order_items.map(async (item2) => {
//                     item2.order_item_details = await queryAsync(`SELECT * FROM products WHERE product_id = ${item2.product_id}`);
//                 }))
//             } catch (err) {
//                 console.error(err);
//             }
//         }));

//         callback(null, ordersData);
//     } catch (err) {
//         callback(err, null);
//     }
// }

const getActiveOrders = async (userId, callback) => {
    pool.query(`SELECT * FROM orders WHERE user_id = ${userId} AND order_status = 'active'`, (error, response) => {
        callback(error, response);
    })
}
const getPastOrders = async (userId, callback) => {
    pool.query(`SELECT * FROM orders WHERE user_id = ${userId} AND order_status = 'delivered'`, (error, response) => {
        callback(error, response);
    })
}
const getCancelledOrders = async (userId, callback) => {
    pool.query(`SELECT * FROM orders WHERE user_id = ${userId} AND order_status = 'cancelled'`, (error, response) => {
        callback(error, response);
    })
}

const getOrderByOrderId = async (orderId, callback) => {
    pool.query(`SELECT * FROM orders WHERE order_id = ${orderId}`, (error, response) => {
        callback(error, response)
    })
}

const getOrderAppointmentDate = async (orderId, callback) => {
    pool.query(`SELECT * FROM order_sessions WHERE order_id = ${orderId}`, (error, response) => {
        callback(error, response)
    })
}

const getOrderBillingDetails = async (orderId, callback) => {
    pool.query(`SELECT * FROM order_billings WHERE order_id = ${orderId}`, (error, response) => {
        callback(error, response)
    })
}

const getOrderPaymentDetails = async (orderId, callback) => {
    pool.query(`SELECT * FROM order_payments WHERE order_id = ${orderId}`, (error, response) => {
        callback(error, response)
    })
}

const getOrderItems = async (orderId, callback) => {
    pool.query(`SELECT * FROM order_items WHERE order_id = ${orderId}`, (error, response) => {
        callback(error, response)
    })
}

const getUserOrderAddress = async (orderId, callback) => {
    const query = `SELECT osh.*, ua.*FROM order_sample_at_home osh JOIN user_addresses ua ON osh.address_id = ua.address_id WHERE osh.order_id = ?`
    pool.query(query, [orderId], (error, response) => {
        callback(error, response)
    })
}

const getOrderClinicAddress = async (orderId, callback) => {
    const query = `SELECT osc.*, c.* FROM order_sample_at_clinic osc JOIN clinics c ON osc.clinic_id = c.id WHERE osc.order_id = ?`
    pool.query(query, [orderId], (error, response) => {
        callback(error, response)
    })
}

const getAllOrders = async (userId, callback) => {
    const queryAsync = (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, values, (error, result) => {
                error ? reject (error) : resolve(result);
            });
        });
    };
    try {
        const response = await queryAsync("SELECT * FROM orders WHERE user_id = ?", [userId]);
        if (response.length === 0) {
            callback(null, null);
            return;
        }
        const ordersData = { orders: response };
        await Promise.all(response.map(async (item) => {
            try {
                item.order_billing = await queryAsync(`SELECT * FROM order_billings WHERE order_id = ${item.order_id}`);
                item.order_session = await queryAsync(`SELECT * FROM order_sessions WHERE order_id = ${item.order_id}`);
                item.order_payment_details = await queryAsync(`SELECT * FROM order_payments WHERE order_id = ${item.order_id}`);
                item.order_clinic_add = await queryAsync(`SELECT * FROM order_sample_at_clinic WHERE order_id = ${item.order_id}`);
                if( item.order_clinic_add.length > 0 ) {
                    item.order_clinic_add[0].clinic_details = await queryAsync(`SELECT * FROM clinics WHERE id = ${item.order_clinic_add[0].clinic_id}`);
                } else {}
                item.order_home_add = await queryAsync(`SELECT * FROM order_sample_at_home WHERE order_id = ${item.order_id}`);
                if( item.order_home_add.length > 0 ) {
                    item.order_home_add[0].address_details = await queryAsync(`SELECT * FROM user_addresses WHERE address_id = ${item.order_home_add[0].address_id}`);
                } else {}
                item.order_items = await queryAsync(`SELECT * FROM order_items WHERE order_id = ${item.order_id}`);
                await Promise.all(item.order_items.map(async (item2) => {
                    item2.order_item_details = await queryAsync(`SELECT * FROM products WHERE product_id = ${item2.product_id}`);
                }))
            } catch (err) {
                console.error(err);
            }
        }));

        callback(null, ordersData);
    } catch (err) {
        callback(err, null);
    }
}

const getSingleOrder = async (orderId, callback) => {
    const queryAsync = (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, values, (error, result) => {
                error ? reject (error) : resolve(result);
            });
        });
    };
    try {
        const response = await queryAsync("SELECT * FROM orders WHERE order_id = ?", [orderId]);
        if (response.length === 0) {
            callback(null, null);
            return;
        }
        const ordersData = { orders: response };
        await Promise.all(response.map(async (item) => {
            try {
                item.order_billing = await queryAsync(`SELECT * FROM order_billings WHERE order_id = ${item.order_id}`);
                item.order_session = await queryAsync(`SELECT * FROM order_sessions WHERE order_id = ${item.order_id}`);
                item.order_payment_details = await queryAsync(`SELECT * FROM order_payments WHERE order_id = ${item.order_id}`);
                item.order_clinic_add = await queryAsync(`SELECT * FROM order_sample_at_clinic WHERE order_id = ${item.order_id}`);
                if( item.order_clinic_add.length > 0 ) {
                    item.order_clinic_add[0].clinic_details = await queryAsync(`SELECT * FROM clinics WHERE id = ${item.order_clinic_add[0].clinic_id}`);
                } else {}
                item.order_home_add = await queryAsync(`SELECT * FROM order_sample_at_home WHERE order_id = ${item.order_id}`);
                if( item.order_home_add.length > 0 ) {
                    item.order_home_add[0].address_details = await queryAsync(`SELECT * FROM user_addresses WHERE address_id = ${item.order_home_add[0].address_id}`);
                } else {}
                item.order_items = await queryAsync(`SELECT * FROM order_items WHERE order_id = ${item.order_id}`);
                await Promise.all(item.order_items.map(async (item2) => {
                    item2.order_item_details = await queryAsync(`SELECT * FROM products WHERE product_id = ${item2.product_id}`);
                }))
            } catch (err) {
                console.error(err);
            }
        }));
        callback(null, ordersData);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {
    placeOrder,
    getOrderDetails,
    getAllOrders,
    getActiveOrders,
    getPastOrders,
    getCancelledOrders,
    getSingleOrder,
    getOrderAppointmentDate,
    getOrderBillingDetails,
    getOrderPaymentDetails,
    getOrderItems,
    getOrderByOrderId,
    getUserOrderAddress,
    getOrderClinicAddress
};
const ordersServices = require("../services/ordersServices");

const placeOrder = async (req, res) => {
    const orderData = req.body;
  
    try {
        const response = await ordersServices.placeOrder(orderData);
        res.status(200).json({ success: true, response });
    } catch (error) {
        console.error('Internal Server Error(Placing Order):', error);
        res.status(500).json({ success: false, error: 'An error occurred at placing an order' });
    }
};

const getOrderByOrderId = async (req, res) => {
    const { orderId } = req.params;
    ordersServices.getOrderByOrderId(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(fetching order):', error);
            res.status(500).json({ error: `An error occurred at getting order by orderId ${orderId}` });
        } else {
            res.status(200).json(response)
        }
    })
}

const getOrderDetails = async (req, res) => {
    const orderId = req.params.orderPlacedId;
    ordersServices.getOrderDetails(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting orderdetails):', error);
            res.status(500).json({ error: 'An error occurred at getting order details' });
        } else {
            res.status(200).json(response)
        }
    })
}

const getActiveOrders = async (req, res) => {
    const userId = req.params.userId;
    ordersServices.getActiveOrders(userId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}
const getPastOrders = async (req, res) => {
    const userId = req.params.userId;
    ordersServices.getPastOrders(userId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}
const getCancelledOrders = async (req, res) => {
    const userId = req.params.userId;
    ordersServices.getCancelledOrders(userId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getAllOrders = async (req, res) => {
    const userId = req.params.userId;
    ordersServices.getAllOrders(userId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getSingleOrder = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getSingleOrder(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getOrderAppointmentDate = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getOrderAppointmentDate(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response[0]);
        }
    })
}

const getOrderBillingDetails = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getOrderBillingDetails(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getOrderPaymentDetails = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getOrderPaymentDetails(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getOrderItems = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getOrderItems(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getUserOrderAddress = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getUserOrderAddress(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
}

const getOrderClinicAddress = async (req, res) => {
    const orderId = req.params.orderId;
    ordersServices.getOrderClinicAddress(orderId, (error, response) => {
        if (error) {
            console.error('Internal Server Error(getting active orders):', error);
            res.status(500).json({error: "error at geeting active orders"})
        } else {
            res.status(200).json(response);
        }
    })
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

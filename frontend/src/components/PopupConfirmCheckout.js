import React from 'react';
import { Modal } from 'react-bootstrap';
import MemberTestsTable from './MemberTestsTable';
import axios from 'axios';
import { BASE_API_URL } from '../api';

export default function PopupConfirmCheckout({
    userId,
    cart,
    show,
    onHide,
    checkOutFormData,
    setCheckOutFormData,
    setShowPopupOrderSuccessful,
    handleOrderPlacedSuccessfullyActions
}) {
    const handlePlaceOrder = async (orderamount) => {
        try {
            const response = await axios.post(`${BASE_API_URL}/orders/place-order`, {
                checkOutFormData,
                cart
            });
            if (response.data.success) {
                const orderId = response.data.response.orderId;
                handleOrderPlacedSuccessfullyActions(orderId);
            } else {
                console.error('Error placing order:', response.data.error);
            }
        } catch (error) {
            console.error('Error submitting order:', error);
        }
        
        // try {
        //     const response = await axios.post(`${BASE_API_URL}/payments/create-payment/${orderamount}`);
        //     const { id, amount, currency } = response.data;

        //     const options = {
        //         key: 'rzp_live_j5o9tvEWfIk8rl',
        //         amount,
        //         currency,
        //         name: 'Konnect Diagnostics',
        //         description: 'Payment for your order',
        //         order_id: id,
        //         handler: function (response) {
        //             console.log(response);
        //             if (response.status === "created") {
        //                 const paymentDetails = response;
        //                 const placeOrder = async () => {
        //                     try {
        //                         const response = await axios.post(`${BASE_API_URL}/orders/place-order`, {
        //                             checkOutFormData,
        //                             paymentDetails,
        //                             cart
        //                         });
        //                         if (response.data.success) {
        //                             const orderId = response.data.response.orderId;
        //                             handleOrderPlacedSuccessfullyActions(orderId);
        //                         } else {
        //                             console.error('Error placing order:', response.data.error);
        //                         }
        //                     } catch (error) {
        //                         console.error('Error submitting order:', error);
        //                     }
        //                 }
        //                 placeOrder();
        //             }
        //             // Handle success, e.g., update database, show success message, etc.
        //         },
        //     };

        //     const rzp = new window.Razorpay(options);
        //     rzp.open();
        // } catch (error) {
        //     console.error(error);
        // }
    };


    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body className='p-0 overflow-hidden rounded'>
                <div className='p-5'>
                    <h1>Confirm Checkout</h1>
                    <hr />

                    {checkOutFormData.sampleCollection.sampleCollectionAt === 0 ?
                        <div>
                            <h2 className="text-k-accent text-k-clr-primary"> Sample Collection Address: </h2>
                            <p className='mb-0'>
                                <span className="text-k-accent">{checkOutFormData.sampleCollection.homeSampleCollection.address_name} </span>
                                <small> ({checkOutFormData.sampleCollection.homeSampleCollection.address_type}) </small>
                                {`${checkOutFormData.sampleCollection.homeSampleCollection.address_line_1} ${checkOutFormData.sampleCollection.homeSampleCollection.address_line_2}`}
                            </p>
                            <p className='mb-0'>
                                <span className="text-k-accent"> Alternative Mobile number: </span>
                                {checkOutFormData.sampleCollection.homeSampleCollection.alternate_mobile_number}
                            </p>
                        </div> : <div>
                            <h2 className="text-k-accent">Selected Sample Submission Clinic:</h2>
                            <p className='mb-0'>
                                {checkOutFormData.sampleCollection.clinicSampleCollection.name}
                            </p>
                            <p>
                                {`${checkOutFormData.sampleCollection.clinicSampleCollection.address} ${checkOutFormData.sampleCollection.clinicSampleCollection.pincode} `}
                                <a className='text-decoration-none fw-bold text-info' href={checkOutFormData.sampleCollection.clinicSampleCollection.google_map_link} rel="noreferrer" target='_blank'>
                                    <span> View Location </span>
                                    <i className="fa-solid fa-location-dot"></i>
                                </a>
                            </p>
                            <p>
                                <strong>Tel: </strong>
                                {`${checkOutFormData.sampleCollection.clinicSampleCollection.telephone_number} `}
                                <strong>email: </strong>
                                {`${checkOutFormData.sampleCollection.clinicSampleCollection.email}`}
                            </p>
                        </div>
                    }
                    <hr />

                    <div>
                        <h2 className="text-k-accent text-k-clr-primary"> Preferred Session for sample collection </h2>
                        {checkOutFormData.selectedSession && (
                            <p>
                                <span className="bg-light p-2 rounded me-2">
                                    <strong>Date: </strong>
                                    {`${checkOutFormData.selectedSession.date.date} ${checkOutFormData.selectedSession.date.month} ${checkOutFormData.selectedSession.date.day} `}
                                </span>
                                <span className="bg-light p-2 rounded">
                                    <strong>Time: </strong>
                                    {`${checkOutFormData.selectedSession.time}`}
                                </span>
                            </p>
                        )}

                        {checkOutFormData.sampleCollection.sampleCollectionAt === 0 ?
                            <p className='small'> On the above preferred session timing our team will reach at your mentioned address. </p>
                            : <p className='small'> On the above preferred session timing we are expecting your arrival at your selected Clinic Location </p>
                        }
                    </div>
                    <hr />

                    <div>
                        <h2 className="text-k-accent text-k-clr-primary"> Tests to be done per user members </h2>
                        <MemberTestsTable selectedProducts={cart} selectedMembers={checkOutFormData.selectedMember} />
                    </div>

                    <div>
                        <h2 className="text-k-accent text-k-clr-primary"> Billing Details </h2>
                        <table className='table table-striped'>
                            <tbody>
                                <tr>
                                    <td>Subtotal Amount:</td>
                                    <td>&#8377; {checkOutFormData.amount.subTotalAmount}</td>
                                </tr>
                                {
                                    checkOutFormData.amount.couponCode && 
                                    <tr>
                                        <td>Coupon Code Applied:</td>
                                        <td className='text-success'>{checkOutFormData.amount.couponCode}</td>
                                    </tr>
                                }
                                {
                                    checkOutFormData.amount.couponCode && 
                                    <tr>
                                        <td>Coupon Code Discount:</td>
                                        <td className='text-danger'>- &#8377; {checkOutFormData.amount.couponCodeDiscount} </td>
                                    </tr>
                                }
                                <tr>
                                    <td className='fw-bold'>Total Amount:</td>
                                    <td className='fw-bold'>&#8377; {checkOutFormData.amount.totalAmount} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />

                    <div className='d-flex justify-content-end'>
                        <button className="btn btn-md btn-secondary me-2" onClick={onHide}>Edit</button>
                        <button
                            className="btn btn-md btn-success"
                            onClick={() => { handlePlaceOrder(checkOutFormData.amount.totalAmount) }}
                        >
                            Proceed to Payment - &#8377; {checkOutFormData.amount.totalAmount}
                        </button>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    )
}

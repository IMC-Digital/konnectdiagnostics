import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from "../api";
import { NavLink } from "react-router-dom";

export default function PopupOrderSuccessful({ orderPlacedId, profileData, show, onHide }) {
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const getOrderDetails = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/get-order-details/${orderPlacedId}`);
                // console.log(response.data);
                setOrderDetails(response.data);
            } catch (error) {
                console.log("error fetching order details", error);
            }
        };
        if (orderPlacedId) {
            getOrderDetails();
        }
    }, [orderPlacedId]);
    

    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='overflow-hidden border-none'>
            <Modal.Body className='p-0 overflow-hidden rounded'>
                <div className="order_seccess_popup_wrapper d-flex">
                    <div 
                        className="w-50 text-center d-flex flex-column justify-content-end p-5"
                        style={{
                            backgroundImage: "url('/images/success_tick.jpg')",
                            backgroundPosition: "top center",
                            backgroundSize: "cover"
                        }}
                    >
                        <p className='text-white mb-0'>Thank You</p>
                        <h2 className="text-k-secondary text-white"> Your Order Placed Successfully </h2>
                        <p className="text-k-clr-light text-light-white">Order <span className='fw-bold'> #KD0{orderPlacedId} </span> was place on <span className='fw-bold'> January 17, 2024 </span> and is currently in progress</p>
                    </div>
                    <div className="w-50">
                        <div className="px-4 py-2 bg-light border-bottom">
                            <p className="text-k-text mb-0 small"> Order Details </p>
                            <h2 className="text-k-secondary text-k-clr-secondary"> #KD0{orderPlacedId} </h2>
                        </div>
                        <div className="px-4 py-2 border-bottom">
                            {orderDetails && (
                                orderDetails.sampleCollType.sample_submission_type === "home" ? 
                                <>
                                    <h2 className="text-k-accent"> Home Sample Collection </h2>
                                    <p className="text-k-text"> 
                                        <span className="fw-bold"> {orderDetails.sampleColl.address_name}: </span> 
                                        {`${orderDetails.sampleColl.address_line_1} ${orderDetails.sampleColl.address_line_2} ${orderDetails.sampleColl.locality} ${orderDetails.sampleColl.city} ${orderDetails.sampleColl.state} ${orderDetails.sampleColl.pincode} `} 
                                    </p>
                                </> : <>
                                    <h2 className="text-k-accent"> Sample Submission at Clinic </h2>
                                    <p className="text-k-text"> 
                                        <span className="fw-bold"> {orderDetails.sampleColl.name} </span> 
                                        {`${orderDetails.sampleColl.address} - ${orderDetails.sampleColl.pincode}`} 
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="px-4 py-2 border-bottom">
                            <h2 className="text-k-accent"> Contact Details: </h2>
                            <p className="text-k-text mb-0">{ profileData.email }</p>
                            <p className="text-k-text mb-0">{ profileData.mobile_number }</p>
                            { orderDetails && ( orderDetails.sampleCollType.sample_submission_type === "home" &&
                                <p className="text-k-text mb-0">
                                    { orderDetails.alternateMobileNumber ? orderDetails.alternateMobileNumber : profileData.alternate_mobile_number }
                                </p>
                            )}
                        </div>
                        <div className="px-4 py-2 bg-light">
                            <h2 className="text-k-accent"> Billing Details </h2>
                            <div className='d-flex justify-content-between'>
                                <p className="text-k-text mb-0">Sub Total</p>
                                <p className="text-k-text mb-0"> &#8377;{ orderDetails && ( orderDetails.billingDetails.order_subtotal_amount)} </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className="text-k-text mb-0">Discount Amount</p>
                                <p className="text-k-text text-danger mb-0"> - &#8377;{ orderDetails && ( orderDetails.billingDetails.order_discount_amount)} </p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <p className="text-k-text fw-bold">Total</p>
                                <p className="text-k-text fw-bold"> &#8377;{ orderDetails && ( orderDetails.billingDetails.order_total_amount)} </p>
                            </div>
                            <NavLink to='/dashboard' onClick={onHide}>
                                <button className="btn-k-primary w-100"> 
                                    Check in orders
                                    <i className="fa-solid fa-arrow-right-long ms-2"></i>  
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api';
import { useLocation } from 'react-router-dom';
import OrderInfoSec from './orderDetailsComps/OrderInfoSec';
import EventDetailsSec from './orderDetailsComps/EventDetailsSec';
import TestDetailsSec from './orderDetailsComps/TestDetailsSec';
import PriceDetailsSec from './orderDetailsComps/PriceDetailsSec';
import { useNavigate } from 'react-router-dom';
import CancelOrderPopup from './orderDetailsComps/CancelOrderPopup';

function OrderDetails({ profileData }) {
    const [singleOrderDetails, setSingleOrderDetails] = useState([]);
    const [showCancelOrderPopup, setShowCancelOrderPopup] = useState(false);

    const handleShow = () => setShowCancelOrderPopup(true);

    const navigate = useNavigate();

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const orderIdP = queryParams.get('orderId');
    const [orderId] = useState(orderIdP || '');

    useEffect(() => {
        const getSingleOrderDetails = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/single-order/${orderId}`);
                setSingleOrderDetails(response.data.orders);
                console.log(response.data.orders);
            } catch (error) {
                console.log("error at fetching all active order", error);
            }
        };
        getSingleOrderDetails();
    }, [orderId, setSingleOrderDetails]);


    return (
        <div className="">
            {singleOrderDetails.map((orderItem, index) => (
                <div key={index} className='w-md-900px mx-auto my-md-5'>
                    <div className='d-flex align-items-center gap-2' onClick={() => { navigate(-1); }}>
                        <p className="btn btn-light border btn-sm mb-0 cursor-pointer border-bottom d-flex align-items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger="hover"
                            // colors="primary:#1663c7"
                            clsssName="clr-inherit"
                            style={{width:"25px",height:"25px", transform: "scaleX(-1)"}}>
                        </lord-icon>
                        <span className='ms-2 clr-inherit'>Dashboard</span>
                        </p>
                    </div>

                    <div className="rounded shadow-sm pb-md-3 p-2">
                        <OrderInfoSec singleOrderDetails={orderItem} />
                        <div className="px-md-5 p-2 gap-2">
                            <EventDetailsSec singleOrderDetails={orderItem} profileData={profileData} />
                            {orderItem.order_items.map((productItems, index) => (
                                <TestDetailsSec key={index} productItems={productItems} />
                            ))}
                            <PriceDetailsSec billingDetails={orderItem.order_billing[0]} paymentDetails={orderItem.order_payment_details} />

                            {
                                orderItem.order_status === "active" && (
                                    <div className='d-flex'> 
                                        <button 
                                            type="button"
                                            onClick={handleShow}
                                            className="btn btn-outline-danger btn-sm"
                                            > Cancel / Modify Order 
                                        </button> 
                                    </div>
                                ) 
                            }
                        </div>
                    </div>
                </div>
            ))}

            <CancelOrderPopup show={showCancelOrderPopup} onHide={ () => {setShowCancelOrderPopup(false)} } />
        </div>
    );
}

export default OrderDetails;
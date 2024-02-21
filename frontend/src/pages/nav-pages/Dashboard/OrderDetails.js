import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api';
import { useLocation } from 'react-router-dom';
import OrderInfoSec from './orderDetailsComps/OrderInfoSec';
import EventDetailsSec from './orderDetailsComps/EventDetailsSec';
import { useNavigate } from 'react-router-dom';
import CancelOrderPopup from './orderDetailsComps/CancelOrderPopup';
import OrderItemsGrid from './orderDetailsComps/OrderItemsGrid';
import OrderBillingDetails from './OrderBillingDetails';

function OrderDetails({ profileData }) {
    const [order, setOrder] = useState(null);
    const [showCancelOrderPopup, setShowCancelOrderPopup] = useState(false);
    const [error, setError] = useState(null);

    const handleShow = () => setShowCancelOrderPopup(true);

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const orderIdP = queryParams.get('orderId');
    const [orderId] = useState(orderIdP || '');

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/get-order-by-orderid/${orderId}`);
                setOrder(response.data);
            } catch (error) {
                console.log("error at fetching all active order", error);
                setError(error.message || "An error occurred while fetching the order.");
            }
        };
        fetchOrder();
    }, [orderId, setOrder]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='w-md-1100px'>
            {order && order.length > 0 ? (
                order.map((item, index) => (
                    <div key={index} className='mx-auto my-md-5'>
                        <BackTODashboardBtn />
                        <div className="rounded shadow-sm pb-md-3 p-2">
                            <OrderInfoSec order={item} />
                            <div className="px-md-3 p-2 gap-2">
                                <EventDetailsSec order={item} profileData={profileData} />
                                <OrderItemsGrid order={item} />
                                <OrderBillingDetails order={item} />

                                {item.order_status === "active" && (
                                    <div className='d-flex'>
                                        <button
                                            type="button"
                                            onClick={handleShow}
                                            className="btn btn-outline-danger"
                                        > Cancel / Modify Order
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}

            <CancelOrderPopup show={showCancelOrderPopup} onHide={() => { setShowCancelOrderPopup(false) }} />
        </div>
    );
}

export default OrderDetails;

const BackTODashboardBtn = () => {
    const navigate = useNavigate();
    return (
        <div className='d-flex align-items-center gap-2' onClick={() => { navigate(-1); }}>
            <p className="btn btn-light border btn-sm mb-0 cursor-pointer border-bottom d-flex align-items-center">
                <lord-icon
                    src="https://cdn.lordicon.com/vduvxizq.json"
                    trigger="hover"
                    // colors="primary:#1663c7"
                    clsssName="clr-inherit"
                    style={{ width: "25px", height: "25px", transform: "scaleX(-1)" }}>
                </lord-icon>
                <span className='ms-2 clr-inherit'>Dashboard</span>
            </p>
        </div>
    )
}

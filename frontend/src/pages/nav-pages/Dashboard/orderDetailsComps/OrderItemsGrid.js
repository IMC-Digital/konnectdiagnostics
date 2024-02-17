import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../../api/index';

export default function OrderItemsGrid({ order }) {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const getAppointmentDate = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/order-items/${order.order_id}`);
                setOrderItems(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAppointmentDate();
    }, [setOrderItems, order]);

    return (
        <div>
            {
                orderItems.map((item, index) => (
                    <div key={index} className='d-flex-cb my-1 w-100 p-2 bg-k-light rounded'>
                        <div className='d-flex w-100 justify-content-start align-item-start'>
                            {/* <div className='bg-white d-flex-cc p-2 rounded' style={{ width: "35px", height: "35px" }} >
                                <Image src={"/images/organs/cardiac.png"} rounded style={{ width: "25px", height: "25px" }} />
                            </div> */}
                            <div className='pe-0 flex-grow-1'>
                                <div className='d-flex-cb'>
                                    <h2 className="mb-0 text-k-text">
                                        <span className="text-k-accent small text-k-clr-primary fw-bold"> {item.product_name}  </span>
                                        <span className="text-k-accent small text-k-clr-primary fw-bold"> ( {item.product_type} ) </span>
                                    </h2>
                                    <h2 className="mb-0 text-k-text p-1 py-0">
                                        <span className="p-2 small rounded text-light-dark">
                                            <strong> Status: </strong> {item.order_item_delivery_status}
                                        </span>
                                    </h2>
                                    {/* <OrderStatusBadge orderStatus="refunded" /> */}
                                </div>
                                <div className="d-flex py-2">
                                    {
                                        [
                                            ["Member", item.member_name],
                                            ["Rs", item.price],
                                            ["Prescription", "Required"],
                                            ["Pre-test Preparation", "NR"]
                                        ].map((prp, index) => (
                                            <p key={index} className="text-k-text mb-0 me-1 text-light-dark bg-white px-2 py-1 rounded">
                                                <small> 
                                                    <span className='fw-bold'> {prp[0]}: </span> {prp[1]} 
                                                </small>
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

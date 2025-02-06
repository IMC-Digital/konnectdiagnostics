import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../../api/index';
import OrderDate from './OrderDate';

export default function OrderItemHead({ order, handleKnowMoreClick }) {
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        const getAppointmentDate = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/order-billing/${order.order_id}`);
                setInvoice(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAppointmentDate();
    }, [setInvoice, order]);

    return (
        <div className='bg_light2 p-3 py-2'>
            <div className="d-md-flex justify-content-between align-items-center">
                <div className="d-md-flex align-items-center justify-content-center">
                    <h2 className="order-id text_accent mb-0 px-3 py-2 bg-white shadow-md me-2" style={{ borderRadius: "50px" }}>
                        Order Id: <strong className='text_secondary_clr fw-bold'> #ORKDC{order.order_id} </strong>
                    </h2>
                    <p className="order-placed-time text-k-text text-light-dark small mb-0 "> Bill no: INVOKDC{invoice.order_billing_id} </p>
                </div>
                <div className="d-md-flex align-items-center justify-content-center">
                    <OrderDate date={order.order_date} />
                    <button className='btn btn-sm btn-outline-secondary d-flex-cc ms-md-2' onClick={() => { handleKnowMoreClick(order) }}>
                        <span className="me-2" style={{ color: "inherit" }}>Know More</span>
                        <i className="fa-solid fa-arrows-turn-right" style={{ color: "inherit" }}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
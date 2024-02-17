import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../../api/index';
import { Image } from 'react-bootstrap';
import OrderStatusBadge from '../OrderStatusBadge';

function formatOrderDate(orderDate) {
    const date = new Date(orderDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(date);
    return formattedDate;
}

export default function OrderInfoSec({ order }) {
    return (
        <div className='bg-k-light p-3 py-2'>
            <div className="d-flex-cb">
                <div className="d-flex w-100">
                    <div className='d-flex-cc'>
                        <div className='bg-white d-flex-cc p-2 rounded me-2' style={{ width: "45px", height: "45px" }} >
                            <Image src={"/images/k.png"} rounded style={{ width: "35px", height: "35px" }} />
                        </div>
                        <div className='pe-3 py-1 mb-0'>
                            <p className="text-k-text py-1 mb-0"> Order Id: </p>
                            <p className='text-k-clr-secondary fw-bold'> #ORKDC{order.order_id} </p>
                        </div>
                    </div>
                    <div className="vr"></div>
                    <BillingIdSec orderId={order.order_id} />
                    <div className="vr"></div>
                    <PaymentIdSec orderId={order.order_id} />
                    
                    <div className="vr ms-auto"></div>
                    <OrderDateSec order={order} />
                </div>

                <div className="d-flex-cc gap-2">
                </div>
            </div>
        </div>
    )
}

const BillingIdSec = ({ orderId }) => {
    const [billing, setBilling] = useState(null);
    useEffect(() => {
      const fetchBillingDetails = async () => {
        try{
            const response = await axios.get(`${BASE_API_URL}/orders/order-billing/${orderId}`);
            setBilling(response.data[0] || null);
        }catch(error){ console.log(error); }
      }
      fetchBillingDetails();
    }, [setBilling, orderId])
    
    return (
        <div className='px-3 py-1 mb-0'>
            <p className="text-k-text py-1 mb-0"> Invoice Id: </p>
            <p className='fw-bold mb-0'> #INVOKDC{billing && billing.order_billing_id} </p>
        </div>
    )
}

const PaymentIdSec = ({orderId}) => {
    const [payment, setPayment] =  useState(null);
    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try{
                const response = await axios.get(`${BASE_API_URL}/orders/order-payment/${orderId}`);
                setPayment(response.data[0] || null);
            }catch(error){console.log(error);}
        }
        fetchPaymentDetails();
    }, [setPayment, orderId])

    return (
        <div className='px-3 py-1 mb-0'>
            <p className="text-k-text py-1 mb-0"> Payment Id: </p>
            {
                payment !== null ? (
                    <p className='fw-bold mb-0'> #PMTOKDC{payment.payment_id} <OrderStatusBadge orderStatus={"paid"} /> </p>
                ) : (
                    <OrderStatusBadge orderStatus={"pending"} />
                )
            }
        </div>
    )
}

const OrderDateSec = ({ order }) => {
    return (
        <div className='px-3 py-1 mb-0'>
            <p className="text-k-text py-1 mb-0"> Order Placed: </p>
            <p className='fw-bold mb-0'> {formatOrderDate(order.order_date)} </p>
        </div>
    )
}
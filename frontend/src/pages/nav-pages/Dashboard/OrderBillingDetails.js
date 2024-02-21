import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api/index';
import OrderStatusBadge from './OrderStatusBadge';

export default function OrderBillingDetails({ order }) {
    const [billing, setBilling] = useState(null);
    useEffect(() => {
        const fetchBillingDetails = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/order-billing/${order.order_id}`);
                setBilling(response.data[0] || null);
            } catch (error) { console.log(error); }
        }
        fetchBillingDetails();
    }, [setBilling, order]);

    const [payment, setPayment] = useState(null);
    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/order-payment/${order.order_id}`);
                console.log(response.data);
                setPayment(response.data[0] || null);
            } catch (error) { console.log(error); }
        }
        fetchPaymentDetails();
    }, [setPayment, order]);

    useEffect(() => {
        console.log(payment);
    }, [payment])

    return (
        <div className='d-flex gap-5 mt-5'>
            {billing && billing !== null ? (
                <div className='w-50'>
                    <h2 className="text-k-secondary"> Order Billing Details </h2>
                    <table className='table table-bordered shadow rounded'>
                        <tbody>
                            <tr>
                                <td className='w-60'>Subtotal Amount (Tests/Packages):</td>
                                <td className='text-end'>&#8377; {billing.order_subtotal_amount}</td>
                            </tr>
                            <tr>
                                <td>Coupon Code Applied:</td>
                                <td className='text-success text-end'>{billing.order_coupon_code_applied}</td>
                            </tr>
                            <tr>
                                <td>Coupon Code Discount:</td>
                                <td className='text-danger text-end'>- &#8377; {billing.order_coupon_code_discount} </td>
                            </tr>
                            <tr className='bg-k-light'>
                                <td className='fw-bold'>Total Amount:</td>
                                <td className='fw-bold text-end d-flex flex-column align-items-end'>
                                    <span>
                                        &#8377; {billing.order_total_amount}
                                    </span>
                                    {billing.payment_id === null ? <OrderStatusBadge orderStatus={"pending"} /> : <OrderStatusBadge orderStatus={"paid"} />}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            {payment && payment !== null ? (
                <div className='w-50'>
                    <h2 className="text-k-secondary"> Order Payment Details </h2>
                    <table className='table table-bordered shadow w-50 rounded'>
                        <tbody>
                            <tr>
                                <td className='w-60'> Payment Id: </td>
                                <td className='text-end'> #PMTOKDC{payment.payment_id} </td>
                            </tr>
                            <tr>
                                <td>Entity</td>
                                <td className='text-success text-end'>{payment.entity}</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td className='text-success text-end'>{payment.amount_paid}</td>
                            </tr>
                            <tr>
                                <td>Reciept</td>
                                <td className='text-success text-end'>{payment.reciept}</td>
                            </tr>
                            <tr>
                                <td>Offer Id</td>
                                <td className='text-success text-end'>{payment.offer_id}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td className='text-success text-end'>{payment.status}</td>
                            </tr>
                            <tr>
                                <td>Attempts</td>
                                <td className='text-success text-end'>{payment.attempts}</td>
                            </tr>
                            <tr>
                                <td>Created At</td>
                                <td className='text-success text-end'>{payment.created_at}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Payment Details Not found...</p>
            )}

        </div>
    )
}

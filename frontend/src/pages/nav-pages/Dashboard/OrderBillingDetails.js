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
                console.log(response.data);
            } catch (error) { console.log(error); }
        }
        fetchBillingDetails();
    }, [setBilling, order]);

    useEffect(() => {
        console.log(billing);
    }, [billing])

    // const [payment, setPayment] =  useState(null);
    // useEffect(() => {
    //     const fetchPaymentDetails = async () => {
    //         try{
    //             const response = await axios.get(`${BASE_API_URL}/orders/order-payment/${order.order_id}`);
    //             setPayment(response.data[0] || null);
    //         }catch(error){console.log(error);}
    //     }
    //     fetchPaymentDetails();
    // }, [setPayment, order])

    return (
        <div>
            {billing && billing !== null ? (
                <table className='table shadow w-50'>
                    <tbody>
                        <tr>
                            <td className='border w-75'>Subtotal Amount (Tests/Packages):</td>
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
                            <td className='fw-bold d-flex align-items-center text-end'>
                                &#8377; {billing.order_total_amount}
                                {billing.payment_id === null ? <OrderStatusBadge orderStatus={"pending"} /> : <OrderStatusBadge orderStatus={"paid"} />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}

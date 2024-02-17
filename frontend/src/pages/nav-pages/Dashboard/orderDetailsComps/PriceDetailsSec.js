import React from 'react'
import OrderStatusBadge from '../OrderStatusBadge';

export default function PriceDetailsSec({ billingDetails, paymentDetails }) {
  return (
    <div className=''>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Subtotal Amount:</td>
                        <td>&#8377; {billingDetails.order_subtotal_amount}</td>
                    </tr>
                    <tr>
                        <td>Coupon Code Applied:</td>
                        <td className='text-success'>{billingDetails.order_coupon_code_applied}</td>
                    </tr>
                    <tr>
                        <td>Coupon Code Discount:</td>
                        <td className='text-danger'>- &#8377; {billingDetails.order_discount_amount} </td>
                    </tr>
                    <tr className='bg-k-light'>
                        <td className='fw-bold'>Total Amount:</td>
                        <td className='fw-bold d-flex align-items-center'>
                            &#8377; {billingDetails.order_total_amount}
                            { paymentDetails.length === 0 ? <OrderStatusBadge orderStatus={"pending"} /> : <OrderStatusBadge orderStatus={"paid"} /> }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

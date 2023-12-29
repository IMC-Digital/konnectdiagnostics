import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../../api';
// import { NavLink } from 'react-router-dom';

export default function CartBillingSec({ cart, setCart, userId }) {
    const [couponCode, setCouponCode] = useState("");
    const [subTotalAmount, setSubTotalAmount] = useState(0);
    const [couponDiscountAmount, setCouponDiscountAmount] = useState(0);
    const [grandTotalAmount, setGrandTotalAmount] = useState(0);
    const [couponAppliedMessage, setCouponAppliedMessage] = useState("")

    useEffect(() => {
        setSubTotalAmount(cart.reduce((total, item) => total + Number(item.price), 0));
    }, [cart])
    useEffect(() => {
        setGrandTotalAmount(subTotalAmount - couponDiscountAmount);
    }, [subTotalAmount, couponDiscountAmount])

    const verifyCouponCode = () => {
        axios.post(`${BASE_API_URL}/coupon/apply-coupon`, { couponApplied: couponCode})
            .then(response => {
                if(response.data.success){
                    const couponDiscount = response.data.discount;
                    setCouponDiscountAmount((couponDiscount / 100) * subTotalAmount);
                    setCouponCode("");
                    setCouponAppliedMessage(response.data.message);
                } else {
                    setCouponAppliedMessage(response.data.error);
                }
            }).catch(error => {
                console.error(error.response.data);
            })
    }

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <p> Subtotal : </p>
                <p> &#8377; {subTotalAmount} </p>
            </div>
            <div className='mb-3'>
                <InputGroup>
                    <Form.Control
                        placeholder="Coupon Code"
                        aria-label="Coupon Code"
                        aria-describedby="basic-addon2"
                        onChange={(e) => { setCouponCode(e.target.value) }}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={verifyCouponCode}>
                        Submit
                    </Button>
                </InputGroup>
                <p className="text-success text-k-text small">{couponAppliedMessage}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p className='mb-0'> Coupon Code Discount : </p>
                <p className='text-danger mb-0'> - &#8377;{couponDiscountAmount} </p>
            </div>
            <hr />
            <div className='totalSec d-flex align-items-end justify-content-between'>
                <p className='text-k-accent'> Total(incl. offers) : </p>
                <p className='text-k-accent text-k-clr-secondary'> &#8377;{grandTotalAmount} </p>
            </div>

            {/* <SampleCollectionAt setShowAddNewAddressPopup={setShowAddNewAddressPopup} userId={userId} /> */}
            {/* <NavLink to="/checkout">
                <button type="button" className='btn btn-primary w-100 fw-bold text-white'>
                    &#8377;{grandTotalAmount}
                    <span className='ms-4 me-2 text-white'>Proceed To Checkout</span>
                    <i className="fa-solid fa-angle-right text-white"></i>
                </button>
            </NavLink> */}
            {/* <button type='button' className='btn btn-primary py-1 px-3 my-2' onClick={showForm}>Submit</button> */}
        </div>
    )
}

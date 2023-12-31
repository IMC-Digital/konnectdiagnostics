import React, { useEffect, useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../../api';

export default function CartBillingSec({ cart, setCart, userId, checkOutFormData, setCheckOutFormData }) {
    const [couponCode, setCouponCode] = useState(checkOutFormData.amount.couponCode);
    const [subTotalAmount, setSubTotalAmount] = useState(0);
    const [couponDiscountAmount, setCouponDiscountAmount] = useState(0);
    const [grandTotalAmount, setGrandTotalAmount] = useState(0);
    const [couponAppliedMessage, setCouponAppliedMessage] = useState("");

    const verifyCouponCode = useCallback(() => {
        axios.post(`${BASE_API_URL}/coupon/apply-coupon`, { couponApplied: couponCode })
            .then(response => {
                if (response.data.success) {
                    const couponDiscount = response.data.discount;
                    setCouponDiscountAmount((couponDiscount / 100) * subTotalAmount);
                    setCouponAppliedMessage(response.data.message);
                    setCheckOutFormData((prevData) => ({
                        ...prevData,
                        amount: {
                            ...prevData.amount,
                            couponCode: couponCode,
                            couponCodeDiscount: (couponDiscount / 100) * subTotalAmount,
                        },
                    }));
                } else {
                    setCouponAppliedMessage(response.data.error);
                }
            }).catch(error => {
                console.error(error.response.data);
            });
    }, [couponCode, setCheckOutFormData, subTotalAmount]);

    useEffect(() => {
        setSubTotalAmount(cart.reduce((total, item) => total + Number(item.price * item.quantity), 0));
        setCheckOutFormData((prevData) => ({
            ...prevData,
            amount: {
                ...prevData.amount,
                subTotalAmount: cart.reduce((total, item) => total + Number(item.price * item.quantity), 0),
            },
        }));
    }, [cart, setCheckOutFormData]);

    useEffect(() => {
        setGrandTotalAmount(subTotalAmount - couponDiscountAmount);
        setCheckOutFormData((prevData) => ({
            ...prevData,
            amount: {
                ...prevData.amount,
                totalAmount: subTotalAmount - couponDiscountAmount,
            },
        }));
    }, [subTotalAmount, couponDiscountAmount, setCheckOutFormData]);

    useEffect(() => {
        if (couponCode.trim() !== '') {
            verifyCouponCode();
        }
    }, [couponCode, verifyCouponCode]);

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
                        value={ couponCode }
                        onChange={(e) => { setCouponCode(e.target.value) }}
                    />
                    <Button 
                        variant="outline-secondary" 
                        id="button-addon2" 
                        onClick={
                            verifyCouponCode
                        }>
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
        </div>
    )
}
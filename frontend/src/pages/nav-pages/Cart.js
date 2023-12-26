import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
// import CartFormComp from '../CartFormComp';
import CartItemsList from '../CartItemsList';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../../api';
import SampleCollectionAt from '../../components/checkout/SampleCollectionAt';

const Cart = ({ userId, cart, setCart, setShowAddNewAddressPopup }) => {
    // const [showComponent, setShowComponent] = useState(false);
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

    // function showForm() {
    //     setShowComponent(true);
    // }

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
        <Wrapper>
            <article className='container mx-auto m-5 p-0 d-flex'>
                <div className='' style={{width: "60%"}}>
                    <div className='p-5 pb-0 bg-light'>
                        <h2>Cart</h2>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0'>Selected Tests</p>
                            <NavLink to="/tests">
                                <button className='btn btn-outline-secondary btn-sm'>Add +</button>
                            </NavLink>
                        </div>
                        <hr />
                    </div>
                    <div className='px-5 p-2'>
                        {cart?.map((item) => (
                            <CartItemsList key={item.product_id} item={item} userId={userId} cart={cart} setCart={setCart} />
                        ))}
                        {/* <div>
                            {showComponent && (<CartFormComp cart={cart} />)}
                        </div> */}
                    </div>
                </div>
                <div className='p-5' style={{width: "40%"}}>
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
                                onChange={(e) => {setCouponCode(e.target.value)}}
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

                    <h2 className="text-k-accent">Sample Collection At</h2>
                    <hr />
                    <SampleCollectionAt setShowAddNewAddressPopup={setShowAddNewAddressPopup} />
                    <button type="button" className='btn btn-primary w-100 fw-bold text-white'> 
                        &#8377;{grandTotalAmount} 
                        <span className='ms-4 me-2 text-white'>Proceed To Checkout</span> 
                        <i class="fa-solid fa-angle-right text-white"></i>
                    </button>
                    {/* <button type='button' className='btn btn-primary py-1 px-3 my-2' onClick={showForm}>Submit</button> */}
                </div>
            </article>
        </Wrapper>
    )
}

export default Cart;


const Wrapper = styled.section`
article{
    margin: auto;
    background-image: 'url("/project-konnect/images/k-10.png")';
    background-size: "500px";
    background-position: "center center";
    background-repeat: "no-repeat";
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    border-radius: 10px;
}
.cartItem{
    padding: 10px 5px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.removeBtn{
    width: 30px;
    height: 30px;
    background: red;
    border-radius: 5px;
    color: white;
}
.itemsprice{
    font-weight: 700;
    font-size: 18px;
    margin: 0 20px;
}
.totalSec{
    margin: 20px 0;
    font-weight: 700;
    font-size: 18px;
}`;

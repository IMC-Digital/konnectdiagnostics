import React from 'react';
import { styled } from "styled-components";
import CartItemsList from '../CartItemsList';
import { NavLink } from 'react-router-dom';
import CartBillingSec from '../../components/cart/CartBillingSec';

const Cart = ({ userId, cart, setCart, checkOutFormData, setCheckOutFormData }) => {
    return (
        <Wrapper>
            <article className='w-md-1100px mx-auto m-5 p-0 d-flex'>
                <div className='' style={{ width: "60%" }}>
                    <div className='px-5 py-3 bg-light d-flex justify-content-between align-items-center border'>
                        <div>
                            <h2 className='text-k-secondary text-k-clr-secondary'>
                                Cart
                            </h2>
                            <span className='text-k-clr-text small fw-normal'>Selected Tests & Packages</span>
                        </div>
                        <NavLink to="/tests">
                            <button className='btn btn-outline-secondary btn-sm'>Add +</button>
                        </NavLink>
                    </div>
                    <div className='px-5 p-2'>
                        {cart?.map((item) => (
                            <CartItemsList key={item.product_id} item={item} userId={userId} cart={cart} setCart={setCart} />
                        ))}
                    </div>
                </div>
                <div className='p-5' style={{ width: "40%" }}>
                    <CartBillingSec
                        cart={cart}
                        setCart={setCart}
                        userId={userId}
                        checkOutFormData={checkOutFormData}
                        setCheckOutFormData={setCheckOutFormData}
                    />
                    <NavLink to="/checkout" className={cart.length === 0 ? 'disabled-link' : ''} style={{ pointerEvents: cart.length === 0 ? 'none' : 'auto' }}>
                        <button
                            type="button"
                            className='btn btn-primary w-100 fw-bold text-white'
                            disabled={cart.length === 0}
                        >
                            {/* &#8377;{grandTotalAmount} */}
                            <span className='ms-4 me-2 text-white'>Proceed To Checkout</span>
                            <i className="fa-solid fa-angle-right text-white"></i>
                        </button>
                    </NavLink>

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

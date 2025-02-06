import React from 'react';
import { styled } from "styled-components";
import CartBillingSec from '../../components/cart/CartBillingSec';
import { NavLink } from 'react-router-dom';
import MultiStepForm from '../../components/checkout/MultiStepForm';

export default function CheckoutProceed({ 
  userId, 
  cart, 
  setCart, 
  profileData, 
  setShowAddNewAddressPopup, 
  setShowAddNewMemberPopup,
  setShowPopupConfirmCheckout, 
  checkOutFormData, 
  setCheckOutFormData 
}) {
  return (
    <Wrapper className='py-md-5 py-3 px-md-0 px-3'>
      <article className='container border mx-auto px-0 row'>
        <div className='col-md-4 order-md-1 order-2 p-md-5 p-3 bg-light'>
          <NavLink to="/cart">
            <button type="button" className='btn btn-outline-secondary fw-bold mb-3'>
              <i className="fa-solid fa-angle-left me-2"></i> Back to cart
            </button>
          </NavLink>
          <CartBillingSec 
            cart={cart} 
            setCart={setCart} 
            userId={userId} 
            checkOutFormData={checkOutFormData} 
            setCheckOutFormData={setCheckOutFormData} 
          />
        </div>

        <div className='col-md-8 order-md-2 order-1 p-md-5 p-3'>
          <MultiStepForm
            cart={cart}
            setCart={setCart}
            userId={userId}
            profileData={profileData}
            checkOutFormData={checkOutFormData} 
            setCheckOutFormData={setCheckOutFormData}
            setShowAddNewMemberPopup={setShowAddNewMemberPopup}
            setShowAddNewAddressPopup={setShowAddNewAddressPopup}
            setShowPopupConfirmCheckout={setShowPopupConfirmCheckout}
          />
        </div>
      </article>
    </Wrapper>
  )
}


const Wrapper = styled.section`
article{
    overflow: hidden;
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
}
.clinicSelectoinChecked {
  background-color: #e0f7fa; 
  border-right: 4px solid var(--secondary-color);
}
#datesTabTitlesWrap{
    overflow: hidden;
    overflow-x: scroll;
}
`;


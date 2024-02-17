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
    <Wrapper>
      <article className='container mx-auto m-5 p-0 d-flex'>
        <div className='p-5 bg-light' style={{ width: "35%" }}>
          <NavLink to="/cart">
            <button type="button" className='btn btn-primary fw-bold text-white'>
              <i className="fa-solid fa-angle-left text-white"></i>
              <span className='ms-4 me-2 text-white'> Back to cart </span>
            </button>
          </NavLink>
          <div className='my-2'></div>
          <CartBillingSec 
            cart={cart} 
            setCart={setCart} 
            userId={userId} 
            checkOutFormData={checkOutFormData} 
            setCheckOutFormData={setCheckOutFormData} 
          />
        </div>
        <div className='p-5' style={{ width: "65%" }}>
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


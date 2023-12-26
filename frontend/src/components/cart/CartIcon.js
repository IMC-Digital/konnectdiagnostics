import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartIcon = ({ cart }) => {
  return (
    <Wrapper>
      <div className="cart-icon-box">
        <i className="fa-solid fa-cart-plus"></i>
        <span className="item-count">{cart.length}</span>
      </div>
    </Wrapper>
  );
};

export default CartIcon;
const Wrapper = styled.section`
  .cart-icon-box {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 50px;
  padding: 8px;
}

.item-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #fff;
  font-size: 14px;
  border-radius: 50%; 
  margin-left: 8px;
}

`;

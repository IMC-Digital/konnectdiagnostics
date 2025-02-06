import React from "react";
import { PopularTests } from "../requiredPages/PopularTests";

const ToggleKLT = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  return(
    <div className="mb-3">
      <PopularTests userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
    </div>
  );
};

export default ToggleKLT;

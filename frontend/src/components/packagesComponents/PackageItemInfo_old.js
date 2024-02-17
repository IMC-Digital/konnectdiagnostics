import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../api';

// =======================================================
import HealthScreen from "./healthpackages/HealthScreen";
import DiabeticPackage from "./healthpackages/DiabeticPackage";
import KonnectMasterHealthCheckup from "./healthpackages/KonnectMasterHealthCheckup";
import ExecutiveHealthCheckup from "./healthpackages/ExecutiveHealthCheckup";
import CardiacProfile from "./healthpackages/CardiacProfile";
import ExecutiveCardiacProfile from "./healthpackages/ExecutiveCardiacProfile";
import WellWomenPackage from "./healthpackages/WellWomenPackage";
import NutritionPackage from "./healthpackages/NutritionPackage";
import WholeBodyPackage from "./healthpackages/WholeBodyPackage";
import CancerScreeningMale from "./healthpackages/CancerScreeningMale";
import CancerScreeningFemale from "./healthpackages/CancerScreeningFemale";
// =======================================================
const hpContComps = [<HealthScreen />, <DiabeticPackage />, <KonnectMasterHealthCheckup />, <ExecutiveHealthCheckup />, <CardiacProfile />, <ExecutiveCardiacProfile />, <WellWomenPackage />, <NutritionPackage />, <WholeBodyPackage />, <CancerScreeningMale />, <CancerScreeningFemale />];


function PackageItemInfo({ item, auth, userId, cart, activeTab, handleLoginClick }) {
  const [quantity, setQuantity] = useState(0);
  const [showQuantityController, setShowQuantityController] = useState(false);

  useEffect(() => {
    const cartItem = cart.find((cartItem) => cartItem.product_id === item.product_id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowQuantityController(true);
    } else {
      setShowQuantityController(false);
    }
  }, [cart, item.product_id]);

  const handleAddToCartClick = () => {
    if (!auth) {
      handleLoginClick();
      return;
    }

    setShowQuantityController(true);
    const data = { product_id: item.product_id, userId, quantity: 1 };
    axios
      .post(`${BASE_API_URL}/addtocart`, data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // 
        } else {
          console.log('err occurred, not Success');
        }
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    updateCartItemQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItemQuantity(quantity - 1);
    } else if (quantity === 1) {
      removeCartItem(item.product_id, userId);
    }
  };

  const updateCartItemQuantity = (newQuantity) => {
    if (!auth) {
      handleLoginClick();
      return;
    }

    const data = { product_id: item.product_id, quantity: newQuantity, userId };
    axios
      .post(`${BASE_API_URL}/updatecartitemquantity`, data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // refreshCart();
        } else {
          console.log('err occurred while updating quantity');
        }
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  };

  const removeCartItem = (product_id, userId) => {
    if (!auth) {
      handleLoginClick();
      return;
    }

    const data = { product_id, userId };
    axios
      .post(`${BASE_API_URL}/removecartitem`, data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // 
        } else {
          console.log('err occurred while removing item');
        }
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  return (
    <div className={`tab-pane ${item.product_id === activeTab ? "active" : ""}`}>
      <div className="tab-bg bg-k-primary">{/* <h2>{tab.title}</h2> */}</div>
      <div className="pkg-active-bg-top d-flex">
        <div className="pkg-top d-flex">
          <div className="pkg-image">
            <img src={"/images/health-packages/" + item.product_name.toLowerCase().replace(/\s+/g, '-') + ".jpg"} alt={item.package_name} />
          </div>
          <div className="pkg-info-right">
            <div className="pkg-code">
              <h3>{item.test_name}</h3>
              <h5 className="code">Code :{item.product_code}</h5>
              <p className="text-k-clr-primary fw-bolder">
                <span> Price : &#8377; </span>
                {item.price}/-
              </p>
            </div>

            <div>
              {auth ? (
                showQuantityController ? (
                  <div className='qntCntWrp'>
                    <button className='plusminBtn plsBtn' onClick={handleDecrementQuantity}>-</button>
                    <span className='quantDisp'>{quantity}</span>
                    <button className='plusminBtn mnsBtn' onClick={handleIncrementQuantity}>+</button>
                  </div>
                ) : (
                  <button className='btn btn-sm btn-k-secondary' onClick={handleAddToCartClick}>Add to Cart</button>
                )
              ) : (
                <button className='btn btn-sm btn-k-secondary' onClick={() => handleLoginClick() }>Add to Cart</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pkg-tab-active-content">
        <div className="pkg-content mt-3">
          {hpContComps[parseInt(item.product_code) - 1]}
        </div>
      </div>
    </div>
  )
}

export default PackageItemInfo

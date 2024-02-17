// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import styled from "styled-components";

// // =======================================================
// import HealthScreen from "./healthpackages/HealthScreen";
// import DiabeticPackage from "./healthpackages/DiabeticPackage";
// import KonnectMasterHealthCheckup from "./healthpackages/KonnectMasterHealthCheckup";
// import ExecutiveHealthCheckup from "./healthpackages/ExecutiveHealthCheckup";
// import CardiacProfile from "./healthpackages/CardiacProfile";
// import ExecutiveCardiacProfile from "./healthpackages/ExecutiveCardiacProfile";
// import WellWomenPackage from "./healthpackages/WellWomenPackage";
// import NutritionPackage from "./healthpackages/NutritionPackage";
// import WholeBodyPackage from "./healthpackages/WholeBodyPackage";
// import CancerScreeningMale from "./healthpackages/CancerScreeningMale";
// import CancerScreeningFemale from "./healthpackages/CancerScreeningFemale";
// // =======================================================
// const hpContComps = [
//   <HealthScreen />,
//   <DiabeticPackage />,
//   <KonnectMasterHealthCheckup />,
//   <ExecutiveHealthCheckup />,
//   <CardiacProfile />,
//   <ExecutiveCardiacProfile />,
//   <WellWomenPackage />,
//   <NutritionPackage />,
//   <WholeBodyPackage />,
//   <CancerScreeningMale />,
//   <CancerScreeningFemale />,
// ];

// function PackageItemInfo({
//   item,
//   cart,
//   setCart,
//   activeTab,
// }) {
//   const [isItemSelected, setIsItemSelected] = useState(false);

//   const handleAddToCart = (item) => {
//     if (!isItemSelected) {
//       const prevCartItems =
//         JSON.parse(localStorage.getItem("selectedCartItems")) || [];
//       const newCartItems = [...prevCartItems, item];
//       localStorage.setItem("selectedCartItems", JSON.stringify(newCartItems));
//       setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

//       toast.success(`${item.test_name} added to cart!`, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//       });
//     }
//   };
//   const handleRemoveFromCart = (itemToRemove) => {
//     const prevCartItems =
//       JSON.parse(localStorage.getItem("selectedCartItems")) || [];
//     console.log("prevCartItems:", prevCartItems);
//     const indexToRemove = prevCartItems.findIndex(
//       (item) => item.product_id === itemToRemove.product_id
//     );
//     const updatedCartItems = [
//       ...prevCartItems.slice(0, indexToRemove),
//       ...prevCartItems.slice(indexToRemove + 1),
//     ];
//     localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
//     setCart(updatedCartItems);

//     toast.error(`${item.test_name} removed form cart!`, {
//       position: toast.POSITION.BOTTOM_RIGHT,
//     });
//   };
//   useEffect(() => {
//     setIsItemSelected(
//       cart.some((cartItem) => cartItem.product_id === item.product_id)
//     );
//   }, [cart, item]);

//   return (
//     <Wrapper>
//       <div
//         className={`tab-pane ${item.product_id === activeTab ? "active" : ""}`}
//       >
//         <div className="tab-bg bg-k-primary">{/* <h2>{tab.title}</h2> */}</div>
//         <div className="pkg-active-bg-top d-flex">
//           <div className="pkg-top d-flex">
//             <div className="pkg-image">
//               <img
//                 src={
//                   "/images/health-packages/" +
//                   item.test_name.toLowerCase().replace(/\s+/g, "-") +
//                   ".jpg"
//                 }
//                 alt={item.package_name}
//               />
//             </div>
//             <div className="pkg-info-right">
//               <div className="pkg-code">
//                 <h3>{item.test_name}</h3>
//                 <h5 className="code">Code :{item.product_code}</h5>
//                 <p className="text-k-clr-primary fw-bolder">
//                   <span> Price : &#8377; </span>
//                   {item.price}/-
//                 </p>
//               </div>

//               <div>
//                 {isItemSelected ? (
//                   <button
//                     className="btn btn-sm btn-success text-white"
//                     onClick={() => handleRemoveFromCart(item)}
//                   >
//                     Remove Item
//                   </button>
//                 ) : (
//                   <button
//                     className="atc-btn btn btn-sm btn-secondary text-white"
//                     onClick={() => handleAddToCart(item)}
//                   >
//                     Add to Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="pkg-tab-active-content">
//           <div className="pkg-content mt-3">
//             {hpContComps[parseInt(item.product_code) - 1]}
//           </div>
//         </div>

//         <ToastContainer />
//       </div>
//     </Wrapper>
//   );
// }

// export default PackageItemInfo;
// const Wrapper = styled.section`
//   .atc-btn {
//     background-color: ${({ theme }) => theme.colors.secondary};
//     border: 0px solid ${({ theme }) => theme.colors.primary};
//   }
// `;



import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


function PackageItemInfo({ item, auth, userId, cart, setCart, activeTab, handleLoginClick }) {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const handleAddToCart = (item) => {
    if(!isItemSelected){
      item.quantity = 1;
      const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      const newCartItems = [...prevCartItems, item];
      localStorage.setItem('selectedCartItems', JSON.stringify(newCartItems));
      setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

      toast.success(`${item.test_name} added to cart!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        duration: 1000
      })
    }  
  };
  const handleRemoveFromCart = (itemToRemove) => {
    const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
    console.log("prevCartItems:", prevCartItems);
    const indexToRemove = prevCartItems.findIndex(item => item.product_id === itemToRemove.product_id);
    const updatedCartItems = [...prevCartItems.slice(0, indexToRemove), ...prevCartItems.slice(indexToRemove + 1)];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

    toast.error(`${item.test_name} removed form cart!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      duration: 1000
    })
  };
  useEffect(() => {
    setIsItemSelected(cart.some(cartItem => cartItem.product_id === item.product_id));
  }, [cart, item]);

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
              {isItemSelected ? (
                <button className='btn btn-success text-white' onClick={() => handleRemoveFromCart(item)}>Remove Item</button>
              ) : (
                <button className='btn-sm btn-k-primary text-white' onClick={() => handleAddToCart(item)}>Add to Cart</button>
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

      <ToastContainer />
    </div>
  )
}

export default PackageItemInfo

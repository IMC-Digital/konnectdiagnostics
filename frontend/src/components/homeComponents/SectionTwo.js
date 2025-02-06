import React, { useState } from "react";
import { styled } from "styled-components";

import ToggleKT from "../functionalComponents/ToggleKT";
import ToggleKHP from "../functionalComponents/ToggleKHP";
import ToggleKLT from "../functionalComponents/ToggleKLT";
import ToggleKL from "../functionalComponents/ToggleKL";

const SectionTwo = ({ localCartItems, setLocalCartItems, userId, auth, cart, setCart, handleLoginClick }) => {
  const [activeComponent, setActiveComponent] = useState("ToggleKT");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <Wrapper>
      <div className="s2 mx-auto">
        <div className="s2-tests-container container">

          {/* Tab Titles */}
          <div className="k-btns d-flex justify-content-sm-center p-md-0 p-2">
            <button className={`k-btn ${ activeComponent === "ToggleKT" ? "active" : "" }`} onClick={() => handleButtonClick("ToggleKT")}>
              Search Tests
            </button>
            <button className={`k-btn ${ activeComponent === "ToggleKHP" ? "active" : ""}`} onClick={() => handleButtonClick("ToggleKHP")}>
              Health Packages
            </button>
            <button className={`k-btn ${ activeComponent === "ToggleKLT" ? "active" : ""}`} onClick={() => handleButtonClick("ToggleKLT")}>
              Frequently ordered Tests
            </button>
            <button className={`k-btn ${ activeComponent === "ToggleKL" ? "active" : ""}`} onClick={() => handleButtonClick("ToggleKL")}>
              Locations
            </button>
          </div>

          <div className="s2-selection-box d-flex justify-content-center gap-2 p-3">
            {activeComponent === "ToggleKT" && (
              <ToggleKT
                localCartItems={localCartItems} 
                setLocalCartItems={setLocalCartItems}
                userId={userId}
                auth={auth}
                cart={cart}
                setCart={setCart}
                handleLoginClick={handleLoginClick}
              />
            )}
            {activeComponent === "ToggleKHP" && (
              <ToggleKHP
                userId={userId}
                auth={auth}
                cart={cart}
                setCart={setCart}
                handleLoginClick={handleLoginClick}
              />
            )}
            {activeComponent === "ToggleKLT" && (
              <ToggleKLT
                userId={userId}
                auth={auth}
                cart={cart}
                setCart={setCart}
                handleLoginClick={handleLoginClick}
              />
            )}
            {activeComponent === "ToggleKL" && (
              <ToggleKL userId={userId} cart={cart} setCart={setCart} />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.section`
  .s2 {
    background: url("/images/k-10.png") #F6F9FC;
    background-repeat: no-repeat;
    background-position: 50px 50px;;
    background-size: 50%;
  }
  .s2-tests-container {
    padding: 50px 0;
    z-index: 50;
  }
  .k-btn {
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    color: var(--primary-color);
    font-weight: 500;
    margin: 5px;
    transition: 0.5s;
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
  .active {
    background-color: var(--primary-color);
    color: white;
    box-shadow: var(--primary-color) 0px 5px 10px -5px;
  }
  @media (max-width: 768px) {
    .s2-tests-container{
      padding: 0;
    }
    .k-btns {
      overflow-x: auto; /* Enable horizontal scrolling */
      white-space: nowrap; /* Prevent button text from wrapping */
      display: flex;
      font-weight: 400;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: nowrap;
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: ${({ theme }) => theme.colors.primary} transparent; /* Firefox */

      /* WebKit (Chrome, Safari, and newer versions of Opera) */
      &::-webkit-scrollbar {
        height: 2px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }
    .k-btn {
      font-size: 14px;
      min-width: auto;
      padding: 8px 20px;
    }
  }
`;

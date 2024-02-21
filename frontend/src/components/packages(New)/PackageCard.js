import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "react-bootstrap";
import PackageTestsGrid from "./PackageTestsGrid";

export default function PackageCard({ cart, setCart, item }) {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [packageTests, setPackageTests] = useState([]);

  const handleAddToCart = (item) => {
    if (!isItemSelected) {
      item.quantity = 1;
      item.type = "package";
      item.price = sumPrices(packageTests);
      const prevCartItems =
        JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      const newCartItems = [...prevCartItems, item];
      localStorage.setItem("selectedCartItems", JSON.stringify(newCartItems));
      setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

      toast.success(`${item.package_name} added to cart`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "green-toast",
      });
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const prevCartItems =
      JSON.parse(localStorage.getItem("selectedCartItems")) || [];
    console.log("prevCartItems:", prevCartItems);
    const indexToRemove = prevCartItems.findIndex(
      (item) => item.package_id === itemToRemove.package_id
    );
    const updatedCartItems = [
      ...prevCartItems.slice(0, indexToRemove),
      ...prevCartItems.slice(indexToRemove + 1),
    ];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

    toast.error(`${item.package_name} removed from cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "red-toast",
    });
  };

  useEffect(() => {
    setIsItemSelected(cart.some((cartItem) => cartItem.package_id === item.package_id));
  }, [cart, item]);

  return (
    <Wrapper>
      <div className="package-card-wrapper rounded-3 p-0 overflow-hidden">
        <div className="d-flex align-items-center bg-k-light p-3">
          <div
            className="bg-white d-flex-cc p-2 rounded me-2"
            style={{ width: "45px", height: "45px" }}
          >
            <Image
              src={`/images/organs/${convertToTitleCase(
                item.package_category
              )}.png`}
              rounded
              style={{ width: "35px", height: "35px" }}
            />
          </div>
          <h2 className="text-k-text mb-0">
            <span className="text-k-clr-text text-k-accent fw-bold">
              {" "}
              {item.package_name}{" "}
            </span>
            <br />
            <span className="small text-k-clr-secondary">
              Tests covered {packageTests && packageTests.length}{" "}
            </span>
          </h2>
        </div>
        <div className="hr"></div>

        <div className="p-0">
          <div className="p-3">
            <p className="text-k-accent mb-0"> Tests / Parameters </p>

            <PackageTestsGrid
              packageId={item.package_id}
              packageTests={packageTests}
              setPackageTests={setPackageTests}
            />
          </div>

          <div className="ftr-sec bg-k-light px-3 py-2 w-100 d-flex-cb tcardfooter">
            {isItemSelected ? (
              <button
                className="atc-btn-rmv btn btn-sm btn-success text-white"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove Item
              </button>
            ) : (
              <button
                className="atc-btn btn btn-sm btn-k-secondary text-white"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            )}
            <h5 className="price mb-0 fw-bolder text-k-clr-secondary">
              <small>&#8377; </small> {sumPrices(packageTests)}{" "}
            </h5>
          </div>
        </div>
      </div>

      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 350px;
  .package-card-wrapper {
    background: white;
    height: 360px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: 0.5s;
    &:hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    .ftr-sec {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const convertToTitleCase = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const sumPrices = (packageTests) => {
  // Check if packageTests is an array
  if (!Array.isArray(packageTests)) {
    return 0; // If not an array, return 0
  }

  // Use reduce to sum up the prices
  return packageTests.reduce((total, item) => total + (item.price || 0), 0);
};

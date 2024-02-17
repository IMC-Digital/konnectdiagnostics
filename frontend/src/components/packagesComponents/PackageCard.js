import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PackageCard({ item, auth, userId, cart, setCart, handleLoginClick }) {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const handleAddToCart = (item) => {
    if (!isItemSelected) {
      item.quantity = 1;
      const prevCartItems =
        JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      const newCartItems = [...prevCartItems, item];
      localStorage.setItem("selectedCartItems", JSON.stringify(newCartItems));
      setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

      toast.success(`${item.product_name} added to cart!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  const handleRemoveFromCart = (itemToRemove) => {
    const prevCartItems =
      JSON.parse(localStorage.getItem("selectedCartItems")) || [];
    console.log("prevCartItems:", prevCartItems);
    const indexToRemove = prevCartItems.findIndex(
      (item) => item.product_id === itemToRemove.product_id
    );
    const updatedCartItems = [
      ...prevCartItems.slice(0, indexToRemove),
      ...prevCartItems.slice(indexToRemove + 1),
    ];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

    toast.error(`${item.product_name} removed form cart!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  useEffect(() => {
    setIsItemSelected(
      cart.some((cartItem) => cartItem.product_id === item.product_id)
    );
  }, [cart, item]);

  return (
    <Wrapper>
      <div
        key={item.product_id}
        className="package-card bg-white shadow-sm rounded m-2"
      >
        <img
          src={
            "/images/health-packages/" +
            item.product_name.toLowerCase().replace(/\s+/g, "-") +
            ".jpg"
          }
          className="packageFI"
          alt=""
        />
        <img src="/images/k.png" className="cardcomplogo" alt="" />
        <div className="p-3">
          <div className="mb-5">
            <h6 className="text-k-accent text-k-clr-primary mb-2">
              {item.product_name}
            </h6>
            <p className="small mb-0">
              {" "}
              <b> Package Code: </b> {item.product_code}{" "}
            </p>
          </div>
          <div className="ftr-sec bg-light px-3 py-2 w-100 d-flex justify-content-between border-top tcardfooter">
            <div>
              {isItemSelected ? (
                <button
                  className="btn btn-sm btn-success text-white"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove Item
                </button>
              ) : (
                <button
                  className="atc-btn btn btn-sm btn-secondary text-white"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div>
              <h5 className="price mb-0 fw-bolder">
                {" "}
                <small>Rs: </small> {item.price}{" "}
              </h5>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </Wrapper>
  );
}

export default PackageCard;
const Wrapper = styled.section`
  .atc-btn {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 0px solid ${({ theme }) => theme.colors.primary};
  }
`;

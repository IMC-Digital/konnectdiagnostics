import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TestCard = ({ cart, setCart, item }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const handleAddToCart = (item) => {
    if (!isItemSelected) {
      const prevCartItems =
        JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      const newCartItems = [...prevCartItems, item];
      localStorage.setItem("selectedCartItems", JSON.stringify(newCartItems));
      setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

      toast.success(`${item.product_name} added to cart`, {
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
      (item) => item.product_id === itemToRemove.product_id
    );
    const updatedCartItems = [
      ...prevCartItems.slice(0, indexToRemove),
      ...prevCartItems.slice(indexToRemove + 1),
    ];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

    toast.error(`${item.product_name} removed from cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "red-toast",
    });
  };
  useEffect(() => {
    setIsItemSelected(
      cart.some((cartItem) => cartItem.product_id === item.product_id)
    );
  }, [cart, item]);

  return (
    <Wrapper>
      <div className="tstCards d-flex gap-2">
        <img src="/images/k.png" className="cardcomplogo" alt="" />
        <div className="tstsCard w-100">
          <div className="go-corner"></div>
          <div className="tcardbody">
            <div className="card_org_cont">
              <img
                src={"/images/organs/" + item.category + ".png"}
                className="testOrgImg"
                alt=""
              />
            </div>
            <h6 className="text-k-accent text-k-clr-primary mb-2">
              {item.product_name}
            </h6>
            <p className="small mb-0">
              <b> INVCODE: </b> {item.product_code}{" "}
            </p>
            <div className="w-100">
              <p className="mb-1 small">
                <b> Sample Type: </b> {item.sample_type}{" "}
              </p>
              {/* <p className="mb-1 small"> <b> Test Report Delivery: </b> {item.test_report_delivery} </p> */}
              {/* <p className="mb-1 small"> <b> Frequency: </b> {item.frequency} </p> */}
            </div>
          </div>

          <div className="ftr-sec bg-light px-3 py-2 w-100 d-flex justify-content-between border-top tcardfooter">
            <div>
              {isItemSelected ? (
                <button
                  className="atc-btn-rmv btn btn-sm btn-success text-white"
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
                <small>Rs: </small> {item.price}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .atc-btn {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 0px solid ${({ theme }) => theme.colors.primary};
  }
  .tstCards {
    flex-wrap: wrap;
    text-align: left;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    color: #fff;
    border-radius: 4px;
    width: 300px;
    transition: 0.3s;
    overflow: hidden;
    position: relative;
    z-index: 0;
    .card_org_cont {
      margin-bottom: 15px;
      .testOrgImg {
        width: 30px;
      }
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.05) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.06) 0px 30px 60px -30px;
    }
  }
  .tcardbody {
    z-index: 2;
    padding: 1rem;
    overflow: hidden;
    position: relative;
  }
  .tcardfooter {
    z-index: 3;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
  }
  .tstCards:hover {
    cursor: pointer;
    &:hover .tstCardBtn {
      color: ${({ theme }) => theme.colors.txt};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .tstsCard {
    height: 230px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    .tstCardBtn {
      background-image: linear-gradient(180deg, #005bab, #00aeef90);
      padding: 5px 15px;
      font-weight: 600;
      border-radius: 5px;
      font-size: 14px;
      background: white;
      position: relative;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: 0.5s;
        border-radius: 5px;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        z-index: 1;
        &:before {
          width: 100%;
        }
      }
    }
    .tstTitle {
      font-size: 1.1rem;
      font-weight: 900;
      line-height: 1.6rem;
      margin-bottom: 18px;
    }
    .tstInv {
      color: #b3b3b3;
      font-weight: 400;
      font-size: 0.8rem;
    }
    .tstPrice {
      color: #00203c;
      font-weight: 900;
      font-size: 1.2rem;
    }
  }

  .tstCardBtn {
    color: #005bab;
    font-size: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: flex-end;
  }
  .addtocartbtn {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  .txtcartBtn:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
  .para {
    color: #fff;
  }
`;

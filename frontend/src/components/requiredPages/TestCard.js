import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TestCard = ({ cart, setCart, item }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const handleAddToCart = (item) => {
    if (!isItemSelected) {
      item.quantity = 1;
      item.type = "test";
      const prevCartItems =
        JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      const newCartItems = [...prevCartItems, item];
      localStorage.setItem("selectedCartItems", JSON.stringify(newCartItems));
      setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

      toast.success(`${item.test_name} added to cart`, {
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
      (item) => item.test_id === itemToRemove.test_id
    );
    const updatedCartItems = [
      ...prevCartItems.slice(0, indexToRemove),
      ...prevCartItems.slice(indexToRemove + 1),
    ];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

    toast.error(`${item.test_name} removed from cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "red-toast",
    });
  };
  useEffect(() => {
    setIsItemSelected(
      cart.some((cartItem) => cartItem.test_id === item.test_id)
    );
  }, [cart, item]);

  return (
    <Wrapper>
      <div className="tstCards d-flex">
        <img src="/images/k.png" className="cardcomplogo" alt="" />
        <div className="tstsCard w-100">
          <div className="go-corner"></div>
          <div className="tcardbody">
            <div className="card_org_cont">
              <img src={"/images/organs/" + item.category + ".png"} className="testOrgImg" alt="" />
            </div>
            <h2 className="tstTitle text-k-text fw-bold mb-2" style={{height: "50px"}}> {item.test_name} </h2>
            <hr />
            <p className="mb-1 small mb-0"> <span className="fw-bold"> Fasting: </span> {item.fasting} </p>
            <p className="mb-1 small mb-0"> <span className="fw-bold"> Sample Type: </span> {item.sample_type} </p>
            <p className="mb-1 small mb-0"> <span className="fw-bold"> Pre Test Preparation: </span> {item.pre_test_preparation} </p>
          </div>

          <div className="ftr-sec bg-k-light px-3 py-2 w-100 d-flex justify-content-between border-top tcardfooter">
            <div>
              {isItemSelected ? (
                <button
                  className="atc-btn-rmv btn btn-success text-white"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove Item
                </button>
              ) : (
                <button
                  className="atc-btn btn btn-secondary text-white"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div className="d-flex-cc">
              <h2 className="price mb-0 fw-bolder text-k-accent text-k-clr-primary">
                <small>&#8377; </small> {item.price}{" "}
              </h2>
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
    border: 2px solid rgba(0, 0, 0, 0.05);
    color: #fff;
    border-radius: 15px;
    width: 300px;
    transition: 0.5s;
    overflow: hidden;
    position: relative;
    z-index: 0;
    .card_org_cont {
      margin-bottom: 15px;
      .testOrgImg {
        width: 30px;
        transition: 0.5s
      }
    }
    &:hover {
      transform: translateY(-1.1rem);
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      border: 2px solid #00aeef;
      background: #F6F9FC;
      ${'' /* .tstTitle{ color: white; }
      .tcardbody p, .tcardbody span{ color: white; }
      .testOrgImg{ transform: scale(1.2) }
      .tcardfooter button{ background: white; color: red; } */}
    }
  }
  .tcardbody {
    z-index: 2;
    padding: 1.2rem;
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
    height: 300px;
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
      color: var(--primary-color);
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
  .cardcomplogo{
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    z-index: 2;
  }
`;

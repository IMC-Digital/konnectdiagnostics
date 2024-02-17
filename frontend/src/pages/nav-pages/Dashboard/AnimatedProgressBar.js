import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const AnimatedProgressBar = ({ orderItem }) => {
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const state = orderItem.order_item_delivery_status;
    switch (state) {
      case "Order Placed":
        setActiveStep(0)
        break;
      case "Sample Collection":
        setActiveStep(1)
        break;
      case "Diagnostic Testing":
        setActiveStep(2)
        break;
      case "Data Analysis":
        setActiveStep(3)
        break;
      case "Report Available":
        setActiveStep(4)
        break;

      default: setActiveStep(0)
        break;
    }
    console.log(state);
  }, [orderItem, setActiveStep])
  // const handleStepClick = (index) => {
  //     setActiveStep(index);
  // };

  return (
    <Wrapper>
      <div className='d-flex-cb my-1 w-100 p-2 rounded'>
        <div className='d-flex w-100 justify-content-start align-item-start'>
          <h2 className="mb-0 text-k-text bg-k-light px-3 py-2">
            <span className="text-k-accent small text-k-clr-primary fw-bold"> {orderItem.product_name}  </span>
            <span className="text-k-accent small text-k-clr-primary fw-bold"> ( {orderItem.product_type} ) </span>
            <span className="text-k-text small"> - {orderItem.member_name}</span>
          </h2>
        </div>
      </div>

      <ul className='d-flex'>
        {[
          'Order Placed',
          'Sample Collection',
          'Diagnostic Testing',
          'Data Analysis',
          'Report Available'
        ].map((step, index) => (
          <li key={index}>
            <div className={`d-flex-cc progress ${index <= activeStep ? 'active' : ''}`}>
              <p className='mb-0'><i className="fa-regular fa-circle opacity-25"></i></p>
              <i className="fa-solid fa-check text-white" style={{ fontSize: "16px" }}></i>
            </div>
            <i className="icon uil uil-capture">
              {/* <img src={`/images/icons/ProgressBarIcons/${step.toLowerCase().replace(/\s/g, '_')}.svg`} alt="" /> */}
            </i>
            <p className="text mb-0">{step}</p>
          </li>
        ))}

        <div className="my-progressbar">
          <div className="my-progress" style={{ width: `calc(${activeStep} * (100% / 4))` }}></div>
        </div>
      </ul>

      <div className='hr' />
    </Wrapper>
  );
};

export default AnimatedProgressBar;



const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "pop";
  flex-direction: column;

  .head {
    text-align: center;
  }

  .head_1 {
    font-size: 30px;
    font-weight: 600;
    color: #333;
  }

  .head_1 span {
    color: #ff4732;
  }

  .head_2 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-top: 3px;
  }

  ul {
    height: 80px;
    width: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
  }
  .my-progressbar{
    width: 90%;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #F6F9FC;
    z-index: 1;
    .my-progress{
      height: 5px;
      background-color: var(--secondary-color);
    }
  }
  
  ul li {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100px;
  }

  ul li .icon {
    font-size: 35px;
    color: #ff4732;
    margin: 0 75px;
  }

  ul li .text {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
  }

  /* Progress Div Css  */
  ul li .progress {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #F6F9FC;
    margin: 14px 0;
    display: grid;
    place-items: center;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translate(0%, -110%);
    cursor: pointer;
    z-index: 2;
  }

  .progress::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 5px;
    background-color: rgba(68, 68, 68, 0.781);
    background: red;
    right: 30px;
  }

  .one::after {
    width: 0;
    height: 0;
  }

  ul li .progress .uil {
    display: none;
  }

  ul li .progress p {
    font-size: 13px;
  }

  /* Active Css  */
  ul li .active {
    background-color: var(--secondary-color);
    display: grid;
    place-items: center;
  }

  li .active::after {
    background-color: #ff4732;
  }

  ul li .active p {
    display: none;
  }

  ul li .active .uil {
    font-size: 20px;
    display: flex;
  }

  /* Responsive Css  */
  @media (max-width: 980px) {
    ul {
      flex-direction: column;
    }

    ul li {
      flex-direction: row;
    }

    ul li .progress {
      margin: 0 30px;
    }

    ul li .progress::after {
    content: ' ';
    position: absolute;
    width: ${(props) => (props.activeStep - 1) * 25}%;
    height: 5px;
    background-color: #ff4732;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;
  }

    ul li .one::after {
      width: 0;
      height: 0;
    }

    ul li .icon {
      margin: 15px 0;
    }
  }

  @media (max-width: 600px) {
    .head .head_1 {
      font-size: 24px;
    }

    .head .head_2 {
      font-size: 16px;
    }
  }
`;
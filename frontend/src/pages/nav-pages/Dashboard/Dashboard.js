import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import MyBookings from "./MyBookings";
import MySampleTracing from "./MySampleTracing";
import MyReports from "./MyReports";
import axios from 'axios';
import { BASE_API_URL } from '../../../api';
import { useNavigate } from 'react-router-dom';

function Dashboard({ userId, userName, auth, profileData }) {
  // tabs controllers
  const [activeTab, setActiveTab] = useState(0);
  const DashboardTabs = ["My Bookings", "My Sample Tracing", "My Reports"];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Navigate to single order details page with orderid 
  const navigate = useNavigate();
  const navigateToOrderDetails = (orderId) => {
    navigate(`/dashboard/order-details?orderId=${orderId}`);
  };

  // fetching all orders
  const [allOrdersData, setAllOrdersData] = useState([]);
  useEffect(() => {
    const getAllOrder = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/orders/${userId}`);
        setAllOrdersData(response.data.orders);
      } catch (error) {
        console.log("error at fetching all active order", error);
      }
    }
    getAllOrder();
  }, [userId, setAllOrdersData])

  return (
    <Wrapper>
      <div className="container">
        <div className="userDashboard-wrapper shadow-sm rounded my-5 mx-auto p-0">
          <div className="d-flex">
            <div className="tab-title-wrapper-main bg-light w-25">
              <div className="d-flex p-3">
                <div>
                  <div className="profilePhoto">
                    <img src="/images/k.png" alt="siteLogo" />
                  </div>
                </div>
                <div className="ps-2">
                  <h2 className="text-k-accent mb-0">{userName}</h2>
                  <p className="text-k-text text-light-dark small mb-0">
                    {profileData.email}
                  </p>
                  <p className="text-k-text text-light-dark small mb-0">
                    {profileData.mobile_number}
                  </p>
                </div>
              </div>
              {DashboardTabs.map((tab, index) => (
                <div key={index} className={`tab-title py-2 px-4 ${index === activeTab ? "active" : ""}`} onClick={() => handleTabClick(index)}>
                  <span className="text-k-text">{tab}</span>
                </div>
              ))}
            </div>
            <div className="tab-content w-75 px-md-5 py-md-3 p-sm-3 p-2">
              {DashboardTabs[activeTab] === DashboardTabs[0] && <MyBookings
                allOrdersData={allOrdersData}
                userId={userId}
                navigateToOrderDetails={navigateToOrderDetails}
              />
              }
              {DashboardTabs[activeTab] === DashboardTabs[1] && <MySampleTracing
                allOrdersData={allOrdersData}
                userId={userId}
                navigateToOrderDetails={navigateToOrderDetails}
              />}
              {DashboardTabs[activeTab] === DashboardTabs[2] && <MyReports
                allOrdersData={allOrdersData}
                userId={userId}
                navigateToOrderDetails={navigateToOrderDetails}
              />}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;

const Wrapper = styled.section`
  #active-orders-tab{
    
  }

  .dashboard-orders-tab {
    .tabs-bottom-line:after{
        content: "";
        position: absolute;
        left: 0; 
        bottom: -10px;
        display: block;
        width: 28px;
        height: 5px;
        background: #e3e3e3;
        border-radius: 10px;
    }
    button.active  {
      .tabs-bottom-line:after {
        background: var(--secondary-color);
      }
    }

    .order-price-accordian button{
      padding: 8px;
    }
  }

  .tab-title-wrapper-main {
    height: 80vh;
  }
  .tab-title-wrapper-main .tab-title {
    font-size: 16px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: all ease-in-out 0.2s;
    .icon {
      width: 20px;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
  .tab-title-wrapper-main .active {
    background: #e0f7fa;
    border-left: 4px solid #42b3f4;
  }
  .profilePhoto {
    width: 40px;
    height: 40px;
    padding: 8px;
    background: white;
    border: 2px solid white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    display: flex;
    img {
      width: 100%;
    }
  }
  .progressBarLine {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 78%;
    height: 7px;
    z-index: 0;
  }
  /* -- Order Tracking */
`;

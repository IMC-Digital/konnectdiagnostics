import React, { useState } from 'react';
import { styled } from "styled-components";
import MyBookings from './MyBookings';
import MySampleTracing from './MySampleTracing';
import MyReports from './MyReports';

function Dashboard({ userId, userName, auth, profileData }) {
    const [activeTab, setActiveTab] = useState(0);

    const DashboardTabs = ['My Bookings', 'My Sample Tracing', 'My Reports'];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <Wrapper>
            <div className='container'>
                <div className='userDashboard-wrapper shadow-sm rounded my-5 mx-auto p-0'>
                    <div className='d-flex'>
                        <div className="tab-title-wrapper-main bg-light w-25">
                            <div className="d-flex my-2 p-3">
                                <div className="profilePhoto">
                                    <img src="/images/k.png" alt="siteLogo" />
                                </div>
                                <div className="ps-2">
                                    <h2 className="text-k-accent mb-0">{userName}</h2>
                                    <small className="text-k-text">{profileData.email}</small>
                                </div>
                            </div>
                            <hr />
                            {DashboardTabs.map((tab, index) => (
                                <div key={index} className={`tab-title py-2 px-4 ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                                    <span className='text-k-text'>{tab}</span>
                                </div>
                            ))}

                        </div>
                        <div className="tab-content w-75">
                            {DashboardTabs[activeTab] === DashboardTabs[0] && <MyBookings />}
                            {DashboardTabs[activeTab] === DashboardTabs[1] && <MySampleTracing />}
                            {DashboardTabs[activeTab] === DashboardTabs[2] && <MyReports />}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.section`
.userDashboard-wrapper{
    width: 1100px;
    height: 80vh;
}

.tab-title-wrapper{
    display: flex;
}
.tab-title-wrapper-main{
    height: 80vh;
}
.tab-title-wrapper-main .tab-title{
  font-size: 16px;
  cursor: pointer;
  color: rgba(0,0,0,.4);
  transition: all ease-in-out .2s;
  .icon{
    width: 20px;
    fill: ${({ theme }) => theme.colors.primary};
  }
}
.tab-title-wrapper-main .active{
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    border-bottom: 2px solid #42b3f4;
    color: white;
}
.tab-title2{
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin: 5px;
    transition: 0.5s;
    &:hover {
        cursor: pointer;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
}
.tab-title-wrapper .active{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
}
.tab-content{
    border-radius: 8px;
    background: white;
}
.profilePhoto{
    width: 40px;
    height: 40px;
    padding: 8px;
    border: 2px solid white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    display: flex;
    img{
        width: 100%;
    }
}

/* Order Tracking -- */
.progressBarLine{
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

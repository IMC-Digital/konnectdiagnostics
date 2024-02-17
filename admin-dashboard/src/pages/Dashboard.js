import React from 'react';
import { styled } from "styled-components";
import DashboardTabs from '../components/DashboardTabs';

export default function Dashboard() {
  return (
    <Wrapper>
      <div className="container-fluid overflow-hidden rounded bg-light1 h-100 p-0">
        <DashboardTabs />
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
height: 100vh;
width: 100%;
padding: 30px;
background: #eeeeee;
.main-tabs-title-wrapper{
    overflow: hidden;
    .nav-item a{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 0 !important;
        span{ font-size: 14px; }
        i{ font-size: 10px; }
    }
    a.active span, a.active i{
        color: white !important;
    }
    .nav-item:hover{
        background-color: #f7f7f7;
    }
}


.tab-content{
    align-self: stretch;
    height: 100%;
    overflow-Y: scroll;
}

.main-tabs-title-wrapper{
    background: white;
    .nav-item{
        transition: 0.3s;
        &:hover{
            background: #f7f7f7;
        }
    }
}
.brand-logo{
    margin-bottom: 25px;
    width: 100%;
    img{
        width: 150px;
    }
}
`
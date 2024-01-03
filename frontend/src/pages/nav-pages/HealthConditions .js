import React from "react";
import { styled } from "styled-components";
import HcCard from "../../components/services/HcCard";

const HealthConditions = () => {
  return (
    <Wrapper>
      <div className="banner pb d-flex">
        <div className="container flex">
          <h1 className="page_title text-k-mainHeadings">Health Conditions</h1>
        </div>
      </div>
      <div className="container health-conditions mt-5"></div>
      <HcCard />
    </Wrapper>
  );
};

export default HealthConditions;
const Wrapper = styled.section`
  .banner {
    background: url("/images/banners/health-conditions-bg-image.jpg");
  }
  .health-conditions {
    text-align: center;
    /* margin: 2rem auto; */
  }
`;

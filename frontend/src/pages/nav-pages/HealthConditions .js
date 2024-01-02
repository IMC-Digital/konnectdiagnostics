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
    background: url("https://img.freepik.com/free-photo/hand-cupping-stethoscope-health-concept_53876-129536.jpg?w=1380&t=st=1704183181~exp=1704183781~hmac=73fabd742f0f51354bf1417541990df56612b74a559395f4fd8f58c2957ee930");
  }
  .health-conditions {
    text-align: center;
    /* margin: 2rem auto; */
  }
`;

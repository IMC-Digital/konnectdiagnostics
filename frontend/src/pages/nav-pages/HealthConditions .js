import React from "react";
import { styled } from "styled-components";
import HcCard from "../../components/services/HcCard";
import PageBanner from "../../components/PageBanner";

const HealthConditions = () => {
  return (
    <Wrapper>
      <PageBanner title={"Health Conditions"} bannerImg={'health-conditions-bg-image'} />
      <div className="container health-conditions mt-5"></div>
      <HcCard />
    </Wrapper>
  );
};

export default HealthConditions;
const Wrapper = styled.section`
  .health-conditions {
    text-align: center;
  }
`;

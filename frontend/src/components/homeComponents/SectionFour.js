import React from "react";
// import MyCarousel from "../requiredPages/Carousel";
import styled from "styled-components";
import { PopularTests } from "../requiredPages/PopularTests";
import HomeSectionsHeading from "./SectionsHeadingAndPara";

const SectionFour = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  return (
    <Wrapper className="py-5 px-md-0 px-3">
      <div className="container">
        <HomeSectionsHeading 
          title={"Popular Tests"} 
          para={`Explore Konnect's popular diagnostic tests to gain valuable insights into your health, cognition, and overall well-being. Take charge of your health journey now.`}
        />

        <div className="cards mt-n4">
          <PopularTests userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;

const Wrapper = styled.div``;

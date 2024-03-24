import React from "react";
// import MyCarousel from "../requiredPages/Carousel";
import styled from "styled-components";
import { PopularTests } from "../requiredPages/PopularTests";
import HomeSectionsHeading from "./SectionsHeadingAndPara";

const SectionFour = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  return (
    <Wrapper>
      <div className="container mt-md-5 py-md-5 py-sm-3 py-2">
        <HomeSectionsHeading 
          title={"Popular Tests"} 
          para={`Explore Konnect's popular diagnostic tests to gain valuable insights into your health, cognition, and overall well-being. Take charge of your health journey now.`}
        />

        <div className="cards pt-2">
          <PopularTests userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;

const Wrapper = styled.div`
`;

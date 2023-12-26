import React from "react";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";
import SectionFour from "../components/homeComponents/SectionFour";
import HeroSlider from "../components/homeComponents/HeroSlider";
import PatientExperience from "../components/homeComponents/PatientExperience";
import OurHistory from "../components/homeComponents/OurHistory";
// import CounterBox from "../components/homeComponents/CounterBox";
import HealthPackagesComponent from "../components/homeComponents/HealthPackagesComponent";
import CounterBox2 from "../components/homeComponents/CounterSection/CounterBox2";
// import { useSelector } from 'react-redux';

const Home = ({ localCartItems, setLocalCartItems, userId, auth, cart, setCart, handleLoginClick }) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);

  return (
    <>
      <div>
        <HeroSlider />
        <SectionTwo localCartItems={localCartItems} setLocalCartItems={setLocalCartItems} userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
        <SectionThree />
        <SectionFour userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
        <HealthPackagesComponent userId={userId}  auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
        {/* <CounterBox /> */}
        <CounterBox2 />
        <PatientExperience />
        <OurHistory />
      </div>
    </>
  );
};

export default Home;

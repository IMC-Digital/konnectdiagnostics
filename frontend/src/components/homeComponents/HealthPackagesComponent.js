import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import OrganCarousel from "../requiredPages/OrganCarousel";
import PackageCard from "../packages(New)/PackageCard";
import HomeSectionsHeading from "./SectionsHeadingAndPara";

const HealthPackagesComponent = ({ userId, auth, cart, setCart, handleLoginClick, }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Wrapper className="bg-k-light">
        <div className="container py-md-5 py-sm-3 py-2">
          <HomeSectionsHeading 
            title={"Health Packages"} 
            para={`Konnect Diagnostic Centre: Empowering proactive health management through tailored Diagnostic Health Packages for early detection and prevention, promoting healthier lives.`}
          />

          <div className="hp-box container flex-wrap mt-5">
            <div className="hpCards w-100 d-flex justify-content-center flex-wrap gap-3">
              <OrganCarousel testsOrPackage={"packages"} searchResults={searchResults} setSearchResults={setSearchResults} />
              <div className="mt-3 pb-3 d-flex justify-content-center flex-wrap gap-3">
                {
                  searchResults.map((item, index) => (
                    <PackageCard key={index} cart={cart} setCart={setCart} item={item} />
                  ))
                }
              </div>
            </div>
          </div>
          <Link to="/packages">
            <div className="more text-center d-flex">
              <button>
                View All <AiOutlineDoubleRight />
              </button>
            </div>
          </Link>
        </div>
    </Wrapper>
  );
};

export default HealthPackagesComponent;

const Wrapper = styled.section`
  .hp-box {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    ${'' /* margin-top: 1.5rem; */}
  }
  .hp-info {
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .more {
    align-items: center;
    justify-content: center;

    button {
      /* background-image: url(/images/k-10.png),
        linear-gradient(220deg, #005bab, #00ffbb90);
      border-radius: 25px; */
      background-color: white;
      margin-top: 20px;
      border: none;
      border-radius: 25px;
      padding: 8px 28px;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0;
      mask-clip: red;

      &:hover {
        transition: 0.2s;
        /* padding-right: 15px; */
        scale: 1.1;
      }
    }
  }
`;

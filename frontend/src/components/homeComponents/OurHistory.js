import React from "react";
import styled from "styled-components";
import { BiSolidQuoteRight } from "react-icons/bi";
import HomeSectionsHeading from "./SectionsHeadingAndPara";

const OurHistory = () => {
  return (
    <Wrapper>
      <div className="container mt-md-3 mb-md-3 py-md-5 py-sm-3 py-2">
        <HomeSectionsHeading 
          title={"Our History and Experiences"} 
          para={`Chronicle of Our Journey: our commitment has revolved around enhancing the lives of individuals`}
          />

        <div className="oh-section mt-5 container p-0 d-sm-flex">
          <div className="oh-left">
            <img
              src="https://img.freepik.com/free-photo/portrait-doctor_144627-39409.jpg?w=740&t=st=1692358246~exp=1692358846~hmac=0ebe64510d017ba81a4031d4c7db0ab35e4e548a9345615c25ce15dd4fa51236"
              alt=""
            />
          </div>
          <div className="oh-right overflow-hidden">
            <h5 className="text-k-accent">Our History</h5>
            <div className="content">
              <h2 className="text-k-secondary">We are committed to deliver your health aspirations</h2>
              <p className="text-k-text text-light mt-3 muted opacity7">
                We lead the industry through adopting cutting-edge technology
                and nurturing a team of capable professionals prepared to manage
                intricate diagnostics.
              </p>
            </div>

            <span className="quote-icon">
              <BiSolidQuoteRight />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurHistory;

const Wrapper = styled.div`
  .top {
    text-align: center;
    align-items: center;
  }
  .oh-section {
    justify-content: center;
    align-items: center;
  }
  .oh-left {
    width: 60%;
    img {
      border-radius: 25px 0 0 25px;
      width: 100%;
    }
  }
  .oh-right {
    width: 40%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 50px;
    color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 20px;
    flex-direction: column;
    h5,
    span {
      position: relative;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 5px 16px;
      &::before,
      &::after {
        content: "";
        position: absolute;
        margin: 0 10px;
        top: 50%;
        right: 100%;
        transform: translate(0, -100%) !important;
        background-color: ${({ theme }) => theme.colors.white};
        width: 100%;
        height: 1px;
      }
      &:after {
        content: "";
        left: 100%;
      }
    }

    .content {
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
    .quote-icon {
      font-size: 3rem;
      background-color: transparent;
      svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media (max-width: 768px) {
    .oh-left {
      width: 100%;
      img {
        border-radius: 0;
        width: 100%;
      }
    }
    .oh-right {
      width: 100%;
    }
  }
`;

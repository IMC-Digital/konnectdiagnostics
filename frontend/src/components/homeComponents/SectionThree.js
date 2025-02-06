import React from "react";
import styled from "styled-components";
import SectionThreeIconsSec from "./SectionThreeIconsSec";
import "../../App.css";

const SectionThree = () => {
  return (
    <Wrapper>
      <SectionThreeIconsSec />
      <div className="secThree row container d-flex mx-md-auto mx-3 px-0">
        <div className="why-konnect-img col-md-6 bg_primary">
          <div className="why-konnect-content bg-k-secondary">
              <h2 className="text_secondary text-white">Why Konnect</h2>
              <p className="text-white">Empowering Health through Precision</p>
          </div>
        </div>

        <div className="col-md-6 p-4">
          <div className="icon-box p-2 d-flex align-items-center">
            <div className="icon me-3">
              <div
                className="shadow-sm rounded-circle d-flex justify-content-center align-items-center p-2"
                style={{ width: "80px", height: "80px" }}
              >
                <img
                  src="/images/icons/home/certified.svg"
                  alt="certifiedIcon"
                  className="img-fluid"
                />
              </div>
            </div>
            <p className="text-k-text mb-0">
              Konnect Diagnostics offers precise diagnostics with certified
              radiologists, pathologists, doctors, and technicians.{" "}
            </p>
          </div>
          <hr />
          <div className="icon-box p-2 d-flex align-items-center">
            <div className="icon me-3">
              <div
                className="shadow-sm rounded-circle d-flex justify-content-center align-items-center p-2"
                style={{ width: "80px", height: "80px" }}
              >
                <img src="/images/icons/home/team.svg" alt="teamIcon" />
              </div>
            </div>
            <p className="mb-0 text-k-text">
              Pioneering tech, skilled team drive us in advanced diagnostics,
              managing complex cases with expertise.
            </p>
          </div>
          <hr />
          <div className="icon-box p-2 d-flex align-items-center">
            <div className="icon me-3">
              <div
                className="shadow-sm rounded-circle d-flex justify-content-center align-items-center p-2"
                style={{ width: "80px", height: "80px" }}
              >
                <img src="/images/icons/home/top.svg" alt="topIcon" />
              </div>
            </div>
            <p className="mb-0 text-k-text">
              Our priority: satisfied patients. Swift, transparent, precise
              top-quality services for convenience and rapid results.{" "}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionThree;

const Wrapper = styled.div`
  .icon-box {
    display: flex;
    .icon {
      img {
        width: 50px;
      }
    }
  }

  .why-konnect-img {
    position: relative;
    background-image: url("/images/s3-img-left.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .why-konnect-content {
      position: absolute;
      border-radius: 15px;
      padding: 25px;
      left: 5%;
      bottom: 5%;
      color: white;
      .info {
        margin-top: 1rem;
        img {
          width: 35px;
          height: 100%;
        }
      }
    }
  }
  .secThree {
    margin-top: -12rem;
  }
  .secThree-info {
    .sti {
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .secThree {
      width: auto;
      margin: 15px;
      margin-top: -12rem;
      display: block !important;
      .why-konnect-img {
        height: 300px;
        width: 100%;
      }
      .secThree-info {
        padding: 0px 15px;
        width: 100%;
      }
    }
  }
`;

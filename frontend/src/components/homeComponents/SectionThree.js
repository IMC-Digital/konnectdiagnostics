import React from "react";
import styled from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";
import "../../App.css";

const SectionThree = () => {
  return (
    <Wrapper>
      <div className="s3-full">
        <div className="services">
          <div className="container d-flex justify-content-sm-around justify-content-start flex-sm-nowrap flex-wrap">
              {
                [
                  {icon: "location", title: "Nearest Center"},
                  {icon: "Lab", title: "Book a test"},
                  {icon: "house", title: "Home Collections"},
                  {icon: "Prescription", title: "Upload Prescription"},
                  {icon: "download-report", title: "Download Report"}
                ].map((item, index) => (
                  <div key={index} className="s3-s">
                    <div className="s3-icons">
                      <DynamicImage imageName={`/icons/${item.icon}.svg`} />
                    </div>
                    <h2 className="text-k-accent fw-normal text-white"> { item.title } </h2>
                  </div>
                ))
              }
          </div>
        </div>
      </div>

      <div className="secThree row container d-flex mx-auto px-0">
        <div className="why-konnect-img col-md-6 bg-k-primary">
          <div className="why-konnect-content bg-k-secondary">
              <h2 className="text-k-secondary text-white">Why Konnect</h2>
              <h2 className="text-k-text text-white">Empowering Health through Precision</h2>
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
      padding: 25px;
      border-radius: 15px;
      left: 5%;
      bottom: 5%;
      color: white;
      .title h3 {
        color: white;
        font-size: 1%.5;
      }
      .info {
        margin-top: 1rem;
        img {
          width: 35px;
          height: 100%;
        }
        h3 {
          color: ${({ theme }) => theme.colors.white};
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }
  .services {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 4rem 0 15rem 0;
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
  .s3-s {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    .s3-icons {
      background-color: #fff;
      border-radius: 100px;
      padding: 1.5rem;
      height: 100px;
      width: 100px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
    }
    &:hover .s3-icons {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    &:hover img {
      scale: 1.2;
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

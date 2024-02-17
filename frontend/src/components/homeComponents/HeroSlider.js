import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

const HeroSlider = () => {
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <div className="home-slider">
        <Slider
          ref={Fac_carousel_slider}
          {...sliderSettings}
          className="s-slider"
        >
          <div className="sliderSec0">
            <div className="container d-flex align-items-center h-100">
              <div className="w-50 pe-5">
                <h1 className="text-k-primary text-k-clr-primary text-capitalize">
                  We are  <span className="text-k-clr-secondary">Upgrading</span> to serve you better
                </h1>
              </div>
            </div>
          </div>

          {/* <div className="sliderSec1">
            <div className="container d-flex align-items-center h-100">
              <div className="w-50 pe-5">
                <h1 className="text-k-primary text-k-clr-primary text-capitalize"> 
                  Navigating <span className="text-k-clr-secondary">Health Solutions</span> with konnect
                </h1>
              </div>
            </div>
          </div>

          <div className="sliderSec2 d-flex bg-white">
            <div className="container align-self-center">
              <div className="slider-2 d-flex align-self-center justify-content-between align-items-center">
                <div className="w-50 pe-5">
                  <h1 className="text-k-primary text-k-clr-primary text-capitalize"> 
                    Your <span className="text-k-clr-secondary">partner</span> in keeping you <span className="text-k-clr-secondary">healthy</span> 
                  </h1>
                  <p className="text-k-accent"> Get Your Reports in 12 hours <span className="text-danger"> * </span> </p>
                </div>

                <div className="w-50 p-5 d-flex-cc">
                  <video autoPlay loop muted controls={false}>
                    <source src="/images/hero24.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;

const Wrapper = styled.section`
  .home-slider {
    width: 100%;
  }
  h1 {
    font-size: 4rem;
    text-transform: capitalize;
    line-height: 1.3;
  }
  .s-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .sliderSec0 {
      height: 70vh;
      background: #ffffff url("/images/bannerImage0.jpg") no-repeat right center;
      background-size: 50%;
    }
    .sliderSec1 {
      height: 70vh;
      background: #ffffff url("images/bannerImage.jpg") no-repeat right top;
      background-size: cover;
    }
    .sliderSec2 {
      height: 70vh;
      video { width: 28rem; }
    }
  }
  .slick-arrow {
    &::before {
      font-family: inherit;
      font-size: 32px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary90};
    }
    &:hover::before {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .slick-prev {
    top: 50%;
    left: 2%;
    z-index: 10;
    &:hover {
    }
  }
  .slick-next {
    top: 50%;
    right: 2%;
  }

  /* Tablet styles */
  @media (min-width: 0px) and (max-width: 768px) {
    .sliderSec1 {
      height: 70vh;
      h1 {
        font-size: 3.5rem;
      }
    }

    .sliderSec2 {
      height: 70vh;
    }
    .s-slider {
      .sliderSec1 {
        position: relative;
        height: 300px;
        display: flex !important;
        align-items: center;
        z-index: 0;
        h1 {
          font-size: 26px;
          text-transform: capitalize;
          color: #ffffff;
          z-index: 30;
        }
      }
      .sliderSec1::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        z-index: -1;
        opacity: 0.5;
      }
      .sliderSec2 {
        height: 300px;
        display: flex !important;
        align-items: center;
        z-index: 0;
        gap: 0;
        .slider-2 {
          display: flex;
          gap: 0;
          .slider-2-content {
            align-self: center;
            width: 50%;
            h1 {
              font-size: 26px;
            }
            .hero-packages {
              flex-wrap: wrap;
            }
          }
          .gyr {
            text-align: left;
            white-space: nowrap;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 14px;
            line-height: 26px;
            strong,
            span {
              color: #005bab;
              font-weight: 700;
            }
            @keyframes typing {
              from {
                width: 0;
              }
            }
            @keyframes blink {
              50% {
                border-color: transparent;
              }
            }
          }
          video {
            width: 100%;
          }
        }
      }
    }
  }

  /* Desktop styles */
  @media (min-width: 769px) {
    .sliderSec1,
    .sliderSec2 {
      height: 80vh; /* Adjust the height as needed */
    }
  }
`;

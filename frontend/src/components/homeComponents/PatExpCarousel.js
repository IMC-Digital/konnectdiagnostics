import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ytPatExpVids } from "../../assets/data/AllData";
import SinglePEytVideo from "./PatExpSingleytVideo";
import "./PatExpVideoCarousel.css";

const PatExpCarousel = () => {
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const PE_carousel_slider = useRef(null);

  return (
    <Wrapper className="mt-3">
          <Slider ref={PE_carousel_slider} {...sliderSettings}>
            {ytPatExpVids.map((videoObj, index) => {
              return <SinglePEytVideo key={index} vidCode={videoObj.vidCode} />;
            })}
          </Slider>
    </Wrapper>
  );
};

export default PatExpCarousel;

const Wrapper = styled.section`
  .video-responsive {
    margin: 0 10px;
  }
  .slick-arrow{
    width: 50px;
    height: 50px;
    z-index: 5;
    border-radius: 100%;
    background: white;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
  .slick-prev:before,.slick-next:before {
    color: var(--primary-color);
  }
  .slick-dots li button:before {
    color: white;
    margin-top: 10px;
  }
`;

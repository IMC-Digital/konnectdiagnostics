import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

function ImageCarousel({ clinicname }) {
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    border: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  };
  const Fac_carousel_slider = useRef(null);
  const imgs = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Wrapper>
      <Slider ref={Fac_carousel_slider} {...sliderSettings}>
        {
          imgs.map((item, index) => (
            <div key={index} className="fac_card">
              <img
                src={`./images/clinics-images/${clinicname.toLowerCase()}${item}.jpg`}
                alt={`fac${item}`}
              />
            </div>
          ))
        }
      </Slider>
    </Wrapper>
  )
}

export default ImageCarousel;


const Wrapper = styled.section`
  .fac_card {
    padding: 10px;
    overflow: hidden; 
  }
  .fac_card img {
    border-radius: 5px;
    width: 100%;
  }
  .slick-list{
    height: 280px;
    .slick-track{
      height: 280px;
      .slick-slide{
        height: 280px;
        .fac_card{
          height: 280px;
          img{
            height: 260px !important;
          }
        }
      }
    }
  }
`;

import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

const FacilitiesCarousel = () => {
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <Slider ref={Fac_carousel_slider} {...sliderSettings}>
        {
          [{
            title: "High End Ultrasound Equipment",
            img: "high-end-ultrasound-equipment"
          }, {
            title: "Procedure Room",
            img: "procedure-room"
          }, {
            title: "Special Suites",
            img: "special-suites"
          }, {
            title: "Virtual Fetal Museum",
            img: "virtual-fetal-museum"
          }, {
            title: "3D Printing For Fetal Face",
            img: "3d-printed-baby"
          }, {
            title: "Photo Booth",
            img: "fetal-booth"
          }].map((item, index) => (
            <div key={index} className="fac_card bg-white rounded-3">
              <img 
                src={`./images/fetal-medicine-care/fetal-facilities/${item.img}.jpg`}
                alt={`${item.img}`}
                className="rounded"
              />
              <h2 className="text-k-accent fmu-text-clr"> {item.title} </h2>
            </div>
          ))
        }
      </Slider>
    </Wrapper>
  );
};

export default FacilitiesCarousel;

const Wrapper = styled.section`
.slick-track{
  .slick-slide{
    padding: 5px;
  }
}
  .fac_card {
    padding: 10px;
    overflow: hidden;

  }
  .fac_card img {
    width: 100%;
  }
  .fac_card h2 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 10px;
  }
`;

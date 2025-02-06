import React from 'react';
import { styled } from "styled-components";
import { GoLocation } from "react-icons/go";
import ImageCarousel from './LocateClinics/ImageCarousel';

function LocateClinicGrid({ clinicsdata, noclinics }) {
  return (
    <Wrapper>
      <div className="clinics container p-md-5">
        <div className="clinic">
          {clinicsdata.slice(0, noclinics).map((item, index) => (
            <div key={index} className="clinic-card row">
              <div className="clinic-info col-md-7 p-4">
                  <h2 className='text_secondary text_primary_clr'>{item.name}</h2>
                  <div className="d-flex">
                    <img src="/images/k.png" className="cardcomplogo2 me-2 mt-2" alt="K_logo" />
                    <p className='text-k-text mb-0'>
                      <span className='text-k-text fw-bold'> Address: </span>
                      {item.address}
                    </p>
                  </div>
                  <div className="d-flex gap-1 mail">
                    <img src="/images/icons/svg/location.svg" style={{width: "22px"}} alt="pincode_icon" />
                    <p className='mb-0 text-k-text'>
                      <span className='text-k-text fw-bold'> Pincode: </span>
                      {item.pincode} 
                    </p>
                  </div>
                  <div className="d-flex gap-2 phone">
                    <img src="/images/icons/svg/phone-call.svg" style={{width: "18px"}} alt="phone_icon" />
                    <p className='mb-0 text-k-text'>
                      <span className='text-k-text fw-bold'> Contact Number: </span>
                      {item.telephone_number}
                    </p>
                  </div>
                  <div className="d-flex gap-2 mail">
                    <img src="/images/icons/svg/mail-inbox-app.svg" style={{width: "18px"}} alt="mail_icon" />
                    <p className='mb-0 text-k-text'>
                      <span className='text-k-text fw-bold'> Email: </span>
                      {item.email}
                    </p>
                  </div>
              </div>
              <div className="clinic-image col-md-5">
                <ImageCarousel clinicname={item.area} />
                <p className="area d-flex gap-2 text-k-text text-light">
                  {item.area}
                  <a href={item.direction} target="blank">
                    <GoLocation />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default LocateClinicGrid;

const Wrapper = styled.section`
.clinics {
  p{ padding: 4px 0;}
  margin-bottom: 3rem;
  .clinic {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    .clinic-card {
      background-color: white;
      border: px solid white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
      border: 1px solid #e8f0ff;
      position: relative;
      width: 100%;
      .cardcomplogo2{
        width: 16px;
        height: 16px;
        top: 10px;
        right: 10px;
        z-index: 2;
      }
      .area {
        position: absolute;
        background: var(--secondary-color);
        top: 0;
        right: 0;
        padding: 8px 28px;
        border-radius: 0 0 0 10px;
        align-items: center;
        &:hover svg {
          scale: 1.2;
        }
        svg {
          transition: 0.3s;
          fill: white;
          font-size: 1.25rem;
        }
      }
      .clinic-image {
        overflow: hidden;
        img {
          width: 100%;
          height: 225px;
          object-fit: cover;
          object-position: center;
        }
      }
      .clinic-info {
        position: relative;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 280px;
        border-radius: 10px;
        background-position: left center;
        background-size: cover;
        background-color: white;
    }
  }
}

@media only screen and (max-width: 600px){
  .clinic-info{ 
    height: auto !important;
    padding-top: 70px !important;
  }
}
`;

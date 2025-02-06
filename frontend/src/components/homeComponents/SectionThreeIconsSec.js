import React from 'react';
import styled from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";

function SectionThreeIconsSec() {
  return (
    <Wrapper className='px-md-0 px-2'>
        <div className="services">
          <div className="container d-flex justify-content-center flex-wrap gap-1">
              {
                [
                  {icon: "location", title: "Nearest Center"},
                  {icon: "Lab", title: "Book a test"},
                  {icon: "house", title: "Home Collections"},
                  {icon: "Prescription", title: "Upload Prescription"},
                  {icon: "download-report", title: "Download Report"}
                ].map((item, index) => (
                  <div key={index} className="s3-s px-2 py-3 rounded">
                    <div className="s3-icons">
                      <DynamicImage imageName={`/icons/${item.icon}.svg`} />
                    </div>
                    <p className="fw-light text-center"> { item.title } </p>
                  </div>
                ))
              }
          </div>
        </div>
      </Wrapper>
  )
}

export default SectionThreeIconsSec;

const Wrapper = styled.div`
    background-color: var(--primary-color);
.services {
    padding: 4rem 0 15rem 0;
    .s3-s {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        background: white;
        width: 170px;
        .s3-icons {
          height: 40px;
          width: 40px;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.3s;
          }
        }
        &:hover img {
          scale: 1.2;
        }
    }
}
`
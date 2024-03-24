import React from 'react';
import { styled } from "styled-components";


export default function PageBanner({ title, bannerImg }) {
  return (
    <Wrapper>
      <div className="banner pb d-flex" style={{background: `url('/images/banners/${bannerImg}.jpg')`}}>
        <div className="container flex">
          <h2 className="text-k-primary text-k-clr-text">{title}</h2>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.pb {
  position: relative;
  height: 10em;
  align-items: center;
  z-index: 0;
  background-size: cover !important;
  background-position: center center !important;
}
.banner{
  background-size: cover;
  .page_title {
    color: var(--text-color);
  }
}
`;

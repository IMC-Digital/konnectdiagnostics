import React from 'react';
import { styled } from "styled-components";


export default function PageBanner({ title, bannerImg }) {
  return (
    <Wrapper>
      <div className="banner pb d-flex" style={{background: `url('/images/banners/${bannerImg}.jpg')`}}>
        <div className="container flex">
          <h1 className="page_title text-k-mainHeadings">{title}</h1>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.banner{
    background-size: cover;
    .page_title {
      color: var(--text-color);
    }
}
`;

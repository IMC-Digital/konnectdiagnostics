import React from 'react';
import OtpLoginWrapper from './OtpLoginWrapper';
import { styled } from 'styled-components';

export default function OtpLoginPage() {
  return (
    <Wrapper className="container my-md-5 p-3">
      <OtpLoginWrapper /> 
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: white;
box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
border: 1px solid #e8f0ff;
border-radius: 20px;
padding: 6px;
`
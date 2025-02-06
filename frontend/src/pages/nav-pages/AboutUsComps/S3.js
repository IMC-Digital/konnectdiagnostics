import React from 'react';
import { styled } from "styled-components";

export default function S3() {
    return (
        <Wrapper className='container mx-auto px-md-0 px-4'>
            <div className="au-s3-wrapper row rounded-4 p-md-5">
                <div className="col-md-6 pe-md-5 p-3">
                    <div className="img-box"></div>
                    <h2 className="text_secondary text_secondary_clr">
                        Konnect Diagnostics remains dedicated to delivering accurate and reliable diagnostic solutions
                    </h2>
                    <p className='text_accent fw-normal'>
                        While expanding their presence in diverse locations. We prioritize
                        innovation, customer satisfaction, and community well-being, aiming
                        to have a positive impact on healthcare accessibility and the
                        overall well-being of individuals and communities.
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.au-s3-wrapper{
    background: url("/images/au_s3_bg.jpg");
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
    height: 500px;
    box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
    border: 1px solid #e8f0ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media only screen and (max-width: 600px) {
.au-s3-wrapper{
    background-position: right bottom;
    background-size: 170%;
    justify-content: flex-start;
    height: 620px;
}
}
`

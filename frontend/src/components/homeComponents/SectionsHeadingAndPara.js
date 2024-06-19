import React from 'react';
import styled from "styled-components";

export default function SectionsHeadingAndPara({ title, para }) {
    return (
        <Wrapper className="mx-auto text-center w-md-50 d-flex-cc flex-column">
            <h2 className="text-k-primary text-k-clr-primary"> {title} </h2>
            <p className="text-k-text">
                {para}
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
p{
    width: 500px;
}
@media (max-width: 768px) {
    p{ width: auto; }
}
`



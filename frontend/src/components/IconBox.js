import React from 'react';
import { styled } from "styled-components";

export default function IconBox({ src, title, desc, iconLg, iconBox, iconAbove }) {
    return (
        <Wrapper>
            <div className={`icon-box-wrapper d-flex ${iconAbove && 'flex-column'} gap-3`}>
                <div className='me-3'>
                    <div className={`icon-wrap d-flex-cc rounded-4 ${ iconBox && "iconBox" } ${ iconLg && "iconLg" }`}>
                        <img src={src} alt={"icon"} className='w-100' />
                    </div>
                </div>
                <div className="info-wrap d-flex flex-column gap-2">
                    { title && <h2 className="text-k-accent text-k-clr-secondary mb-0"> {title} </h2> }
                    { desc && <h2 className="desc text-k-text"> {desc} </h2> }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.icon-box-wrapper{
    .icon-wrap{
        width: 80px;
        height: 80px;
        padding: 15px;
    }
    .iconLg{
        width: 120px;
        height: 120px;
    }
    .iconBox{
        box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
        border: 1px solid #e8f0ff;
        background: var(--color1);
    }
}
`;
import React from 'react';
import { styled } from "styled-components";

export default function MissionVision() {
    return (
        <Wrapper>
            <div className="d-flex gap-3">
                {[
                    {
                        title: "Vision",
                        para: "Our Vision is to serve the superior quality diagnostic care with utmost commitment and dedication to know your health.",
                    },
                    {
                        title: "Mission",
                        para: "Konnect Diagnostics is equipped with a mission of providing a wide range of diagnostic services to the wellness of our patients in a cost-effective and accessible method. We strive to know you better.",
                    },
                ].map((e) => (
                    <div className="w-50 card-wrapper d-flex align-items-stretch">
                        <div className="d-flex align-items-center gap-3 bg-white p-4 rounded-3">
                            <div className="mb-3">
                                <div className="icon-box bg-k-light rounded-3 p-3">
                                    <img src={`/images/fetal-medicine-care/${e.title}.svg`} alt="" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-k-secondary text-k-clr-secondary"> {e.title}: </h2>
                                <p className='text-k-text'> {e.para} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.card-wrapper{
    box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
    border: 1px solid #e8f0ff;
    border-radius: 8px;
    border-bottom: 5px solid #00aeef;
    .icon-box{
        width: 100px;
        height: 100px;

    }
}
`

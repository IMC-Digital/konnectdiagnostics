import React from 'react'
import { Image, Modal } from 'react-bootstrap'
import ProfileForm from '../login/ProfileForm';
import { styled } from "styled-components";

export default function PopupProfileSetupForm({ show, onHide, userId }) {

    return (
        <Wrapper>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='overflow-hidden border-none'>
                <Modal.Body className='p-0 overflow-hidden rounded bg-k-light'>
                    <div className="d-flex">
                        <div className="w-50 d-flex-cc p-3 profilepageSideImagesection">
                            <Image src={"/images/sideImage1.png"} fluid />
                        </div>
                        <div className="w-50">
                            <ProfileForm userId={userId} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Wrapper>
    )
}


const Wrapper = styled.div`
article{
    margin: auto;
    background-image: 'url("/project-konnect/images/k-10.png")';
    background-size: "500px";
    background-position: "center center";
    background-repeat: "no-repeat";
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    border-radius: 10px;
} 
`
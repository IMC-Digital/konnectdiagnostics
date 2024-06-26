import React from "react";
import { styled } from "styled-components";
import ContactForm from "../components/contactForm";
import PageBanner from "../components/PageBanner";

function ContactUs() {
  return (
    <Wrapper className="contact">
      <PageBanner title={"Contact Us"} bannerImg={'contact-us-bg-image'} />

      <div className="box container row container px-0 mx-auto my-5 d-flex justify-content-center align-items-center">
        <div className="box-left col-md-6 p-5 rounded">
          <h2 className="text-k-accent fw-bold">Registered Office</h2>
          <img
            src="/images/konnect-logo.png"
            className="my-3"
            alt="konnect-diagnostics"
          />
          <p className="text-k-text">
            <span className="fw-bold"> Address: </span> 
            1-5-1055/87/236 & 237, HMT officers colony, Batukhamma park, Alwal, Hyderabad, Secunderabad, Telangana 500010
          </p>
          <p className="text-k-text">
            <span className="fw-bold"> Email: </span> 
            info@konnectdiagnostics.com
          </p>
          <p className="text-k-text">
            <span className="fw-bold"> Customer Care No: </span> 
            040 - 4123 5555
          </p>
        </div>

        <div className="bg-k-light shadow-sm rounded col-md-6 p-2 p-md-5">
          <ContactForm />
        </div>
      </div>

      <div className="p-0 m-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.523434507499!2d78.45764861435773!3d17.426632888084933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98673c27a2bb%3A0xe7e6a045c1095c04!2sPunjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1639045574805!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Wrapper>
  );
}

export default ContactUs;

const Wrapper = styled.div`
  .box-left {
    background-image: url("/images/k-10.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 1;
  }
`;

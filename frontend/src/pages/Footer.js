import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="footer">
      <div className="ftr_head bg_primary p-4">
        <div className="container d-md-flex align-items-center justify-content-between">
          <p className="text-white mb-md-0">Follow Konnect Diagnostics on Social Media</p>
          <p className="scl_icons_sec d-flex gap-1 mb-md-0">
            {[
              {
                link: "https://www.facebook.com/konnectdiagnostic/",
                icon: "fa-brands fa-square-facebook fa-xl",
              },
              {
                link: "https://twitter.com/KonnectDiagnos2",
                icon: "fa-brands fa-square-twitter fa-xl",
              },
              {
                link: "https://www.instagram.com/konnectdiagnosticcenters/",
                icon: "fa-brands fa-square-instagram fa-xl",
              },
              {
                link: "https://www.youtube.com/channel/UC2y2Nq4LXo36lU3kkZvx9xA",
                icon: "fa-brands fa-linkedin fa-xl",
              },
              {
                link: "https://www.youtube.com/channel/UC2y2Nq4LXo36lU3kkZvx9xA",
                icon: "fa-brands fa-square-youtube fa-xl",
              },
            ].map((item, idx) => (
              <NavLink to={item.link} target="blank" key={idx}>
                <i className={item.icon} style={{ color: "#ffffff", fontSize: "22px" }}></i>
              </NavLink>
            ))}
          </p>
        </div>
      </div>

      <div className="ftr_body bg-light py-5 px-md-0 px-4 border-bottom">
        <div className="container mx-auto row">
          <div className="col-md-4">
            <img className="img-fluid mb-3" src="/images/konnect-logo.png" alt="logofooter" />
            <p> Konnect Diagnostics offers precise diagnostics with certified radiologists, pathologists, doctors, and technicians.</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li> <NavLink to={'/'}> Home </NavLink> </li>
                  <li> <NavLink to={'/about'}> About Us </NavLink> </li>
                  <li> <NavLink to={'/packages'}> Packages </NavLink> </li>
                  <li> <NavLink to={'/tests'}> Book A Test </NavLink> </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li> <NavLink to={'/health-conditions'}> Health Conditions </NavLink> </li>
                  <li> <NavLink to={'/radiology-services'}> Radiology Services </NavLink> </li>
                  <li> <NavLink to={'/fetal-medicine-unit'}> Fetal Medicine Unit </NavLink> </li>
                  <li> <NavLink to={'/nearest-centers'}> Nearest Centers </NavLink> </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li> <NavLink to={'/partner-with-us'}> Partner With Us </NavLink> </li>
                  <li> <NavLink to={'/contact-us'}> Contact Us </NavLink> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ftr_bottom container py-3 d-flex flex-md-row flex-column align-items-center justify-content-center">
        <p className="small mb-0"> © 2025 Konnect Diagnostics All rights reserved. </p>
        <NavLink to={"/"} className="small text-decoration-none"> Terms and Conditions </NavLink>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  .ftr_body{
    ul{
      padding: 0;
      li{
        list-style-type: none;
        margin-top: 6px;
        a{
          text-decoration: none;
          color: inherit;
          &:hover{
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
      } 
    }
  }
  .ftr_bottom a{
    color: ${({ theme }) => theme.colors.primary};
    &:hover{
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

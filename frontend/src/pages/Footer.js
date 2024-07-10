import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper className="footer">
        <div className="footer-head py-3 px-md-0 px-3">
          <div className="fh container d-flex">
            <div className="fh-content d-md-flex align-items-center">
              <p className="fh-p p-0 m-0">
                Follow Konnect Diagnostics on Social Media:{" "}
              </p>
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
                <NavLink
                  to={item.link}
                  target="blank"
                  key={idx}
                >
                  <i
                    className={item.icon}
                    style={{ color: "#ffffff" }}
                  ></i>
                </NavLink>
              ))}
            </div>
            <div className="fh-content d-flex"></div>
          </div>
        </div>
        <div className="footer-container container d-flex">
          <div className="d-flex border-bottom ">
            <div className="w-30 me-3">
              <img
                className="img-fluid mb-3"
                src="/images/konnect-logo.png"
                alt="logofooter"
              />
              <p className="text-k-text">
                Konnect Diagnostics offers precise diagnostics with certified
                radiologists, pathologists, doctors, and technicians.
              </p>
            </div>
            <div className="d-flex w-75 ms-5">
              <div className="footer-box1 w-25">
                <ul className="navbar-nav footer-navbar-lists d-flex">
                  <li>
                    <NavLink to="/" className="nav-list">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="nav-list">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/packages" className="nav-list">
                      Packages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tests" className="nav-list">
                      Tests
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-box2 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/tests" className="nav-list">
                      Book a Test
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/nearest-centers" className="nav-list">
                      Nearest Center
                    </NavLink>
                  </li>
                  {/* <li>
                <NavLink to="/login" className="nav-list">
                  Download Report
                </NavLink>
              </li> */}
                </ul>
              </div>
              <div className="footer-box3 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/health-conditions" className="nav-list">
                      Health Conditions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/radiology-services" className="nav-list">
                      Radiology Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/fetal-medicine-unit" className="nav-list">
                      Fetal Medicine Unit
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-box4 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/partner-with-us" className="nav-list">
                      Partner with us
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/contact-us" className="nav-list">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom container content-box py-2">
          <p className="styled">
            © 2024 Konnect Diagnostics All rights reserved
          </p>
          <p className="styled">|</p>
          <NavLink to={"/"} className="styled tc">
            Terms and Conditions
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.section`
  .fh-content img {
    width: 22px;
    transition: 0.2s;
    &:hover {
      scale: 1.2;
    }
  }

  background-color: rgba(0, 0, 0, 0.05);
  .footer-head {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .fh {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};

    .fh-nl {
      gap: 15px;
      align-items: center;
      justify-content: space-evenly;
      .fh-nl-p {
        margin: 0;
        color: #fff;
      }
    }
    .fh-content {
      align-items: center;
      padding: 0;
      gap: 20px;
      p {
        padding: 15px 0;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        margin: 0;
        .fh-content img {
          width: 25px;
        }
      }
    }
  }
  .footer-container {
    padding: 50px 0 10px 0;
    justify-content: space-between;
    .fh-info {
      font-size: 14px;
      line-height: 1.5em;
    }
  }

  .footer-navbar-lists {
    font-size: 1rem;
    gap: 10px;
  }
  .nav-list {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 400;
  }
  .footer-bottom {
    padding: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    text-align: center;
    align-items: center;
    .styled {
      font-size: 13px;
      font-weight: 300;
      display: inline-block;
      margin-bottom: 10px;
    }
    .tc {
      text-decoration: none;
    }
  }
`;

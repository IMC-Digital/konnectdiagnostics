import { styled } from "styled-components";
// import { Link } from "react-router-dom";
import RsCard from "../../components/services/RsCard";

const RadiologyServices = () => {
  return (
    <Wrapper>
      <div className="banner pb d-flex">
        <div className="container flex">
          <h1 className="page_title text-k-mainHeadings">Radiology Services</h1>
          <p className="para ">
            Konnect Diagnostics offers top-tier radiology services with
            cutting-edge technology, expert radiologists, and swift turnaround
            times for accurate diagnoses. Your health, our priority.
          </p>
        </div>
      </div>
      {/* <div className="rs banner-bg ">
        <div className="container banner">
          <h2>Radiology Services</h2>

          <p className="para">
            Konnect Diagnostics offers top-tier radiology services with
            cutting-edge technology, expert radiologists, and swift turnaround
            times for accurate diagnoses. Your health, our priority.
          </p>
        </div>
      </div> */}

      <section className="r_section" id="s_rs_s2">
        <div>
          <RsCard />
        </div>
      </section>
    </Wrapper>
  );
};

export default RadiologyServices;

const Wrapper = styled.section`
  .r_imgbox_wrapper {
    margin: 10px;
    width: 330px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    overflow: hidden;
  }
  .r_imgbox_img {
    width: 100%;
    height: 200px;
    // background-size: cover;
    // backgrond-position: center center;
    img {
      background: #34495e;
      // border: 1px solid #34495e;
      // width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: right top;
    }
  }
  .r_imgbox_title,
  .r_imgbox_desc {
    font-size: 16px;
  }
  #s_rs_s2 {
    background: #fafafa;
  }

  // ---------------------------------------
  .banner {
    background: url("/images/radiology-services-banner.jpg");
    .para {
      width: 40%;
    }
  }
  .tst-group {
    flex-wrap: wrap;
    gap: 1rem;
    margin: 50px auto;
  }
  .banner-bg {
    display: flex;
    align-items: center;
    /* text-align: center; */
    height: 20em;
    background: url("/images/radiology-services-banner.jpg");
    background-size: cover;
    .banner {
      /* width: 50%; */
      color: #fff;
      h2 {
        color: #00203c;
        font-weight: 800;
      }
      h6 {
        font-size: 0.9rem;
        font-weight: 600;
        color: #00203c;
        span {
          color: #00aeef;
          a {
            color: #00aeef;
            text-decoration: none;
          }
        }
      }
      /* p {
        color: #606060;
        width: 30%;
      } */
    }
  }
  .rs-body {
    margin: 50px auto;
  }
`;

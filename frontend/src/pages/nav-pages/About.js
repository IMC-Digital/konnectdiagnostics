import { styled } from "styled-components";
import PageBanner from "../../components/PageBanner";
import MissionVision from "../../components/MissionVision";
import S3 from "./AboutUsComps/S3";
import IconBox from "../../components/IconBox";

const About = () => {
  return (
    <Wrapper className="about">
      <PageBanner title={"About Us"} bannerImg={"about-us-bg-image"} />

      <div className="container mx-auto py-6">
        <div className="d-flex-cc mb-4">
          <div className="w-50 pe-5">
            <h2 className="text-k-primary text-k-clr-secondary">We Care About Your Health</h2>
            <p className="text-k-text">
              Konnect Diagnostics started in October 2019 with one center in
              Kompally and has since grown rapidly in the diagnostics industry.
              Our notable achievement was acquiring the Jagityal center,
              resulting in a significant revenue growth within a year. This
              success showcased the company's strong management and commitment
              to success. Building on this accomplishment, Konnect Diagnostics
              has a visionary plan to establish a comprehensive network of
              diagnostic centers spanning both urban and rural areas.
            </p>
            <p className="text-k-text">
              We established centers in BN Reddy Nagar and Boduppal in urban
              regions, as well as Suryapet and Sircilla in rural areas. The
              company aims to bridge the gap between urban and rural populations
              by providing accessible and high-quality healthcare services.
            </p>
          </div>

          <div className="w-50">
            <img src="/images/doctor-with-stethoscope.jpg" alt="about-1" className="img-fluid rounded-4" />
          </div>
        </div>
        <MissionVision />
      </div>

      <div className="container">
        <S3 />
      </div>

      <div className="container mx-auto px-0 py-6 row">
        <div className="col-md-6  pe-md-4">
          <img src="/images/about-2.jpg" alt="about2" className="w-100" />
        </div>
        <div className="col-md-6 ps-md-4">
          <h2 className="text-k-primary mb-4">Why Konnect Diagnostics</h2>

          <div className="d-flex flex-column gap-3">
            <IconBox
              iconBox={true}
              src={"/images/icons/box.svg"}
              title={""}
              desc={"At Konnect Diagnostics, we have assembled a team of certified and qualified professionals, including radiologists, pathologists, doctors, and technicians. Their expertise in various specializations allows us to deliver accurate and reliable diagnostic solutions."}
            />
            <IconBox
              iconBox={true}
              src={"/images/icons/box.svg"}
              title={""}
              desc={"We strive to stay at the forefront of the industry by embracing the latest technologies and advancements. Our commitment to excellence extends to our team of skilled technicians and professionals who are equipped to handle the most complex diagnostic procedures."}
            />
            <IconBox
              iconBox={true}
              src={"/images/icons/box.svg"}
              title={""}
              desc={"At Konnect Diagnostics, we have assembled a team of certified and qualified professionals, including radiologists, pathologists, doctors, and technicians. Their expertise in various specializations allows us to deliver accurate and reliable diagnostic solutions."}
            />
          </div>
        </div>
      </div>


      <div className="py-6 bg-k-secondary">
        <div className="container d-flex">
          <div className="d-flex">
            <h2 className="text-k-primary text-white align-self-center">Accreditations & Approvals</h2>
          </div>
          <div className="vr mx-4 bg-white"></div>
          <div className="row g-2 mx-auto">
            <div className="col-md-6">
              <div className="appr-card bg-white shadow p-3">
                <IconBox
                  iconLg={true}
                  iconBox={false}
                  src={"/images/nabl-logo.jpg"}
                  title={"NABL Certification"}
                  desc={"Konnect Diagnostics takes great pride in being a NABL certified laboratory. This prestigious certification underscores our dedication to meeting the highest standards of quality in diagnostic care."}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="appr-card bg-white shadow p-3">
                <IconBox
                  iconLg={true}
                  iconBox={false}
                  src={"/images/icmr-logo.jpg"}
                  title={"ICMR Approval"}
                  desc={"Konnect Diagnostics is recognized and approved by the Indian Council of Medical Research (ICMR). This recognition further solidifies our commitment to providing comprehensive health services."}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-6 bg-k-light">
        <div className="container">
          <div className="w-50 mx-auto text-center">
            <span className="text-k-text">Founder</span>
            <h3 className="text-k-primary text-k-clr-secondary">Dr. Mahesh Rao</h3>
            <p className="text-k-text">
              At Konnect Diagnostics, our team is led by the visionary founder,
              Dr. Mahesh Rao. With 15 years of experience as an orthopedic surgeon
              and expertise in the diagnostic business, Dr. Rao has played a
              pivotal role in shaping our organization. Driven by a passion for
              providing quality-focused and affordable diagnostic services, Dr.
              Rao envisioned a diagnostic chain that not only catered to the
              lucrative markets but also reached the underserved semi-urban and
              rural areas of India. His goal was to make high-quality diagnostics
              accessible to everyone, regardless of their geographical location.
            </p>
          </div>
          {/* <div className="">
            <DynamicImage imageName={"mahesh-rao.png"} />
          </div> */}
        </div>
      </div>


      <div className="container d-flex py-6 gap-4">
        <IconBox
          iconLg={false}
          iconBox={true}
          iconAbove={true}
          src={"/images/growth.png"}
          desc={"Konnect Diagnostics started with one center in Kompally and expanded to multiple locations, forming a partnership with PathLabs to enhance diagnostic capabilities."}
        />
        <div className="vr mx-3"></div>
        <IconBox
          iconLg={false}
          iconBox={true}
          iconAbove={true}
          src={"/images/innovation.png"}
          desc={"Driven by our passion for innovation, we introduced a groundbreaking addition to our diagnostic chain – the first-of-its-kind Fetal Medicine center."}
        />
        <div className="vr mx-3"></div>
        <IconBox
          iconLg={false}
          iconBox={true}
          iconAbove={true}
          src={"/images/patient.png"}
          desc={"Our journey is a testament to our dedication to delivering exceptional patient care, pushing the boundaries of innovation, and expanding our reach to touch more lives."}
        />
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
.appr-card{
  border-bottom: 8px solid var(--primary-color);
}
  .banner-cnt {
    h2 {
      color: #005bab;
      font-size: 2rem;
    }
    h6 {
      font-size: 15px;
      span {
        color: #00aeef;
        font-family: inherit;
      }
    }
  }
  .banner-bg {
    height: 15em;
    align-items: center;
    background: linear-gradient(
        0deg,
        rgba(0, 32, 60, 0),
        rgba(0, 174, 239, 0.3)
      ),
      url("/images/about-banner.jpg");
    background-size: cover;
  }
  .flex-r {
    flex-direction: row;
  }
  .img-box img {
    width: 30rem;
    border-radius: 1rem;
    margin-bottom: 10rem;
  }
  .img-box {
    padding: 0 50px;
    background: url("/images/sec1-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .sec {
    gap: 50px;
    overflow: hidden;
    margin: 25px auto;
  }
  .para-box {
    gap: 1.5rem;
  }
  .para img {
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 100%;
    padding: 1rem;
    gap: 20px;
    width: 65px;
  }

  /* -----------------------------Section three------------------------------ */
  .s3 {
    background-color: var(--secondary-color);
    background-image: linear-gradient(to bottom, #00aeef 50%, white 50%);
  }
  ${'' /* .s3-boxes {
    gap: 3rem;
    justify-content: center;
    padding: 20px;
  }
  .s3-box {
    background-color: #fff;
    padding: 30px;
    margin: 25px 0 0 0;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 50%;
    gap: 20px;
  }
  .s3-box img {
    width: 120px;
  }
  .s3-box h4 {
    font-size: 1.2rem;
    font-weight: 900;
  } */}

  /* -----------------------------Section Four------------------------------ */

  .s4 {
    margin-top: 0px;
    height: 300px;
    justify-content: center;
    align-items: center;
    /* margin-top: 15rem; */
  }
  .s4-info {
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 2;
    padding: 100px 50px;
  }
  .s4 img {
    margin: 5rem 2rem 0;
    margin-top: -100px;
  }
  .s4-img {
    background-color: #00aeef;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* height: 100%; */
    border-radius: 0 15px 15px 0;
  }

  /* -----------------------------Section Five------------------------------ */

  .s5 {
    justify-content: center;
    margin: 25px auto;
    .icon-svg {
      width: 50px;
      height: 50px;
      fill: #00aeef;
    }
  }
  .s5-box {
    display: block;
    position: relative;
    // max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
  }
  .s5-box:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -26px;
    right: -26px;
    background: #00aeef;
    height: 52px;
    width: 52px;
    border-radius: 32px;
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }
  .s5-box1 {
    padding: 2rem;
  }
  .s5-box3 {
    padding: 1rem;
  }
  .s5-box2 {
    padding: 2rem;
  }
`;

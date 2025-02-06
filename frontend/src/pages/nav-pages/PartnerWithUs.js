import React from "react";
import { styled } from "styled-components";
import PageBanner from "../../components/PageBanner";
import SectionsHeadingAndPara from "../../components/homeComponents/SectionsHeadingAndPara";
import CardComponent from "../../components/CardComponent";
// import CardCarousel from "../../components/CardCarousel";
// import AssetImage from "../../imageImporter";

const PartnerWithUs = () => {
  return (
    <Wrapper className="partnerwithus">
      <PageBanner title={"Partner With Us"} bannerImg={"partner-with-us-bg-image"} />
      
      <section className="container mx-auto py-6 px-md-0 px-4">
        <div className="row">
          <div className="col-md-6 align-self-center pe-5">
            <h2 className="text-k-primary text_secondary_clr">
              Our Commitment to Exceptional Diagnostic Services
            </h2>
            <p className="text_accent fw-normal">
              We invite you to join us in our mission to deliver high-quality
              healthcare solutions to patients.
            </p>
          </div>

          <div className="col-md-6 d-flex align-items-stretch gap-2">
            <div className="w-50" id="pwu_s121"></div>
            <div className="w-50 d-flex flex-column gap-2">
              <div className="w-100">
                <img src="/images/scientist-working-laboratory-with-test-tubes-laboratory-equipment.jpg" alt="Img" className="w-100"/>
              </div>
              <div className="w-100 ">
                <img src="https://img.freepik.com/free-photo/interior-empty-science-laboratory-with-modern-equipment-prepared-pharmaceutical-innovation-using-high-tech-microbiology-tools-scientific-research-vaccine-development-against-covid19-virus_482257-12800.jpg?t=st=1709271894~exp=1709275494~hmac=cbbad706512a080efdc58fecffab0e85569c0bcd5f9c042ef8d8667ad3312db3&w=1380" alt="imga" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg_light2 px-md-0 px-5">
        <SectionsHeadingAndPara
          title={"Why Konnect Diagnostics?"}
          para={`We bridge the gap between accuracy and accessibility. With cutting-edge technology and a commitment to innovation, we make diagnostics efficient, reliable, and readily available to all.`}
          />

        <div className="container mx-auto pt-5" id="pwu_s22">
          <div className="row gx-5">
            {
              [
                {icon: "doctor", title: "Expert Team", para: "We have assembled a team of certified and qualified professionals comprising radiologists, pathologists, doctors, and technicians."},
                {icon: "microscope", title: "State-of-the-Art Facilities", para: "We strive to be at the forefront of medical advancements by equipping our branches with the latest technologies and cutting-edge equipment."},
                {icon: "high-quality", title: "Convenient and Fast Service", para: "We understand the importance of timely diagnoses and strive to provide quick services, ensuring that reports are delivered within 24 hours or even faster."}
              ].map((item, index) => (
                <div key={index} className="col-md-4 text-center px-4 mb-4">
                  <div className="card_img_container">
                    <img src={`/images/stethescope.svg`} alt="steth" className="img_steth" />
                    <img src={`/images/${item.icon}.svg`} alt="icon" className="w_icon" />
                  </div>
                  <div>
                    <h2 className="text_accent my-3 text_secondary_clr"> { item.title } </h2>
                    <p className="text-k-text text-center"> { item.para } </p>
                </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="container py-6 px-md-0 px-4">
        <SectionsHeadingAndPara 
            title={"Partner Benefits"}
            para={`We're dedicated to unlocking partnerships and elevating diagnostics. Join us on a journey where mutual success takes center stage. Let's collaborate and revolutionize the world of diagnostics together`}
          />
        {/* <div className="container mx-auto mt-3">
          <CardCarousel />
        </div> */}

        <div className="d-md-flex gap-2 mt-4">
          <CardComponent
            img="/images/benf1.jpg" 
            title="Enhanced Reputation"
            desc="By partnering with Konnect Diagnostics, you align yourself with a reputable and trusted brand in the healthcare industry. Our commitment to excellence and adherence to strict quality standards will enhance your reputation and instill confidence in your patients."
          />
          <CardComponent
            img="/images/benf2.jpg" 
            title="Comprehensive Services"
            desc="As a partner, you gain access to our comprehensive range of diagnostic services. This includes radiology, pathology, and a range of specialized tests, allowing you to offer a wide spectrum of healthcare solutions to your patients."
          />
          <CardComponent
            img="/images/benf3.jpg" 
            title="Collaborative Approach"
            desc="We believe in fostering strong partnerships based on collaboration and mutual growth. We work closely with our partners to understand their specific needs and develop tailored solutions that meet the unique requirements of their patient base."
          />
          <CardComponent
            img="/images/benf4.jpg" 
            title="Continuous Support"
            desc='Our dedicated team is committed to providing ongoing support to our partners, offering comprehensive training, education, technical assistance, and marketing support to ensure your success as our valued partner.'
          />
        </div>
      </section>

      <section className="bg_light2 py-6">
        <div className="container px-md-0 px-5 d-md-flex align-items-stretch justify-content-between">
          <div className="pe-5 d-flex flex-column justify-content-center w-md-50">
            <h2 className="text-k-primary text_secondary_clr"> Join us in our Pursuit of excellence in diagnostic care and together </h2>
            <p className="text-k-text text-muted"> Let's make a positive impact on the health and well-being of our communities. </p>
            <p className="text_accent"> Partner with Konnect Diagnostics today and experience the Konnect difference! </p>
          </div>

          <div className="d-flex gap-2 align-items-stretch w-md-50">
            <div className="w-50" id="pwu_s421"></div>
            <div className="w-50 d-flex flex-column gap-2">
              <div className="w-100">
                <img src="/images/partner-with-us/pwu_s42i2.jpg" alt="pwu_s42i2" className="w-100" />
              </div>
              <div className="w-100 ">
                <img src="/images/diagnostic-center.jpg" alt="pwu_s42i3" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default PartnerWithUs;

const Wrapper = styled.section`
  #pwu_s121 {
    background: url("/images/doctor-with-stethoscope.jpg");
    background-position: right top;
    background-size: cover;
    background-repeat: no-repeat;
  }
  #pwu_s22 {
    .card_img_container {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      border: 2px solid #e6e6e6;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    }
    .img_steth {
      position: absolute;
      top: -15px;
      left: -15px;
    }
    .w_icon {
    }
  }
  #pwu_s421 {
    background: url("/images/partner-with-us/pwu_s42i1.jpg");
    background-position: right top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

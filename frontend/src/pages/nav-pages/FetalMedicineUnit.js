import React from "react";
import { styled } from "styled-components";
import FacilitiesCarousel from "../../components/requiredPages/FacilitiesCarousel";

const Li = ({ prop }) => {
  return (
    <li className="bg-k-light rounded px-3 py-2">
      <svg height="20" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <g id="Outline">
          <g> <path d="m11.982 14.982c-.265 0-.52-.105-.707-.293l-2.982-2.982c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.275 2.275 7.293-7.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-8 8c-.188.188-.442.293-.707.293z" fill="#d66ea6 " /> </g>
          <g> <path d="m12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c1.193 0 2.342.257 3.414.763.499.236.713.832.477 1.331-.236.5-.832.715-1.332.478-.802-.38-1.663-.572-2.559-.572-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-.553.448-1 1-1s1 .447 1 1c0 4.411-3.589 8-8 8z" fill="#d66ea6 " /> </g>
        </g>
      </svg>
      <span className="text-k-text ms-2"> {prop} </span>
    </li>
  );
};

const FetalMedicineUnit = () => {
  return (
    <Wrapper>
      <div className="container fmu-banner rounded-4 row d-flex-cb py-6 px-md-5 mx-auto my-md-5 m-3 p-3">
        <div className="col-md-5 py-6">
          <p className="text-k-accent mt-3 fmu-text-clr"> Fetal Medicine Unit </p>
          <h2 className="text-k-primary">
            Center for Fetal Medicine, that provides
            <span className="fmu-text-clr"> Mother & Fetus </span> care
          </h2>
          <p className="text-k-text">
            By assessing the fetal growth, its wellbeing, diagnosis and management of fetal disorders and abnormalities which counsels parents to take care of their child in prior.
          </p>
        </div>
        <div className="col-md-7 d-flex-cc" style={{minHeight: "200px"}}>
        </div>
      </div>

      <div className="container row d-md-flex py-6 mx-auto my-md-5 m-3 p-md-0 p-3">
        <div className="col-md-6 pe-md-5">
          <div className="d-flex flex-column gap-3">
            <h2 className="text-k-primary fmu-text-clr"> About Us </h2>
            <p className="text-k-text">Over a decade, many diagnostic systems are striving to go through a quality process in Fetal Health Diagnosis. Considering the importance and value of fetal health and care, Konnect Diagnostics is a step ahead of all its competitors in market to provide the best fetal diagnosis and guide the mother by suggesting relevant and superior treatment to forbid the future health issues of the fetus. Konnect diagnostics is at the reach to offer a complete and detailed Fetal imaging and diagnosis with a high expertise team and well equipped facility which is comfortable and affordable. We care and let you know how to take care.</p>
          </div>
          {
            [
              { icon: "report", desc: "Accurate Reports" },
              { icon: "equipments", desc: "Advanced experties and equipments" },
              { icon: "doctors", desc: "Skilled and experienced doctors and staff" },
              { icon: "facilities", desc: "Premium facilities like VRTOUR, 3D Printing, Photobooth" },
            ].map((item, index) => (
              <div key={index} className="iconBox2 d-flex align-items-center rounded bg-white my-2 shadow-sm p-1">
                <div className="icon-wrapper d-flex-cc me-2">
                  <img src={`images/srvcs/fmu/${item.icon}.png`} alt={item.icon} />
                </div>
                <div>
                  <h2 className="text-k-text fw-bold"> {item.desc} </h2>
                </div>
              </div>
            ))
          }
        </div>
        <div className="col-md-6 ps-md-5 d-flex gap-2">
          <div>
            <img src={`images/srvcs/fmu/image3.png`} alt="img3" />
          </div>
          <div className="d-flex flex-column gap-2">
              <img src={`images/srvcs/fmu/image4.png`} alt="img3" />
              <img src={`images/srvcs/fmu/image5.png`} alt="img3" />
          </div>
        </div>
      </div>

      <section className="container-fluid d-flex flex-column pb-5 bg-k-light" id="fmu_s4">
        <div className="flex-columnmx-auto p-5" id="fmu_s41">
          <div className="text-center">
            <h2 className="text-k-primary fmu-text-clr"> Our Services </h2>
            <span className="text-k-text fw-bold">Promising best quality Services</span>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="d-flex bg-white rounded-4">
            <div className="w-50 m-4" style={{ minHeight: "200px" }}>
              <img src="/images/fetal-medicine-care/fetalImaging.jpg" alt="nhtjm" className="img-fluid rounded-3"/>
            </div>
            <div className="w-50 p-4 ps-5 d-flex flex-column justify-content-center content_wrapper">
              <h4 className="text-k-secondary fmu-text-clr">Fetal Imaging</h4>
              <ul className="d-flex list-style-none gap-2 flex-wrap">
                {
                  [
                    "Early pregnancy scan/dating scan - 3D/4D",
                    "Early TIFFA / NT - 3D/4D",
                    "TIFFA / Anomaly scan - 3D/4D",
                    "Fetal Echocardiogram - 3D/4D",
                    "Fetal neuro imaging",
                    "Fetal Doppler",
                    "Growth scans",
                    "BPP",
                    "Fetal MRI",
                  ].map((item, index) => (
                    <Li key={index} prop={item} />
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="d-flex bg-white rounded-4 my-3">
            <div className="w-50 p-4 d-flex flex-column justify-content-center content_wrapper">
              <h4 className="text-k-secondary fmu-text-clr"> Imaging In Fertility</h4>
              <ul className="d-flex gap-2 flex-wrap">
                {
                  [
                    "Follicular monitoring",
                    "Antral follicular study",
                    "Stromal volume in PCOS",
                    "Endometrial and perifollicular doppler",
                    "3D imaging of uterus",
                    "Sono-salpingography",
                    "Penile doppler",
                    "Scrotal imaging",
                    "Trans rectal USG for seminal vesicles",
                    "Prostate and ejaculatory ducts"
                  ].map((item, index) => (
                    <Li key={index} prop={item} />
                  ))
                }
              </ul>
            </div>
            <div className="w-50 m-4">
              <img src="/images/fetal-medicine-care/imagingInFertility.jpg" alt="nhtjm" className="img-fluid rounded-3"/>
            </div>
          </div>

          <div className="d-flex bg-white rounded-4">
            <div className="w-50 m-4">
              <img src="/images/fetal-medicine-care/maternal.jpg" alt="nhtjm" className="img-fluid rounded-3"/>
            </div>
            <div className="w-50 p-4 d-flex flex-column justify-content-center content_wrapper">
              <h4 className="text-k-secondary fmu-text-clr"> Fetal & Maternal</h4>
              <ul  className="d-flex gap-2 flex-wrap">
                {
                  [
                    "INTERVENTIONS",
                    "CVS",
                    "Amniocentesis",
                    "Fetal reduction",
                    "Maternal abdominal paracentesis/adnexal",
                    "Cyst aspiration"
                  ].map((item, index) => (
                    <Li key={index} prop={item} />
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="d-flex bg-white rounded-4 my-3">
            <div className="w-50 p-4 d-flex flex-column justify-content-center content_wrapper">
              <h4 className="text-k-secondary fmu-text-clr">Genetics</h4>
              <ul className="d-flex gap-2 flex-wrap">
                <Li prop={"Genetic counselling"} />
                <Li prop={"Blood investigations"} />
              </ul>
            </div>
            <div className="w-50 m-4">
              <img src="/images/fetal-medicine-care/genetics.jpg" alt="fmu_img" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="fmu-bg-clr2 py-6">
        <div className="container">
          <h2 className="text-center text-k-primary fmu-text-clr"> Konnect Facilities </h2>
          <div>
            <FacilitiesCarousel />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default FetalMedicineUnit;

const Wrapper = styled.div`
.fmu-banner{
  background: var(--fmu-clr2) url('/images/srvcs/fmu/bannerImg.jpg');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 60%;
  position: relative;
  overflow: hidden;
  z-index: 0;
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, var(--fmu-clr2, #ffffff) 50%, transparent);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
}
.iconBox2{
  .icon-wrapper{
    width: 50px;
    height: 50px;
    background: var(--fmu-clr2);
    border-radius: 5px;
    img{
      width: 30px;
    }
  }
}

.fmu-text-clr{
  color: var(--fmu-clr1)
}

.fmu-bg-clr2{
  background: var(--fmu-clr2);
}
#fmu_s4{
  ul{
    list-style-type: none;
    margin-left: 0;
    padding: 0;
  }
}
`;

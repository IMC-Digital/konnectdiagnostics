import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const RadiologyServices = () => {
  return (
    <Wrapper>
      <div className="container rs-banner rounded-4 row d-flex-cb py-6 px-md-5 mx-auto my-md-5 m-3 p-3">
        <div className="col-md-5 py-6">
          <h2 className="text-k-primary">
            Konnect Diagnostics offers top-tier
            <span className="text-k-clr-secondary"> Radiology </span> Services
          </h2>
          <p className="text-k-text">
            With cutting-edge technology, expert radiologists, and swift turnaround times for accurate diagnoses.
          </p>
          <p className="text-k-accent mt-3 text-k-clr-secondary">
            Your health, our priority
          </p>
        </div>
        <div className="col-md-7 d-flex-cc" style={{minHeight: "200px"}}>
        </div>
      </div>

      <div className="container p-3 px-md-0 pb-5">
        <div className="row gx-3 gy-3">
          {
            [
              { title: "MRI", fullForm: "Magnetic Resonance Imaging", url: "magnetic-resonance-imaging", col: "6" },
              { title: "2D-ECHO", fullForm: "Two-dimensional Echocardiography", url: "two-dimensional-echocardiography", col: "3" },
              { title: "CBCT", fullForm: "Cone-Beamed Computed Tomography", url: "cone-beamed-computed-tomography", col: "3" },
              { title: "EEG", fullForm: "Electroencephalogram", url: "electroencephalogram", col: "3" },
              { title: "Mammography", fullForm: "", url: "mammography", col: "3" },
              { title: "CT", fullForm: "Computed Tomography", url: "computed-tomography", col: "6" },
              { title: "X-ray", fullForm: "", url: "x-ray", col: "6" },
              { title: "PFT", fullForm: "Pulmonary Function Test", url: "pulmonary-function-test", col: "3" },
              { title: "TMT", fullForm: "Treadmill test", url: "treadmill-text", col: "3" },
              { title: "OPG", fullForm: "Orthopantomagram", url: "orthopantomagram", col: "3" },
              { title: "NCS", fullForm: "Nerve Conduction Studies", url: "nerve-conduction-studies", col: "3" },
              { title: "Ultrasound", fullForm: "", url: "ultrasound", col: "3" },
              { title: "PFT", fullForm: "Pulmonary Function Test", url: "pulmonary-function-test", col: "3" },
            ].map((item, index) => (
              <div key={index} className={`col-md-${item.col}`}>
                  <div className="rs-card-wrapper rounded-4 p-0 w-100 h-100">
                    <Link to={`/radiology-services/${item.url}`}>
                        <div className="d-flex-cc w-100">
                          <Image src={`/images/srvcs/radiology/machines/${item.title}.png`} alt={item.title} className="img-fluid p-3" />
                        </div>
                        <h2 className="text-k-accent ps-4 pe-3 py-2 rs-title">
                          <span>
                            <span className="text-k-clr-secondary"> {item.title} </span>
                            { item.fullForm !== "" && <span className="text-k-text fw-normal"> - {item.fullForm} </span> }
                          </span>
                          <i className="fa-solid fa-arrow-right-long text-k-clr-secondary"></i>
                        </h2>
                    </Link>
                  </div>
              </div>
            ))
          }
        </div>
      </div>

    </Wrapper>
  );
};

export default RadiologyServices;

const Wrapper = styled.div`
.rs-banner{
  background: var(--rs-clr1, #ffffff) url('/images/srvcs/radiology/cmptd_tomography.jpg');
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
    background-image: linear-gradient(to right, var(--rs-clr1, #ffffff) 50%, transparent);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
}
.rs-card-wrapper{
  position: relative;
  background: var(--rs-clr1);
  transition: 0.5s;
  border: 1px solid transparent;
  &::before{
    content: "";
    width: 5px;
    height: 18px;
    background: var(--primary-color);
    position: absolute;
    top: 20px;
    left: 0px;
  }
  a{ text-decoration: none; }
  .rs-title i{
    margin-left: 8px;
    opacity: 0;
    transition: 0.5s;
  }
}
.rs-card-wrapper:hover{
  transform: translate(0px, -20px);
  box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
  border: 1px solid #e8f0ff;
  .rs-title i{
    margin-left: 12px;
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {
  .rs-banner {
    background-position: bottom center;
    background-size: 100%;
    &::after{
      background-image: linear-gradient(to right, transparent 50%, transparent);
    }
  }
}
`;

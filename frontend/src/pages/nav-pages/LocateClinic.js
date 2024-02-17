import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import LocateClinicGrid from "./LocateClinicGrid";
import ClinicSearchBar from "./LocateClinics/ClinicsSearchBar";
import axios from "axios";
import ClinicPinSearch from "./LocateClinics/ClinicPinSearch";
import { BASE_API_URL } from "../../api";
import PageBanner from "../../components/PageBanner";

const LocateClinic = () => {
  const [showNoExctPin, setshowNoExctPin] = useState(false);
  const [clinicsdata, setClinicsdata] = useState([]);
  const [pinSearchTerm, setPinSearchTerm] = useState("");
  // const [sessPinCodes, setSessPinCodes] = useState([]);

  useEffect(() => {
    // const storedPinCodes = sessionStorage.getItem("enteredpincodes");
    // setSessPinCodes(storedPinCodes || "");

    axios
      .get(`${BASE_API_URL}/clinics`)
      .then((response) => {
        setClinicsdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tests:", error);
      });
  }, []);

  const handlePinCodeSearch = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/clinics/pinsearch?q=${pinSearchTerm}`
      );

      if (response.data.nearestCenters) {
        setshowNoExctPin(true);
        setClinicsdata(response.data.nearestCenters);
      } else {
        setshowNoExctPin(false);
        setClinicsdata(response.data.clinicsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const pinclick = async (item) => {
  //   // console.log(pinSearchTerm);
  //   try {
  //     const response = await axios.get(
  //       `${BASE_API_URL}/clinicpinsearch?q=${item}`
  //     );
  //     setClinicsdata(response.data.exactPincodeResults);
  //     setshowNoExctPin(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Wrapper>
      <div className="locate-clinic">
        <PageBanner title={"Locate Nearest Centers"} bannerImg={"locate-clinic-bg-image"} />

        <div className="container w-50 bg-white shadow p-3 rounded mt-5">
          <div className="d-flex gap-2">
            <ClinicSearchBar
              clinicsdata={clinicsdata}
              setClinicsdata={setClinicsdata}
            />
            <ClinicPinSearch
              handlePinCodeSearch={handlePinCodeSearch}
              pinSearchTerm={pinSearchTerm}
              setPinSearchTerm={setPinSearchTerm}
            />
          </div>
          <div className="d-flex gap-2">
            {/* {sessPinCodes
              .toString()
              .split(" ")
              .map((item) => (
                <div
                  onClick={() => pinclick(item)}
                  className="d-flex align-items-center overflow-hidden bg-light rounded p-0 cursor-pointer"
                  key={item}
                >
                  <p className="m-0 py-1 px-3">{item}</p>
                </div>
              ))} */}
          </div>
        </div>
        <div className="container w-75">
          <p
            className={
              showNoExctPin ? "mt-4 mb-4 text-center text-danger fw-bold" : ""
            }
          >
            {showNoExctPin
              ? "No Exact Pincode clinics found, but below are nearest centers to entered Pincode"
              : ""}
          </p>
          <LocateClinicGrid clinicsdata={clinicsdata} />
        </div>
      </div>
    </Wrapper>
  );
};

export default LocateClinic;
const Wrapper = styled.section`
  .locate-clinic {
    background-color: white;

    .clinicsearchinp {
      width: 400px;
    }
    .searchBtnStyle {
      width: 50px;
      padding: 0 5px;
      background: #005bab;
      border: 1px solid #005bab;
    }
  }
`;

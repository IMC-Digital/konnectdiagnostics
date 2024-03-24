import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import LocateClinicGrid from "./LocateClinicGrid";
import ClinicSearchBar from "./LocateClinics/ClinicsSearchBar";
import axios from "axios";
import ClinicPinSearch from "./LocateClinics/ClinicPinSearch";
import { BASE_API_URL } from "../../api";
// import PageBanner from "../../components/PageBanner";

const LocateClinic = () => {
  const [showNoExctPin, setshowNoExctPin] = useState(false);
  const [clinicsdata, setClinicsdata] = useState([]);
  const [pinSearchTerm, setPinSearchTerm] = useState("");

  useEffect(() => {
    const fetchAllClinics = async () => {
      try{
        const response = await axios.get(`${BASE_API_URL}/clinics`);
        setClinicsdata(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAllClinics();
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

  return (
    <Wrapper>
      <div className="locate-clinic">
        {/* <PageBanner title={"Locate Nearest Centers"} bannerImg={"locate-clinic-bg-image"} /> */}

        <div className="container w-50 bg-white shadow-sm d-flex gap-2 p-3 rounded mt-5">
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

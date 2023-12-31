import React, { useEffect, useState } from "react";
import LocateClinicGrid from "../../pages/nav-pages/LocateClinicGrid";
import { BASE_API_URL } from "../../api";
import axios from "axios";

const ToggleKL = () => {
  const [clinicsdata, setClinicsdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/clinics`);
        setClinicsdata(response.data);
      } catch (error) {
        console.error('Error fetching clinics data:', error);
      }
    };

    fetchData();
  }, []);

  return(
    <div className="px-md-5">
      <LocateClinicGrid clinicsdata={clinicsdata} noclinics={3} />
    </div>
  )
};

export default ToggleKL;


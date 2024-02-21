import React, { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../api';
import axios from 'axios';
import ClinicSearchBar from '../../pages/nav-pages/LocateClinics/ClinicsSearchBar';
import ClinicPinSearch from '../../pages/nav-pages/LocateClinics/ClinicPinSearch';
import SelectClinicGrid from './SelectClinicGrid';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';


export default function SampleCollClinicTab({ userId, profileData, checkOutFormData, setCheckOutFormData }) {
  const [selectedClinic, setSelectedClinic] = useState({})
  const [showNoExctPin, setshowNoExctPin] = useState(false);
  const [clinicsdata, setClinicsdata] = useState([]);
  const [pinSearchTerm, setPinSearchTerm] = useState('');
  // const [userAddresses, setUserAddresses] = useState([]);
  // const [userAddresses, setUserAddresses] = useState([]);

  // useEffect(() => {
  //   const fetchUserAddresses = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_API_URL}/user/get-user-addresses`, { params: { userid: userId } });
  //       setUserAddresses(response.data.addrs);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchUserAddresses();
  // }, [userId]);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/clinics`)
      .then((response) => {
        setClinicsdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tests:', error);
      });
  }, []);

  const handlePinCodeSearch = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/clinics/pinsearch?q=${pinSearchTerm}`);

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

  useEffect(() => {
    console.log(selectedClinic);
  }, [selectedClinic])

  const handleClinicSelection = (e) => {
    const clinicArea = e.target.value;
    // Use the find method to get the object with the matching area
    const selectedClinic = clinicsdata.find(clinic => clinic.area === clinicArea);
    setCheckOutFormData((prevData) => ({
      ...prevData,
      sampleCollection: {
        ...prevData.sampleCollection,
        clinicSampleCollection: {
          ...prevData.sampleCollection.clinicSampleCollection,
          id: selectedClinic.id,
          name: selectedClinic.name,
          address: selectedClinic.address,
          area: selectedClinic.area,
          city: selectedClinic.city,
          code: selectedClinic.code,
          pincode: selectedClinic.pincode,
          google_map_link: selectedClinic.google_map_link,
          telephone_number: selectedClinic.telephone_number,
          email: selectedClinic.email
        },
      },
    }));
  }
  

  return (
    <div className='py-3'>
      <div className="d-flex">
        <div className='w-50 me-2'>
          <ClinicSearchBar
            clinicsdata={clinicsdata}
            setClinicsdata={setClinicsdata}
          />
        </div>
        <div className='w-50'>
          <ClinicPinSearch
            handlePinCodeSearch={handlePinCodeSearch}
            pinSearchTerm={pinSearchTerm}
            setPinSearchTerm={setPinSearchTerm}
          />
        </div>
      </div>

      <div className="container">
        <p className={showNoExctPin ? "mt-4 mb-4 text-center text-danger fw-bold" : ""}>{showNoExctPin ? "No Exact Pincode clinics found, but below are nearest centers to entered Pincode" : ""}</p>
        <div className="d-flex flex-wrap justify-content-center">

          <FormControl className='w-100'>
            <RadioGroup
              aria-labelledby="clinics-radio-field"
              // defaultValue={checkOutFormData.sampleCollection.clinicSampleCollection.area || "Attapur"}
              // defaultValue="Attapur"
              name="radio-buttons-group"
            >
              {clinicsdata.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item.area}
                  className={`shadow-sm rounded my-1 ${checkOutFormData.sampleCollection.clinicSampleCollection.area === item.area ? 'clinicSelectoinChecked' : ''}`}
                  onChange={handleClinicSelection}
                  control={
                    <Radio />
                  }
                  label={
                    <SelectClinicGrid
                      key={item.index}
                      item={item}
                      setSelectedClinic={setSelectedClinic}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

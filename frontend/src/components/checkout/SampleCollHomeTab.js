import React, { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../api';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

export default function SampleCollHomeTab({ setShowAddNewAddressPopup, userId, profileData, checkOutFormData, setCheckOutFormData }) {
  const [userAddresses, setUserAddresses] = useState(["Home", "Office", "Others"]);
  const [userAltMob, setUserAltMob] = useState(checkOutFormData.sampleCollection.homeSampleCollection.alternate_mobile_number);
  const [altMobErrorMessage, setAltMobErrorMessage] = useState("");
  const [altMobSuccessMessage, setAltMobSuccessMessage] = useState("");

  useEffect(() => {
    const fetchUserAddresses = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/user/get-user-addresses/${userId}`);
        setUserAddresses(response.data.addrs);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserAddresses();
  }, [userId]);

  const handleUserAddressChange = (e) => {
    if (e.target.value === 'default') {
      return;
    }

    const selectedAddIndex = Number(e.target.value);
    const selectedAddress = userAddresses[selectedAddIndex];

    setCheckOutFormData((prevData) => ({
      ...prevData,
      sampleCollection: {
        ...prevData.sampleCollection,
        homeSampleCollection: {
          ...prevData.sampleCollection.homeSampleCollection,
          address_id: selectedAddress.address_id,
          address_line_1: selectedAddress.address_line_1,
          address_line_2: selectedAddress.address_line_2,
          address_name: selectedAddress.address_name,
          address_type: selectedAddress.address_type,
          city: selectedAddress.city,
          googlemap: selectedAddress.googlemap,
          locality: selectedAddress.locality,
          pincode: selectedAddress.pincode,
          state: selectedAddress.state,
        },
      },
    }));
  };


  const handleAltMobNum = () => {
    const numericValue = userAltMob.replace(/\D/g, '');
    if (/^\d{10}$/.test(numericValue)) {
      // console.log("Entered Mobile Number:", numericValue);
      setAltMobSuccessMessage("Entered mobile number: " + numericValue);
      setAltMobErrorMessage("");

      setCheckOutFormData((prevData) => ({
        ...prevData,
        sampleCollection: {
          ...prevData.sampleCollection,
          homeSampleCollection: {
            ...prevData.sampleCollection.homeSampleCollection,
            alternate_mobile_number: userAltMob,
          },
        },
      }));
    } else {
      setAltMobErrorMessage("Please enter a valid 10-digit mobile number");
      setAltMobSuccessMessage("");
    }
  };

  return (
    <div className="py-3">
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0"> Select Your Address </p>
      </div>
      <div className="d-md-flex gap-2">
        <Form.Select aria-label="Default select example" onChange={(e) => { handleUserAddressChange(e); }} className="me-0 my-md-0 my-2">
          <option value={checkOutFormData.sampleCollection.homeSampleCollection.address_name === "Select Address"}> Select Address </option>
          {userAddresses.map((address, index) => (
            <option key={index} value={index} selected={ address.address_name === checkOutFormData.sampleCollection.homeSampleCollection.address_name }>
              {address.address_name}
            </option>
          ))}
        </Form.Select>

        <button className="btn btn-outline-secondary btn-sm" style={{ width: "200px" }} onClick={() => { setShowAddNewAddressPopup(true); }}>
          Add New Address +
        </button>
      </div>

      <div className="my-4">
        {checkOutFormData.sampleCollection.homeSampleCollection.address_name !== "" ? (
          <>
            <p className="mb-1 small">
              <strong>Address:</strong>
              {
                checkOutFormData.sampleCollection.homeSampleCollection
                  .address_line_1
              }{" "}
              {
                checkOutFormData.sampleCollection.homeSampleCollection
                  .address_line_2
              }{" "}
              {checkOutFormData.sampleCollection.homeSampleCollection.city}{" "}
              {checkOutFormData.sampleCollection.homeSampleCollection.state} -{" "}
              {checkOutFormData.sampleCollection.homeSampleCollection.pincode}
            </p>
            <p className="mb-1 small">
              <span className='fw-bold'>User: </span> {profileData.fullname}
            </p>
            <p className="mb-1 small">
              <span className='fw-bold'>Regd. Mobile Number: </span> {profileData.mobile_number}
            </p>
            <p className="mb-1 small">
              <span className='fw-bold'>Alternative Mobile Number: </span> {profileData.alternate_mobile_number}
            </p>
          </>
        ) : (
          <p>No address selected</p>
        )}
      </div>

      <div>
        <div className="mb-0">
          <p className="text_accent"> Alternative Mobile Number: </p>
          <InputGroup style={{ width: "335px" }}>
            <Form.Control
              required
              placeholder="Alternative Mobile Number"
              aria-label="Alternative Mobile Number"
              aria-describedby="alt_mob"
              name="alt_mob"
              type='tel'
              defaultValue={userAltMob}
              onChange={(e) => setUserAltMob(e.target.value)}
            />

            <Button type='button' variant="outline-secondary" id="alt_mob_btn" onClick={handleAltMobNum}> Change </Button>
          </InputGroup>
        </div>
        <p className="small text-danger">{altMobErrorMessage}</p>
        <p className="small text-success">{altMobSuccessMessage}</p>

        <p className="small">
          <strong>Note: </strong> Home collection charges will be applicable.
        </p>
      </div>
    </div>
  );
}

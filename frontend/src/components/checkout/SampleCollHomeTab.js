import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BASE_API_URL } from '../../api';
import axios from 'axios';

export default function SampleCollHomeTab({ setShowAddNewAddressPopup, userId }) {
  const [userAddresses, setUserAddresses] = useState(["Home", "Office", "Others"]);
  const [userAltMob, setUserAltMob] = useState("+91 ---")
  const [selectedAddress, setSelectedAddress] = useState([]);

  useEffect(() => {
    const fetchUserAddresses = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/user/get-user-addresses`, { params: { userid: userId } });
        setUserAddresses(response.data.addrs);
        setSelectedAddress(response.data.addrs[0])
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserAddresses();
  }, [userId]);

  useEffect(() => {
    const getAltMob = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/user/get-altmobi`, { params: { userid: userId } });
        setUserAltMob(response.data.altmob[0].alternate_mobile_number);
        // console.log(response.data.altmob);
      } catch (err) { console.log(err); }
    }
    getAltMob();
  }, [userId])

  const selectAddress = (e) => {
    const selectedValue = Number(e.target.value);
    const selectedAddressObject = userAddresses.filter((address) => address.address_id === selectedValue);

    setSelectedAddress(selectedAddressObject[0]);
  };

  // useEffect(() => {
  //   console.log(selectedAddress);
  // }, [selectedAddress]);

  const handleAltMobChange = (e) => {
    const newValue = e.target.value;
    const numericValue = newValue.replace(/\D/g, '');
    setUserAltMob(numericValue);
  };


  return (
    <div className='py-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <p className='mb-0'> Select Your Address </p>
      </div>
      <div className='d-flex'>
        <Form.Select 
          aria-label="Default select example" 
          onChange={(e) => { selectAddress(e) }}
          className='me-3'
          style={{width: "250px"}}
          > {userAddresses.map((addressname) => (
              <option key={addressname.address_id} value={addressname.address_id}>
                {addressname.address_name}
              </option>
            ))}
        </Form.Select>
        <button 
          className='btn btn-outline-secondary btn-sm'
          style={{width: "200px"}}
          onClick={() => { setShowAddNewAddressPopup(true) }}
          >Add New Address +</button>
      </div>
      <div>
        <p>{selectedAddress.address_line_1} {selectedAddress.address_line_2} {selectedAddress.city} {selectedAddress.state} - {selectedAddress.pincode} </p>
        <div className='d-flex justify-content-between'>
          <InputGroup className="mb-3 w-auto">
            <InputGroup.Text id="basic-addon1">Alternative Mobile Number:</InputGroup.Text>
            <Form.Control
              placeholder="Alternative Mobile Number"
              aria-label="Alternative Mobile Number"
              aria-describedby="basic-addon1"
              value={userAltMob}
              type="tel"
              onChange={handleAltMobChange}
            />
          </InputGroup>
        </div>
        <p className="small"> <strong>Note:</strong> Home collection charges will be applicable.</p>
      </div>
    </div>
  )
}

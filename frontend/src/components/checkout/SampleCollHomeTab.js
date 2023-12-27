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
      try{
        const response = await axios.get(`${BASE_API_URL}/user/get-user-addresses`, { params: { userid: userId } });
        setUserAddresses(response.data.addrs);
        selectedAddress(response.data.addrs[0])
      }catch(err){
        console.log(err);
      }
    }
    const getAltMob = async() => {
      try{
        const response = await axios.get(`${BASE_API_URL}/user/get-altmobi`, { params: { userid: userId } });
        setUserAltMob(response.data.altmob);
      }catch(err){console.log(err);}
    }
    fetchUserAddresses();
    getAltMob();
  }, [userId]);

  const selectAddress = (e) => {
    const selectedValue = Number(e.target.value);
    const selectedAddressObject = userAddresses.filter((address) => address.address_id === selectedValue);

    setSelectedAddress(selectedAddressObject[0]);
  };

  useEffect(() => {
    console.log(selectedAddress);
  }, [selectedAddress]);
  

  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
            <p className='mb-0'> Select Your Address </p>
            <button className='btn btn-outline-secondary btn-sm' onClick={() => {setShowAddNewAddressPopup(true)}}>Add New Address +</button>
        </div>
        <div>
            <Form.Select aria-label="Default select example" onChange={(e) => {selectAddress(e)}}>
              {userAddresses.map((addressname) => (
                <option key={addressname.address_id} value={addressname.address_id}>
                  {addressname.address_name}
                </option>
              ))}
            </Form.Select>
        </div>
        <div>
            {/* <p>{userAddresses[0].address_line_1} {userAddresses[0].address_line_2} {userAddresses[0].city} {userAddresses[0].state} - {userAddresses[0].pincode} </p> */}
            <p>{selectedAddress.address_line_1} {selectedAddress.address_line_2} {selectedAddress.city} {selectedAddress.state} - {selectedAddress.pincode} </p>
            <div className='d-flex justify-content-between'>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Alternative Mobile Number : </InputGroup.Text>
                  <Form.Control
                    placeholder="Alternative Mobile Number"
                    aria-label="Alternative Mobile Number"
                    aria-describedby="basic-addon1"
                    value={userAltMob}
                  />
                </InputGroup>
            </div>
            <p className="small"> <strong>Note:</strong> Home collection charges will be applicable.</p>
        </div>
    </div>
  )
}

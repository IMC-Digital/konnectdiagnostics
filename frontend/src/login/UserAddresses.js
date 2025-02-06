import React, { useEffect, useState } from 'react';
import { BASE_API_URL } from '../api/index';
import axios from 'axios';

export default function UserAddresses ({ userId }) {
    const [userAddresses, setUserAddresses] = useState([]);
  
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
  
  
    return (
      <div className='row gx-0'>
        {
          userAddresses.map((address, index) => (
            <div key={index} className='col-md-4'>
              <div className='me-md-2 p-4 rounded bg-light h-100'>
                <h2 className="text_secondary"> {address.address_name} </h2>
                <p> <span className="fw-bold"> Address : </span>{address.address_line_1} {address.address_line_2} </p>
                <div>
                  {
                    [
                      { label: 'Locality', value: address.locality },
                      { label: 'City', value: address.city },
                      { label: 'Pincode', value: address.pincode },
                      { label: 'State', value: address.state }
                    ].map((item, index) => (
                      <p key={index}>
                        <b> {item.label}: </b> {item.value}
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
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
  
    // useEffect(() => {
    //   console.log(userAddresses);
    // }, [userAddresses])
  
  
    return (
      <div className='gap-2'>
        {
          userAddresses.map((address, index) => (
            <div key={index} className='d-flex border p-3 rounded shadow'>
              <lord-icon
                src="https://cdn.lordicon.com/cnpvyndp.json"
                trigger="loop"
                colors="primary:#16c72e"
                style={{ width: "22px", height: "22px" }}>
              </lord-icon>
              <div className='ms-2'>
                <p className="text-k-secondary">{address.address_name} </p>
                <p className="text-k-text small">
                  <span className="fw-bold"> Address : </span>
                  <span> {address.address_line_1} {address.address_line_2} </span>
                </p>
                <div className='d-flex gap-3'>
                  {
                    [
                      { label: 'Locality', value: address.locality },
                      { label: 'City', value: address.city },
                      { label: 'Pincode', value: address.pincode },
                      { label: 'State', value: address.state }
                    ].map((item, index) => (
                      <p key={index} className="text-k-text small">
                        <span className="fw-bold"> {item.label} : </span>
                        <span> {item.value} </span>
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
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import VerifyOTPsec from './VerifyOTPsec';
import MobileNumsec from './MobileNumSec';
import axios from 'axios';
import { BASE_API_URL } from '../api';

export default function OtpLoginPopup(props) {
    const [number, setNumber] = useState("");
    const [Otp, setOtp] = useState("");
    const [numberVerified, setNumberVerified] = useState(false);
    const [otpMismatchText, setOtpMismatchText] = useState(false);
    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
      event.preventDefault();
      await axios.post(`${ BASE_API_URL }/otplogin`, { number })
      .then((res) => {
        if (res.data.Status === "OTP sent!") {
          setNumberVerified(true);
        } else{
          alert(res.data.Error);
          console.log(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
    };
  
    const handleOtpSubmit = async (event) => {
      event.preventDefault();
      await axios.post(`${ BASE_API_URL }/user/verify-otp`, {number, Otp})
      .then((res) => {
        if (res.data.Status === "Verified") {
          setTimeout(()=> {
            window.location.reload();
          }, 2000)
        } else {
          alert(res.data.Error);
          console.log(res.data.Error);
        }
      }).catch((err) => {
        if(err.response.status) setOtpMismatchText(true);
      })
    }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='p-0'>
        <div className="container popupsec d-flex justify-content-center align-items-stretch p-0 bg-light position-relative">
            <div className="w-50 loginpopupleftsec"></div>

            <div className="w-50 mh-100 p-5">
              {numberVerified ? 
                <VerifyOTPsec 
                  otpMismatchText={otpMismatchText} 
                  handleOtpSubmit={handleOtpSubmit} 
                  setOtp={setOtp} 
                /> : 
                <MobileNumsec 
                  handleSubmit={handleSubmit} 
                  number={number} 
                  setNumber={setNumber} 
                /> }
            </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
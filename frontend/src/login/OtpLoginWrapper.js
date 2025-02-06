import React, { useState, useEffect } from 'react';
import VerifyOTPsec from './VerifyOTPsec';
import MobileNumsec from './MobileNumSec';
import axios from 'axios';
import { BASE_API_URL } from '../api/index';
import { styled } from 'styled-components';

const OTP_EXPIRY_TIME = 120; // 2 minutes in seconds

export default function OtpLoginWrapper() {
    const [number, setNumber] = useState("");
    const [Otp, setOtp] = useState("");
    const [numberVerified, setNumberVerified] = useState(false);
    const [otpMismatchText, setOtpMismatchText] = useState(false);
    const [timer, setTimer] = useState(OTP_EXPIRY_TIME);

    useEffect(() => {
        let interval;
        if (numberVerified) {
            interval = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer === 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [numberVerified]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(number);
        try {
            const response = await axios.post(`${BASE_API_URL}/user/login-otp`, { number });
            console.log(response.data);
            if (response.data.Status === "OTP sent!") {
                setNumberVerified(true);
                setTimer(OTP_EXPIRY_TIME);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleOtpSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`${BASE_API_URL}/user/verify-otp`, { number, Otp })
            .then((res) => {
                if (res.data.Status === "Verified") {
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    alert(res.data.Error);
                    console.log(res.data.Error);
                }
            }).catch((err) => {
                if (err.response.status) setOtpMismatchText(true);
            });
    };

    const handleResendOtp = async () => {
        try {
            const response = await axios.post(`${BASE_API_URL}/user/login-otp`, { number });
            console.log(response.data);
            console.log(response.data);
            if (response.data.Status === "OTP sent!") {
                setTimer(OTP_EXPIRY_TIME);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapper className="row gx-3">
            <div className="col-md-6">
                <img src="/images/login_side_img.jpg" alt="login_side_img" className='login_side_img img-fluid border h-100 rounded object-fit-cover' />
            </div>
            <div className="col-md-6 p-md-5 p-4">
                {numberVerified ?
                    <VerifyOTPsec
                        otpMismatchText={otpMismatchText}
                        handleOtpSubmit={handleOtpSubmit}
                        setOtp={setOtp}
                        timer={timer}
                        handleResendOtp={handleResendOtp}
                    /> :
                    <MobileNumsec
                        handleSubmit={handleSubmit}
                        number={number}
                        setNumber={setNumber}
                    />}
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.div`

`
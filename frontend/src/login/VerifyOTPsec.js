import React from 'react'

export default function VerifyOTPsec({ handleOtpSubmit, otpMismatchText, setOtp, handleSubmit }) {
  return (
    <div>
      <div id='verifyOTPsec'>
        <h1>Verify OTP</h1>
        <p>Enter the 6-digit OTP received on your registered mobile number</p>
        <form onSubmit={handleOtpSubmit}>
          <div className="form-outline mb-2">
            <input type="text" name="otp" id="otp" className="form-control form-control-md my-3" placeholder="Enter OTP..." required onChange={e => setOtp(e.target.value)} />
            { otpMismatchText ? <p className='text-danger small'>OTP mismatched, Please try again</p> : "" }
            <input type="submit" className='btn btn-primary w-100' value="Verify" />
            <button type="button" className='btn btn-outline-secondary w-100 mt-2' onClick={handleSubmit}> Resend OTP</button>
          </div>
        </form>
      </div>
    </div>
  )
}

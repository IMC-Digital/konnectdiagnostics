import React from 'react'

export default function VerifyOTPsec({ handleOtpSubmit, otpMismatchText, setOtp, handleResendOtp, timer }) {
  return (
    <div>
      <div id='verifyOTPsec'>
        <h2 className='text-k-secondary'>Verify OTP</h2>
        <p>Enter the 6-digit OTP received on your registered mobile number</p>
        <form onSubmit={handleOtpSubmit}>
          <div className="form-outline mb-2">
            <input type="text" name="otp" id="otp" className="form-control form-control-md my-3" placeholder="Enter OTP..." required onChange={e => setOtp(e.target.value)} />
            {otpMismatchText ? <p className='text-danger small'>OTP mismatched, Please try again</p> : ""}
            {timer > 0 ? (
              <p className='text-k-text small'>Time remaining: {timer} seconds</p>
            ) : (
              <button type="button" className='btn btn-outline-secondary' onClick={handleResendOtp} disabled={timer > 0}> Resend OTP</button>
            )}
            <div className="d-flex justify-content-end gap-2">
              <button type="submit" className='btn btn-primary' disabled={timer === 0}> Verify </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

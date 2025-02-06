import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function VerifyOTPsec({ handleOtpSubmit, otpMismatchText, setOtp, handleResendOtp, timer }) {
  return (
    <div id="verifyOTPsec">
      <h2 className="text_primary text_secondary_clr" gutterBottom> Verify OTP </h2>
      <p> Enter the 6-digit OTP received on your registered mobile number </p>
      <form onSubmit={handleOtpSubmit}>
        <div className="form-outline mb-2">
          <TextField
            type="text"
            name="otp"
            id="otp"
            label="Enter OTP"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setOtp(e.target.value)}
            className="my-3"
          />
          {otpMismatchText && (
            <Typography variant="body2" color="error">
              OTP mismatched, Please try again
            </Typography>
          )}
          {timer > 0 ? (
            <Typography variant="body2" className="text-k-text small">
              Time remaining: {timer} seconds
            </Typography>
          ) : (
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={handleResendOtp}
              disabled={timer > 0}
              className="my-2"
            >
              Resend OTP
            </Button>
          )}
          <div className="d-flex justify-content-end gap-2">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={timer === 0}
            >
              Verify
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function MobileNumsec({ handleSubmit, number, setNumber }) {
  return (
    <div id="mobileNumsec">
      <h2 className="text_primary text_secondary_clr">Sign In / Sign Up</h2>
      <p className="text-k-text small">View your reports and upcoming health checkups at one place.</p>
      <form onSubmit={handleSubmit} className="my-3">
        <div className="form-outline mb-2">
          <TextField
            type="tel"
            name="mobnum"
            id="mobnum"
            label="Mobile Number"
            variant="outlined"
            fullWidth
            required
            placeholder="Enter Your Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
            helperText="An OTP will be sent on this number"
          />
        </div>
        <div className="text-center text-lg-start pt-2">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
          >
            Send OTP
          </Button>
        </div>
      </form>
      <p className="text-k-text small">By proceeding, you agree to Konnect Diagnostics T&C and Privacy Policy</p>
    </div>
  );
}

import React from 'react';

export default function MobileNumsec({ handleSubmit, number, setNumber }) {
    return (
      <div id='mobileNumsec'>
        <h1 className="text-k-secondary">Sign In / Sign Up</h1>
        <p className='text-k-text small'>View your reports and upcoming health checkups at one place.</p>
        <form onSubmit={handleSubmit} className='my-3'>
          <div className="form-outline mb-2">
            <input 
              type="tel" 
              name="mobnum" 
              id="mobnum"
              className="form-control form-control-md"
              placeholder="Enter Your Mobile Number"
              required
              onChange={e => setNumber(e.target.value )} 
          />
          <p className='small fw-bold'>An OTP will be sent on this number</p>
          </div>
          <div className="text-center text-lg-start pt-2">
            <button type="submit" className="btn btn-primary btn-md btn-block w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
              Send OTP
            </button>
          </div>
        </form>
        <p className='text-k-text small'>By proceeding, you agree to Konnect Diagnostics T&C and Privacy Policy</p>
      </div>
    )
  }

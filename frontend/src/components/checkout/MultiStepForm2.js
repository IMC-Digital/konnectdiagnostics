import React, { useState } from 'react';
import './MultiStepForm2.css';

const MultiStepForm2 = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handlePrevious = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    const getFieldsetStyle = (step) => {
        return {
            transform: `translateX(${(step - 1) * -100}%)`,
        };
    };

    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <form id="msform">
                    <ul id="progressbar">
                        <li className={activeStep === 1 ? 'active' : ''}>Personal Details</li>
                        <li className={activeStep === 2 ? 'active' : ''}>Social Profiles</li>
                        <li className={activeStep === 3 ? 'active' : ''}>Account Setup</li>
                    </ul>

                    <div className="fieldsets d-flex" style={getFieldsetStyle(activeStep)}>


                        <fieldset>
                            <h2 className="fs-title">Personal Details</h2>
                            <h3 className="fs-subtitle">Tell us something more about you</h3>
                            <input type="text" name="fname" placeholder="First Name" />
                            <input type="text" name="lname" placeholder="Last Name" />
                            <input type="text" name="phone" placeholder="Phone" />
                            <button type="button" className="next action-button" onClick={() => { handleNext() }}> Next </button>
                        </fieldset>
                        <fieldset>
                            <h2 className="fs-title">Social Profiles</h2>
                            <h3 className="fs-subtitle">Your presence on the social network</h3>
                            <input type="text" name="twitter" placeholder="Twitter" />
                            <input type="text" name="facebook" placeholder="Facebook" />
                            <input type="text" name="gplus" placeholder="Google Plus" />
                            <button type="button" className="previous action-button-previous" onClick={() => { handlePrevious() }}> Back </button>
                            <button type="button" className="next action-button" onClick={() => { handleNext() }}> Next </button>
                        </fieldset>

                        <fieldset>
                            <h2 className="fs-title">Create your account</h2>
                            <h3 className="fs-subtitle">Fill in your credentials</h3>
                            <input type="text" name="email" placeholder="Email" />
                            <input type="password" name="pass" placeholder="Password" />
                            <input type="password" name="cpass" placeholder="Confirm Password" />
                            <button type="button" className="previous action-button-previous" onClick={() => { handlePrevious() }}> Back </button>
                            <button type="button" className="submit action-button" onClick={() => { handleSubmit() }}> Submit </button>
                        </fieldset>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default MultiStepForm2;

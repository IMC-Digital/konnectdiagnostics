import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Information</h2>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type='button' onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Contact Information</h2>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type='button' onClick={prevStep}>Back</button>
            <button type='button' onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Review and Submit</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
            <button type='button' onClick={prevStep}>Back</button>
            <button type='button' onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {renderForm()}
    </form>
  );
};

export default MultiStepForm;

import axios from 'axios';
import React, { useState } from 'react';
import { styled } from "styled-components";
import { BASE_API_URL } from '../api';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const ProfileForm = ({ userId }) => {
  axios.defaults.withCredentials = true;

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    alternateMobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileSubmit(formData);
    console.log(userId);
    console.log(formData);
  };

  const handleProfileSubmit = async () => {
    try {
      const response = await axios.post(`${BASE_API_URL}/profile/${userId}`, formData);
      if (response.data) {
        window.location.reload();
        console.log("profileAdded");
      }
    } catch (err) {
      console.error("error:", err);
    }
  };

  return (
    <Wrapper>
      <article className='container mx-auto p-4'>
        <div className='bg-light'>
          <h2>Create Your Profile</h2>
        </div>
        <hr />
        <div className=''>
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="fullName"
              label="Full Name"
              className="mb-3"
            >
              <Form.Control type='text' name='fullName' value={formData.fullName} onChange={handleChange} className='form-control' required placeholder="name@example.com" />
            </FloatingLabel>

            <Form.Group className='d-flex'>
              <Form.Label className='form-label me-2'>Gender:</Form.Label>
              <div className='d-flex gap-2'>
                <Form.Check
                  type='radio'
                  id='male'
                  name='gender'
                  value='Male'
                  onChange={handleChange}
                  label='Male'
                  required
                />
                <Form.Check
                  type='radio'
                  id='female'
                  name='gender'
                  value='Female'
                  onChange={handleChange}
                  label='Female'
                  required
                />
                <Form.Check
                  type='radio'
                  id='others'
                  name='gender'
                  value='Others'
                  onChange={handleChange}
                  label='Others'
                  required
                />
              </div>
            </Form.Group>

            <FloatingLabel
              controlId="dateOfBirth"
              label="Data Of Birth"
              className="mb-3"
            >
              <Form.Control type='date' name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange} className='form-control' required placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="email"
              label="Email"
              className="mb-3"
            >
              <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} className='form-control' required placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="alternateMobile"
              label="Alternative Mobile Number"
              className="mb-3"
            >
              <Form.Control type='tel' name='alternateMobile' value={formData.alternateMobile} onChange={handleChange} className='form-control' required placeholder="Alternative Mobile Number" />
            </FloatingLabel>

            <button type='submit' className='btn btn-primary'>Create Profile</button>
          </form>
        </div>
      </article>
    </Wrapper>
  );
};

export default ProfileForm;

const Wrapper = styled.section`
${'' /* .ff-group{
  position: relative
}
.inputText {
  font-size: 14px;
  width: 200px;
  height: 35px;
}
input:focus + .floating-label{;
  background: #F6F9FC;
}
input:focus{
  borde: none;
  box-shadow: none;
  background: #F6F9FC;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  padding: 2px 5px;
  background: white;
  transition: 0.2s ease all;
  top: -12px;
  font-size: 14px;
  font-weight: 600;
} */}

label{
  font-size: 16px;
  font-weight: 00;
}

`



import React, { useState } from 'react';
import axios from 'axios';
import { styled } from "styled-components";
import { TextField, Radio, RadioGroup, FormControlLabel, FormLabel, Button, Box } from '@mui/material';
import { BASE_API_URL } from '../api';

const ProfileUpdate = ({ userId, profileData, setProfileData }) => {
  const [formData, setFormData] = useState({
    fullName: profileData.fullname,
    dateOfBirth: profileData.date_of_birth,
    gender: profileData.gender,
    email: profileData.email,
    alternateMobile: profileData.alternate_mobile_number,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_API_URL}/updateprofile/${userId}`, formData);
      if (response.data.profileUpdated) {
        alert('Profile Updated successfully');
        setTimeout(() => {
          window.location.replace('/profile');
        }, 500);
      } else {
        console.log(response.data.error);
      }
    } catch (err) {
      console.error('Axios error:', err);
    }
  };

  return (
    <Wrapper className='border rounded-4 overflow-hidden'>
        <h2 className="text_primary bg-light px-3 py-4 rounded"> Create Your Profile </h2>
        
        <Box px={4} py={4}>
          <form onSubmit={handleProfileUpdate}>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <FormLabel component="legend">Gender:</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Others" control={<Radio />} label="Others" />
              </RadioGroup>
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Alternate Mobile Number"
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleChange}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Update Profile
              </Button>
            </Box>
          </form>
        </Box>
    </Wrapper>
  );
};

export default ProfileUpdate;

const Wrapper = styled.section`
  width: 750px;
  margin: 35px auto;
  borderRadius: 10px;
  backgroundSize: 500px;
  backgroundPosition: center center;
  backgroundRepeat: no-repeat;

  @media only screen and (max-width: 600px){
    width: 350px;
  }
`

import React from 'react';
// import ProfileForm from './ProfileForm';
import UserProfile from './UserProfile';
import { styled } from "styled-components";

const Profile = ({ userId, auth, profileData, showProfileForm, setShowProfileForm, setProfileData }) => {
  return (
    <Wrapper className='container p-5'>
      <div className="d-flex-cc">
        <UserProfile profileData={profileData} />
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
`
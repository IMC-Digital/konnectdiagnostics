import React from 'react';
// import ProfileForm from './ProfileForm';
import UserProfile from './UserProfile';

const Profile = ({ userId, auth, profileData, showProfileForm, setShowProfileForm, setProfileData }) => {
  return (
    <div className='container mx-auto px-md-0 px-3 py-md-5 py-2'>
      {profileData && <UserProfile profileData={profileData} />}
    </div>
  );
};

export default Profile;
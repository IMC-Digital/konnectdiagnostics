import { styled } from "styled-components";
import ListGroup from 'react-bootstrap/ListGroup';
import UserAddresses from "./UserAddresses";

const UserProfile = ({ profileData }) => {

  function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  return (
    <Wrapper className="border rounded-4 p-4 overflow-hidden">
        <h2 className="text_primary p-4 bg-light rounded-4">User Profile</h2>
        <div className='d-md-flex gap-3 py-4'>
          <img className='img-fluid UserIconImg me-3 rounded-3' src="/images/UserIconImg.jpg" alt="UserIconImg" />
          <div>
            <h2 className="text_secondary fw-bold">{profileData.fullname}</h2>
            <p> <strong>Age :</strong> {calculateAge(profileData.date_of_birth)} - {profileData.gender} </p>
            <ListGroup as="ul">
              <ListGroup.Item className='p-0 px-3 py-1' as="li"> <p className='mb-0'> <span className='fw-bold'>Email :</span> {profileData.email} </p> </ListGroup.Item>
              <ListGroup.Item className='p-0 px-3 py-1' as="li"> <p className='mb-0'> <span className='fw-bold'>Mobile Number :</span> {profileData.mobile_number} </p> </ListGroup.Item>
              <ListGroup.Item className='p-0 px-3 py-1' as="li"> <p className='mb-0'> <span className='fw-bold'>Alternate Mobile Number :</span> {profileData.alternate_mobile_number} </p> </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="border-top py-md-5 py-4">
          <h2 className="text_accent">Addresses added</h2>
          <UserAddresses userId={profileData.user_id} />
        </div>
    </Wrapper>
  );
};
export default UserProfile;

const Wrapper = styled.section`
  .UserIconImg{ width: 180px;}

  @media only screen and(max-width: 600px){
    .UserIconImg{ width: 150px; }
  }
`

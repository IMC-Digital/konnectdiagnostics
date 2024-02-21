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
    <Wrapper>
      <div className='mx-auto'>
        {profileData && (
          <article className='mx-auto p-0 rounded overflow-hidden'>
            <div className='p-4 py-4 bg-light'>
              <h2>User Profile</h2>
            </div>
            <div className='d-flex p-2'>
              <div className="w-25">
                <img className='img-fluid' style={{ width: "200px" }} src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1696243855~exp=1696244455~hmac=864a53a5e882db94836225b4739dc0049618d5cdbf66eb5256a7d068a40f4875" alt="" />
              </div>
              <div className="w-75 ps-5">
                <div className='d-flex justify-content-between'>
                  <div className=''>
                    <h1 className="text-start fw-bold mb-0">{profileData.fullname}</h1>
                    <p> <strong>Age :</strong> {calculateAge(profileData.date_of_birth)} - {profileData.gender} </p>
                  </div>
                </div>

                <div className='border-top'>
                  <ListGroup as="ul">
                    <ListGroup.Item className='p-0 px-3 py-1' as="li"> <p className='mb-0'> <span className='fw-bold'>Email :</span> {profileData.email} </p> </ListGroup.Item>
                    <ListGroup.Item className='p-0 px-3 py-1' as="li"> <p className='mb-0'> <span className='fw-bold'>Mobile Number :</span> {profileData.mobile_number} </p> </ListGroup.Item>
                    <ListGroup.Item className='p-0 px-3 py-1' as="li"> <p className='mb-0'> <span className='fw-bold'>Alternate Mobile Number :</span> {profileData.alternate_mobile_number} </p> </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>

            <div className="p-4 border-top">
              <h2 className="text-k-secondary">Addresses added</h2>
              <UserAddresses userId={profileData.user_id} />
            </div>
          </article>
        )}
      </div>
    </Wrapper>
  );
};
export default UserProfile;

const Wrapper = styled.section`
article{
    margin: auto;
    background-image: 'url("/project-konnect/images/k-10.png")';
    background-size: "500px";
    background-position: "center center";
    background-repeat: "no-repeat";
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    border-radius: 10px;
}
`

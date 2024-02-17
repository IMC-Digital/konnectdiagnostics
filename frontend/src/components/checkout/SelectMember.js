import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../../api';

const SelectMember = ({ userId, cart, profileData, setCart, setShowAddNewMemberPopup }) => {
  const [userMembers, setUserMembers] = useState([]);

  useEffect(() => {
    const fetchUserMember = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/user/get-members`, { params: { userid: userId } });
        setUserMembers(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserMember();
  }, [userId]);

  const handleCheckboxChange = (productName, memberName) => {
    const updatedCart = cart.map((item) => {
      if (item.test_name === productName) {
        const selectedMembers = item.selectedMembers || [];
        const memberIndex = selectedMembers.indexOf(memberName);
  
        if (memberIndex === -1) {
          selectedMembers.push(memberName);
        } else {
          selectedMembers.splice(memberIndex, 1);
        }
        return {
          ...item,
          selectedMembers,
        };
      }
  
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <h2 className="text-k-secondary mb-0">Select Member for Selected Test</h2>
        <button
          className="btn btn-outline-secondary btn-sm"
          style={{ width: "200px" }}
          onClick={() => setShowAddNewMemberPopup(true)}
        >
          Add New Member +
        </button>
      </div>
      <hr />
      <form>
        {cart.map((product, questionIndex) => (
          <div key={product.product_id} className="mb-3 border-bottom">
            <h5 className="text-k-accent">{product.test_name}</h5>

            <div className="d-flex ">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`option${profileData.profile_id}${questionIndex}`}
                  checked={memSelData[questionIndex].includes(profileData.fullname)}
                  onChange={() => handleCheckboxChange(questionIndex, profileData.fullname)}
                  required
                  aria-labelledby={`label${profileData.profile_id}${questionIndex}`}
                />
                <label className="form-check-label" htmlFor={`option${profileData.profile_id}${questionIndex}`} id={`label${profileData.profile_id}${questionIndex}`}>
                  <div className="d-flex p-3 rounded" style={{ width: "200px", marginLeft: "-25px", zIndex: "0" }}>
                    <div className="mb-2">
                      <img src={`./images/icons/${profileData.gender}.svg`} alt="male" className="me-3" style={{ width: "35px" }} />
                    </div>
                    <div>
                      <h2 className="text-k-text mb-0">{profileData.fullname}</h2>
                      <p className="small text-muted fw-bold mb-0">Self</p>
                    </div>
                  </div>
                </label>
              </div>
              {userMembers.map((member, optionIndex) => (
                <div className="form-check" key={member.member_id}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`option${member.member_id}${questionIndex}`}
                    checked={memSelData[questionIndex].includes(member.fullname)}
                    onChange={() => handleCheckboxChange(questionIndex, member.fullname)}
                    required
                    aria-labelledby={`label${member.member_id}${questionIndex}`}
                  />
                  <label className="form-check-label" htmlFor={`option${member.member_id}${questionIndex}`} id={`label${member.member_id}${questionIndex}`}>
                    <div className="d-flex p-3 rounded" style={{ width: "200px", marginLeft: "-25px", zIndex: "0" }}>
                      <div className="mb-2">
                        <img src={`./images/icons/${member.gender}.svg`} alt="male" className="me-3" style={{ width: "35px" }} />
                      </div>
                      <div>
                        <h2 className="text-k-text mb-0">{member.fullname}</h2>
                        <p className="small text-muted fw-bold mb-0">{member.relation}</p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectMember;

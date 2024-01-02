// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import { BASE_API_URL } from "../../api";

// export default function SelectMember({ userId, cart, profileData, setCart, setShowAddNewMemberPopup }) {
//   const [userMembers, setUserMembers] = useState([])

//   useEffect(() => {
//     const fetchUserMember = async () => {
//       try {
//         const response = await axios.get(`${BASE_API_URL}/user/get-members`, { params: { userid: userId } });
//         console.log(response.data.response);
//         setUserMembers(response.data.response)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchUserMember();
//   }, [userId])

//   return (
//     <div className='mt-5'>
//       <div className='d-flex justify-content-between'>
//         <h2 className="text-k-secondary mb-0"> Select Member for Selected Test </h2>
//         <button
//           className='btn btn-outline-secondary btn-sm'
//           style={{ width: "200px" }}
//           onClick={() => { setShowAddNewMemberPopup(true) }}
//         >Add New Member +</button>
//       </div>
//       <hr />
//       <Form>
//         {
//           cart.map((item) => (
//             <div className="mb-3 p-4 shadow-sm rounded">
//               <h2 className='text-k-accent'>{item.product_name}</h2>
//               <div className='d-flex flex-wrap align-items-start'>

//                 <Form.Check
//                   inline
//                   label={
//                     // <UserMemLabel userData={profileData} />
//                     <div className='bg-light p-3 rounded shadow-sm' style={{ width: "150px" }}>
//                       <div>
//                         <img src="./images/icons/Male.svg" alt="male" className='me-3' style={{ width: "40px" }} />
//                       </div>
//                       <div>
//                         <h2 className="text-k-text mb-0">
//                           {profileData.fullname}
//                         </h2>
//                         <p className="small text-muted fw-bold mb-0"> Self </p>
//                       </div>
//                     </div>
//                   }
//                   name={`group-${item.product_name.toLowerCase().replace(/\s/g, "-")}`}
//                   type='checkbox'
//                   id={`inline-checkbox-${item.product_name.toLowerCase().replace(/\s/g, "-")}-user`}
//                 />
//                 {
//                   userMembers.map((member) => (
//                     <>
//                       <Form.Check
//                         inline
//                         label={
//                           // <UserMemLabel userData={member} />
//                           <div className='bg-white p-3 rounded shadow-sm' style={{ width: "150px" }}>
//                             <div>
//                               <img src="./images/icons/Male.svg" alt="male" className='me-3' style={{ width: "40px" }} />
//                             </div>
//                             <div>
//                               <h2 className="text-k-text mb-0">
//                                 {member.fullname}
//                               </h2>
//                               <p className="small text-muted fw-bold mb-0"> {member.relation} </p>
//                             </div>
//                           </div>
//                         }
//                         name={`group-${item.product_name.toLowerCase().replace(/\s/g, "-")}`}
//                         type="checkbox"
//                         id={`inline-checkbox-${member.fullname.toLowerCase().replace(/\s/g, "-")}-${item.product_name.toLowerCase().replace(/\s/g, "-")}`}
//                       />
//                     </>
//                   ))
//                 }
//               </div>
//             </div>
//           ))
//         }
//       </Form>

//     </div>
//   )
// }



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
    // Find the corresponding item in the cart
    const updatedCart = cart.map((item) => {
      if (item.product_name === productName) {
        // Find the member in the item's selectedMembers array
        const selectedMembers = item.selectedMembers || [];
        const memberIndex = selectedMembers.indexOf(memberName);
  
        if (memberIndex === -1) {
          // If member not found, add to the selected members
          selectedMembers.push(memberName);
        } else {
          // If member found, remove from the selected members
          selectedMembers.splice(memberIndex, 1);
        }
  
        // Update the selectedMembers array for the item
        return {
          ...item,
          selectedMembers,
        };
      }
  
      return item;
    });
  
    // Update the cart state with the modified cart
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
      <Form>
        {cart.map((item) => (
          <div key={item.product_name} className="mb-3 p-4 shadow-sm rounded">
            <h2 className="text-k-accent">{item.product_name}</h2>
            <div className="d-flex flex-wrap align-items-start">
              <Form.Check
                inline
                label={
                  <div className="bg-light p-3 rounded shadow-sm" style={{ width: "150px" }}>
                    <div className='mb-2'>
                      <img src={`./images/icons/${profileData.gender}.svg`} alt="male" className="me-3" style={{ width: "40px" }} />
                    </div>
                    <div>
                      <h2 className="text-k-text mb-0">{profileData.fullname}</h2>
                      <p className="small text-muted fw-bold mb-0">Self</p>
                    </div>
                  </div>
                }
                name={`group-${item.product_name.toLowerCase().replace(/\s/g, "-")}`}
                type="checkbox"
                id={`inline-checkbox-${item.product_name.toLowerCase().replace(/\s/g, "-")}-user`}
                defaultChecked // Default checked for "Self"
                onChange={() => handleCheckboxChange(item.product_name, profileData.fullname)}
              />

              {userMembers.map((member) => (
                <Form.Check
                  key={member.fullname}
                  inline
                  label={
                    <div className="bg-white p-3 rounded shadow-sm" style={{ width: "150px" }}>
                      <div className='mb-2'>
                        <img src={`./images/icons/${member.gender}.svg`} alt="male" className="me-3" style={{ width: "40px" }} />
                      </div>
                      <div>
                        <h2 className="text-k-text mb-0">{member.fullname}</h2>
                        <p className="small text-muted fw-bold mb-0">{member.relation}</p>
                      </div>
                    </div>
                  }
                  name={`group-${item.product_name.toLowerCase().replace(/\s/g, "-")}`}
                  type="checkbox"
                  id={`inline-checkbox-${member.fullname.toLowerCase().replace(/\s/g, "-")}-${item.product_name.toLowerCase().replace(/\s/g, "-")}`}
                  onChange={() => handleCheckboxChange(item.product_name, member.fullname)}
                />
              ))}
            </div>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default SelectMember;

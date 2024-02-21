import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { BASE_API_URL } from "../api";

const AddNewMemberForm = ({ cart, setCart, userId, setShowAddNewMemberPopup }) => {
  const [formData, setFormData] = useState({
    userId: userId,
    personTitle: 'Mr.',
    fullName: '',
    date_of_birth: '',
    gender: '',
    relationship: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASE_API_URL}/user/add-new-member`, formData)
      .then((response) => {
        console.log("Member added to db", response.data);
        setShowSuccessMessage(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }).catch((error) => {
        console.log(error);
      })
  };

  return (
    <div className='p-4'>
      <h3 className='text-k-secondary'>Add New Member</h3>
      <hr />
      {!showSuccessMessage && (
        <Form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className='d-flex'>
            <div className="form-group w-25">
              <Form.Label htmlFor="personTitle" className='text-k-accent'>Title</Form.Label>
              <DropdownButton
                variant="outline-secondary"
                id="personTitle"
                title={formData.personTitle}
                required
              >
                {["Mr.", "Mrs.", "Master.", "Baby.", "Baby Of.", "Baby Boy.", "Baby Girl.", "Dr.", "Prof.", "Captain."].map((e) => (
                  <Dropdown.Item key={e} onClick={() => handleChange({ target: { id: 'personTitle', value: e } })}>
                    {e}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>

            <div className="form-group w-75">
              <Form.Label htmlFor="fullName" className='text-k-accent'>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="form-group">
            <Form.Label htmlFor="date_of_birth" className='text-k-accent'>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              id="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group" id="formGender">
            <Form.Label className='text-k-accent'>Gender</Form.Label>
            <div className='d-flex'>
              {["Male", "Female", "Other"].map((e) => (
                <div key={e} className="form-check rounded shadow-sm me-2 py-1 px-3">
                  <Form.Check
                    type="radio"
                    name="gender"
                    id={e}
                    label={e}
                    onChange={() => handleChange({ target: { id: 'gender', value: e } })}
                    required
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="form-group">
            <Form.Label htmlFor="relationship" className='text-k-accent'>Relationship</Form.Label>
            <Form.Control
              as="select"
              id="relationship"
              value={formData.relationship}
              onChange={handleChange}
              required
            >
              {["Father", "Mother", "Spouse", "Daughter", "Son", "Mother-in-law", "Father-in-law", "Sibling", "Grandmother"].map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </Form.Control>
          </div>
        </div>
          <Button type="submit" variant="primary" className='btn btn-k-primary w-100'>Submit</Button>
        </Form>
      )}
      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          New member has been added.
        </div>
      )}
    </div>
  )
}

export default AddNewMemberForm;

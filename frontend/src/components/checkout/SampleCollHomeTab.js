import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SampleCollHomeTab({ setShowAddNewAddressPopup }) {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
            <p className='mb-0'> Select Your Address </p>
            <button className='btn btn-outline-secondary btn-sm' onClick={() => {setShowAddNewAddressPopup(true)}}>Add New Address +</button>
        </div>
        <div>
            <Form.Select aria-label="Default select example">
              <option value="1">Home Address</option>
              <option value="2">Office Address</option>
              <option value="3">Other Address</option>
            </Form.Select>
        </div>
        <div>
            <p>Balaji Santosh Dhaba, Pantaloons, Begumpet, Hyderabad, Telangana, 500016</p>
            <div className='d-flex justify-content-between'>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Alternative Mobile Number : </InputGroup.Text>
                  <Form.Control
                    placeholder="Alternative Mobile Number"
                    aria-label="Alternative Mobile Number"
                    aria-describedby="basic-addon1"
                    value="8328298769"
                  />
                </InputGroup>
            </div>
            <p className="small"> <strong>Note:</strong> Home collection charges will be applicable.</p>
        </div>
    </div>
  )
}

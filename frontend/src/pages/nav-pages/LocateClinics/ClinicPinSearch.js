import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function ClinicPinSearch({ handlePinCodeSearch, pinSearchTerm, setPinSearchTerm }) {
  return (
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Pincode ex. 500016"
          aria-label="Pincode"
          value={pinSearchTerm} 
          onChange={(e) => { setPinSearchTerm(e.target.value) }}
        />
        <Button 
          type="button"
          variant="outline-secondary"
          onClick={handlePinCodeSearch}
          >
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
  );
}

export default ClinicPinSearch;

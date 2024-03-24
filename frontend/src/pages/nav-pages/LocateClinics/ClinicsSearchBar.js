import React, { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api'; 

function ClinicSearchBar({ setClinicsdata }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchInpStyle = {
    borderRadius: "5px",
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/clinics/search?q=${searchTerm}`);
      setClinicsdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex">
      <div className="form-outline w-100">
        <input 
          type="text" 
          className="clinicsearchinp form-control" 
          style={searchInpStyle} 
          placeholder='Search City / Area / Clinic Name...'
          value={searchTerm} 
          onChange={(e) => {handleSearch(); setSearchTerm(e.target.value)}}
        />
      </div>
    </div>
  );
}

export default ClinicSearchBar;

import React, { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api';

function ClinicSearchBar({ setClinicsdata }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/clinics/search?q=${searchTerm}`);
      setClinicsdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-outline">
      <input
        type="text"
        className="clinicsearchinp form-control w-100 areaField"
        placeholder='Search City / Area / Clinic Name...'
        value={searchTerm}
        onChange={(e) => { handleSearch(); setSearchTerm(e.target.value) }}
      />
    </div>
  );
}

export default ClinicSearchBar;

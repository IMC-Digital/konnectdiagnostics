import React, { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../api';

function SearchBar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchInpStyle = {
    borderRadius: "5px 0 0 5px",
    border: "2px solid #005BAB"
  }
  const searchBtnStyle = {
    width: "50px",
    Padding: "0 5px",
    background: "#005BAB",
    border: "1px solid #005BAB",
    borderRadius: "0 5px 5px 0"
  }

  const handleSearch = async () => {
    try {
      // const response = await axios.get(`${BASE_API_URL}/search?q=${searchTerm}`);
      const response = await axios.get(`${BASE_API_URL}/tests/search/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-100 me-3'>
      <div className="d-flex mb-2 w-100">
        <div className="form-outline w-100">
          <input 
            type="text" id="form1" className="form-control" style={searchInpStyle} placeholder='Search...'
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary btn-sm text-white" style={searchBtnStyle} onClick={handleSearch}>
          <i className="fas fa-search text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

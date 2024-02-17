import React, { useState } from 'react';
import { styled } from "styled-components";
import axios from 'axios';
import BASE_API_URL from '../api/index';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

function TestsSearchBar({ packageTests, packageId, getTests }) {
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    const searchTermValue = e.target.value;
    setSearchTerm(searchTermValue);

    try {
      const response = await axios.get(`${BASE_API_URL}/admin/get-tests`, { params: { searchTerm: searchTerm } });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTestToPackage = async (testId) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/admin/add-test-into-package`, { params: { packageId, testId } });
      console.log(response.status);
      getTests(packageId)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Wrapper>
      <div className="d-flex mb-2 w-100">
        <FloatingLabel
          controlId="searchinput"
          placeholder="search..."
          label="Search test to add"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
          className="mb-3 w-100"
        >
          <Form.Control
            type="text"
            className='w-100'
            placeholder="Search test to add"
            value={searchTerm}
            onChange={(e) => handleSearch(e)} />
        </FloatingLabel>

      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Price</th>
            <th>Sample Type</th>
            <th>Fasting</th>
            <th>TAT</th>
            <th data-bs-toggle="tooltip" title="Pre-test Preparation">PTP</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchResults.slice(0, 5).map((result) => {
            const isTestInPackage = packageTests.some(test => test.test_id === result.test_id);
            return (
              <tr key={result.test_id}>
                <td>{result.test_name}</td>
                <td>{result.price}</td>
                <td>{result.sample_type}</td>
                <td>{result.fasting}</td>
                <td>{result.tat}</td>
                <td>{result.pre_test_preparation}</td>
                <td>
                  <button
                    className={`btn btn-sm ${isTestInPackage ? 'btn-secondary' : 'btn-primary'}`}
                    disabled={isTestInPackage}
                    onClick={() => handleAddTestToPackage(result.test_id)}
                  >
                    {isTestInPackage ? ( <span> Added </span> ) : ( <span> Add <i className="fa-solid fa-plus text-white"></i> </span> )}
                  </button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default TestsSearchBar;

const Wrapper = styled.div`

`

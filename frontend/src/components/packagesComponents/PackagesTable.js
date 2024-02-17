import React from 'react';
import { styled } from 'styled-components';

const PackagesTable = () => {
  return (
    <Wrapper>
      <table className="striped-table">
        <thead>
          <tr>
            <th className="first-property">Property A</th>
            <th>Basic</th>
            <th>Executive</th>
            <th className="last-property">Advanced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-property">A1</td>
            <td><i className="fa fa-check"></i></td>
            <td><i className="fa fa-check"></i></td>
            <td><i className="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>B2</td>
            <td><i className="fa fa-check"></i></td>
            <td><i className="fa fa-check"></i></td>
            <td><i className="fa fa-check"></i></td>
          </tr>
          {/* Repeat for remaining rows */}
          <tr>
            <td className="last-property">M20</td>
            <td><i className="fa fa-times"></i></td>
            <td><i className="fa fa-times"></i></td>
            <td><i className="fa fa-check"></i></td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default PackagesTable;

const Wrapper = styled.section`
  .striped-table {
    border-collapse: collapse;
    width: 100%;
  }

  .striped-table th,
  .striped-table td {
    border: none;
    padding: 8px;
  }

  .striped-table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  .striped-table tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  .first-property {
    border-top-left-radius: 10px;
  }

  .last-property {
    border-bottom-left-radius: 10px;
  }

  .striped-table th:first-child,
  .striped-table td:first-child {
    border-top-right-radius: 10px;
  }

  .striped-table td:last-child {
    border-bottom-right-radius: 10px;
  }

  .basic-column,
  .executive-column,
  .advanced-column {
    text-align: center;
  }

  .basic-column {
    box-shadow: -5px 0px 5px -5px rgba(0, 0, 0, 0.75);
  }

  .executive-column {
    box-shadow: -5px 0px 5px -5px rgba(0, 0, 0, 0.75);
  }

  .advanced-column {
    box-shadow: -5px 0px 5px -5px rgba(0, 0, 0, 0.75);
  }
`;

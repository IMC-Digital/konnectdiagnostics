import React from 'react';

const MemberTestsTable = ({ selectedTests, selectedMembers }) => {
  let tableRows = [];
  let totalTestPrice = 0;

  selectedTests.forEach((test, index) => {
    selectedMembers[index].forEach((member) => {
      const price = test.price;
      totalTestPrice += price;

      tableRows.push(
        <tr key={`${test.product_name}-${member}`}>
          <td>{test.product_name}</td>
          <td>{member}</td>
          <td>&#8377; {price}</td>
        </tr>
      );
    });
  });

  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Member Name</th>
            <th>Test Price</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="text-right fw-bold">Total:</td>
            <td className='fw-bold'>{totalTestPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MemberTestsTable;

import React from 'react';

const MemberTestsTable = ({ selectedProducts, selectedMembers }) => {
  let tableRows = [];
  let totalTestPrice = 0;

  selectedProducts.forEach((product, index) => {
    selectedMembers[index].forEach((member) => {
      const name = product.type === "test" ? product.test_name : product.package_name;
      const price = product.price;
      totalTestPrice += price;

      tableRows.push(
        <tr key={`${name}-${member}`}>
          <td>{name}</td>
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
            <td className='fw-bold'>&#8377; {totalTestPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MemberTestsTable;

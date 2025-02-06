// import React from 'react';
// import { styled } from "styled-components";

// export default function PackageInfoTestsTable({ packageTests }) {
    
//     return (
//         <Wrapper>
//             <table className="table table-striped table-hover">
//                 <thead>
//                     <tr>
//                         <th className='small' scope="col">#</th>
//                         <th className='small' scope="col">Test Name</th>
//                         <th className='small' scope="col">Price</th>
//                         <th className='small' scope="col">Sample Type</th>
//                         <th className='small' scope="col">Fasting</th>
//                         <th className='small' scope="col" data-bs-toggle="tooltip" title="Pre-test Preparation">PTP</th>
//                         <th className='small' scope="col">Frequency</th>
//                     </tr>
//                 </thead>
//                 <tbody className='table-group-divider'>
//                     {
//                         packageTests.map((item, index) => (
//                             <tr key={index}>
//                                 <th className='small' scope="row"> {index + 1} </th>
//                                 <td className='small'> {item.test_name} </td>
//                                 <td className='small'> &#8377; {item.price} </td>
//                                 <td className='small'> {item.sample_type} </td>
//                                 <td className='small'> {item.fasting} </td>
//                                 <td className='small'> {item.pre_test_preparation} </td>
//                                 <td className='small'> {item.frequency} </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </Wrapper>
//     )
// }

// const Wrapper = styled.section``;


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: '"Archivo", sans-serif',
},
[`&.${tableCellClasses.body}`]: {
    fontFamily: '"Archivo", sans-serif',
    textWrap: "nowrap",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function PackageInfoTestsTable({ packageTests }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left"> Test Name </StyledTableCell>
            <StyledTableCell align="right"> Price </StyledTableCell>
            <StyledTableCell align="right"> Sample Type </StyledTableCell>
            <StyledTableCell align="right"> Fasting </StyledTableCell>
            <StyledTableCell align="right" data-bs-toggle="tooltip" title="Pre-test Preparation"> PTP </StyledTableCell>
            <StyledTableCell align="right"> Frequency </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packageTests.map((item, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell align="left"> {idx + 1} </StyledTableCell>
              <StyledTableCell component="th" scope="row"> {item.test_name} </StyledTableCell>
              <StyledTableCell align="right"> &#8377; {item.price} </StyledTableCell>
              <StyledTableCell align="right"> {item.sample_type} </StyledTableCell>
              <StyledTableCell align="right"> {item.fasting} </StyledTableCell>
              <StyledTableCell align="right"> {item.pre_test_preparation} </StyledTableCell>
              <StyledTableCell align="right"> {item.frequency} </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

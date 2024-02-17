import React from 'react';
import { styled } from "styled-components";

export default function PackageInfoTestsTable({ packageTests }) {
    
    return (
        <Wrapper>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th className='small' scope="col">#</th>
                        <th className='small' scope="col">Test Name</th>
                        <th className='small' scope="col">Price</th>
                        <th className='small' scope="col">Sample Type</th>
                        <th className='small' scope="col">Fasting</th>
                        <th className='small' scope="col" data-bs-toggle="tooltip" title="Pre-test Preparation">PTP</th>
                        <th className='small' scope="col">Frequency</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {
                        packageTests.map((item, index) => (
                            <tr key={index}>
                                <th className='small' scope="row"> {index + 1} </th>
                                <td className='small'> {item.test_name} </td>
                                <td className='small'> &#8377; {item.price} </td>
                                <td className='small'> {item.sample_type} </td>
                                <td className='small'> {item.fasting} </td>
                                <td className='small'> {item.pre_test_preparation} </td>
                                <td className='small'> {item.frequency} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Wrapper>
    )
}

const Wrapper = styled.section`
table{

} 
`
import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import TestsTable from './TestsTable';
import axios from 'axios';
import BASE_API_URL from '../api/index';

export default function Tests() {
    const [testsData, setTestsData] = useState([])

    useEffect(() => {
        const getAllTests = async () => {
            try{
                const response = await axios.get(`${BASE_API_URL}/admin/get-all-tests`);
                setTestsData(response.data);
            }catch(error){
                console.log(error);
            }
        }
        getAllTests();
    }, [setTestsData])

    return (
        <Wrapper>
            <h2 className="text-k-secondary">Tests</h2>
            <p className="small"> {testsData && testsData.length} Tests found</p>

            <TestsTable testsData={testsData} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
`

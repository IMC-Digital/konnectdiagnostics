import axios from 'axios';
import React, { useEffect } from 'react';
import BASE_API_URL from '../../api/index';
import styled from "styled-components";

export default function PackageTestsGrid({ setPackageTests, packageTests, packageId }) {

    useEffect(() => {
        const getTests = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/tests/package/${packageId}`);
                setPackageTests(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getTests();
    }, [packageId, setPackageTests]);

    return (
        <Wrapper>
            {packageTests.slice(0, 5).map((item, index) => (
                <p key={index} className="small bg-light rounded px-3">{item.test_name}</p>
            ))}

            {packageTests.length > 7 && (
                <p className="small fw-bold text-k-clr-secondary">{packageTests.length - 5} More &gt;&gt;</p>
            )}
        </Wrapper>

    )
}

const Wrapper = styled.section`
p{
    font-size: 12px;
    font-weight: 500;
    margin-right: 3px;
    margin-bottom: 3px;
}
`

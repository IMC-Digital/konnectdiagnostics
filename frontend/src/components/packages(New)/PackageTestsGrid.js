import axios from 'axios';
import React, { useEffect } from 'react';
import BASE_API_URL from '../../api/index';
import styled from "styled-components";
import ListGroup from 'react-bootstrap/ListGroup';

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
            <ListGroup>
                {packageTests.slice(0, 5).map((item, index) => (
                    <ListGroup.Item key={index} className="small mb-0 py-1">{item.test_name}</ListGroup.Item>
                ))}
            </ListGroup>

            {packageTests.length > 7 && (
                <p className="small fw-bold text-k-clr-secondary pb-0">{packageTests.length - 5} More &gt;&gt;</p>
            )}
        </Wrapper>

    )
}

const Wrapper = styled.div`
p{
    font-size: 12px;
    font-weight: 500;
    margin-right: 3px;
    margin-bottom: 0px;
}
`

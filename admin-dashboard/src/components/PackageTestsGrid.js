import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BASE_API_URL from '../api/index';
import PackageTestsAccordian from './PackageTestsAccordian';

export default function PackageTestsGrid({ packageId }) {
    const [packageTests, setPackageTests] = useState([])
    useEffect(() => {
        const getTests = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/admin/get-tests`, {params : {packageId: packageId}});
                setPackageTests(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getTests();
    }, [packageId, setPackageTests])

    return (
        <div>
            {packageTests.map((item, index) => (
                <PackageTestsAccordian key={index} item={item} index={index} />
            ))}
        </div>
    )
}

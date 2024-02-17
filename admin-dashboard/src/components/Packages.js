import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import axios from 'axios';
import BASE_API_URL from '../api/index';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, Card } from 'react-bootstrap';
import PackageTestsGrid from './PackageTestsGrid';
import AddTestToPackage from './popups/AddTestToPackage';

export default function Packages() {
    const [packagesData, setPackagesData] = useState([]);
    const [packageCategories, setPackageCategories] = useState([]);
    const [addTestsInPackagePopup, setAddTestsInPackagePopup] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null)

    useEffect(() => {
        const getAllPackages = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/admin/get-all-packages`);
                setPackagesData(response.data);
                // console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllPackages();
    }, [setPackagesData])

    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/admin/get-all-categories`);
                setPackageCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllCategories();
    }, [setPackageCategories]);

    const handleAddTestsIntoPackageClick = async (packageDetails) => {
        setSelectedPackage(packageDetails);
        setAddTestsInPackagePopup(true);
    }

    return (
        <Wrapper>
            <h2 className="text-k-secondary">Packages</h2>
            <p className="small"> {packagesData && packagesData.length} Packages found</p>

            <Tabs defaultActiveKey="Cardiac" transition={false} id="category-tabs" className="mb-3">
                {
                    packageCategories.map((item, index) => (
                        <Tab key={index} eventKey={item.category_name} title={item.category_name}>
                            <div className="d-flex flex-wrap">
                                {
                                    packagesData.filter((item2) => item2.package_category === item.category_name.toLowerCase()).map((item3) => (
                                        <Card key={item3.package_id} className="w-30 m-2 shadow-sm border-0">
                                            <Card.Body className="p-0">
                                                <Card.Title className='p-3 bg-light2'>
                                                    <div className="d-flex-cb">
                                                        <span className='text-k-accent'> {item3.package_name} </span>
                                                        <Button variant="primary" onClick={() => handleAddTestsIntoPackageClick(item3)}>
                                                            <i className="fa-solid fa-plus text-white"></i>
                                                        </Button>
                                                    </div>
                                                </Card.Title>
                                                <div className="p-3">
                                                    <PackageTestsGrid packageId={item3.package_id} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))
                                }
                            </div>
                        </Tab>
                    ))
                }
            </Tabs>

            {
                selectedPackage && 
                    <AddTestToPackage 
                        selectedPackage={selectedPackage}
                        show={addTestsInPackagePopup}
                        onHide={() => setAddTestsInPackagePopup(false)}
                    />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
@media (max-width: 767.98px) {
  .border-sm-start-none {
    border-left: none !important;
  }
}
`
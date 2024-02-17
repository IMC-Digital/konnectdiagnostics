import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { styled } from "styled-components";
import axios from "axios";
import { BASE_API_URL } from "../../api/index";
import PackageInfo from "./PackageInfo";

export default function CategoryWisePackagesTabs({ cart, setCart, auth, userId, handleLoginClick, category }) {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPackages = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/packages/category/${category.category_id}`);
                setPackages(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getPackages();
    }, [category]);

    return (
        <Wrapper>
            {loading ? (
                <p>Loading...</p>
            ) : packages.length > 0 ? (
                <Tab.Container id={`category-package-tab-${category.category_name}`} defaultActiveKey={0}>
                    <Nav variant="pills" className="justify-content-start">
                        {packages.map((item, index) => (
                            <Nav.Item key={index} className="border rounded me-1">
                                <Nav.Link eventKey={index}>
                                    <span className="small clr-inherit">{item.package_name}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Tab.Content>
                        {packages.map((item, index) => (
                            <Tab.Pane key={index} eventKey={index}>
                                <PackageInfo
                                    item={item} 
                                    cart={cart}
                                    setCart={setCart}
                                    auth={auth} 
                                    userId={userId}
                                    handleLoginClick={handleLoginClick}
                                />
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            ) : (
                <p>No packages found for this category.</p>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
.category-package-tabs{
    border: 2px solid red;
}
`;

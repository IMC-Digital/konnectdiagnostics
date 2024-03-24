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
                        <div className="package-tab-titles-wrapper d-flex gap-1">
                            {packages.map((item, index) => (
                                <Nav.Item key={index}>
                                    <Nav.Link eventKey={index}>
                                        <span className="text-k-text clr-inherit">{item.package_name}</span>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </div>
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
.package-tab-titles-wrapper{
    background: white;
    box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
    border: 1px solid #e8f0ff;
    border-radius: 50px;
    padding: 6px;
    .nav-item a{
        border-radius: 50px;
        color: var(--text-clr);
    }
    .nav-item .active{
        background: var(--color1);
        color: var(--secondary-color);
    }
}
`;

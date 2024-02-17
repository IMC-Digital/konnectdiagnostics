import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import BASE_API_URL from '../api/index';
import axios from 'axios';
import { Tab, Tabs } from 'react-bootstrap';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/admin/get-all-categories`);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllCategories();
    }, [setCategories]);


    return (
        <Wrapper>
            <h2 className="text-k-secondary">Categories</h2>
            <p className="small"> {categories && categories.length} Categories found</p>

            <Tabs defaultActiveKey="Cardiac" transition={false} id="category-tabs2" className="mb-3">
                {
                    categories.map((item, index) => (
                        <Tab key={index} eventKey={item.category_name} title={item.category_name}>
                            <div className="d-flex flex-wrap">
                                
                            </div>
                        </Tab>
                    ))
                }
            </Tabs>
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
import React from 'react';
import { styled } from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Orders() {
    return (
        <Wrapper>
            <h2 className="text-k-secondary">Orders</h2>
            <p className="small">28 Orders found</p>

            <Tabs defaultActiveKey="all" transition={false} id="orders-tabs" className="mb-3">
                <Tab eventKey="all" title="All Orders">
                    All Orders tab
                </Tab>
                <Tab eventKey="pending" title="Pending Oroders">
                    Pending orders tab
                </Tab>
            </Tabs>


        </Wrapper>
    )
}

const Wrapper = styled.div`
`

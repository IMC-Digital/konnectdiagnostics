import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import Orders from './Orders';
import Tests from './Tests';
import Packages from './Packages';
import Categories from './Categories';

const DashboardTabs = () => {
    return (
        <Tab.Container id="dashboard-tabs" className='dashboard-tabs border' defaultActiveKey="tests">
            <div className='h-100 p-3 pb-0 d-flex flex-row overflow-hidden rounded'>
                <Nav variant="pills" className="me-3 pb-3 bg-light1 d-flex flex-column flex-shrink-0" style={{ width: '250px' }}>
                    <div className='brand-logo'>
                        <img src="/images/konnect-logo.png" alt="logo" className='img-fluid' />
                    </div>
                    <div className="main-tabs-title-wrapper bg-white rounded">
                        <Nav.Item>
                            <Nav.Link eventKey="tests">
                                <span>Tests</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="packages">
                                <span>Packages</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="categories">
                                <span>Categories</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="orders">
                                <span>order</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="coupons">
                                <span>Coupons</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                </Nav>

                <div className='tab-content bg-white rounded-top p-3 flex-grow-1' style={{ flex: 1 }}>
                    <Tab.Pane eventKey="tests">
                        <Tests />
                    </Tab.Pane>
                    <Tab.Pane eventKey="packages">
                        <Packages />
                    </Tab.Pane>
                    <Tab.Pane eventKey="categories">
                        <Categories />
                    </Tab.Pane>
                    <Tab.Pane eventKey="orders">
                        <Orders />
                    </Tab.Pane>
                    <Tab.Pane eventKey="coupons">
                        <h4>Content for Tab 4</h4>
                    </Tab.Pane>
                </div>
            </div>
        </Tab.Container>
    );
};

export default DashboardTabs;

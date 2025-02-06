import React from 'react'
import ActiveOrders from './ActiveOrders';
import PastOrders from './PastOrders';
import CancelledOrders from './CancelledOrders';
import { Tab, Tabs } from 'react-bootstrap';

function MyBookings({ 
    userId,
    allOrdersData,
    navigateToOrderDetails,
}) {
    return (
        <div>
            <h2 className='text_secondary'>Order history</h2>
            
            <Tabs defaultActiveKey="home" id="dashboard-orders-tab" className="mb-3 dashboard-orders-tab">
                {
                    [
                        ["home", "Active Orders", <ActiveOrders
                            userId={userId}
                            allOrdersData={allOrdersData}
                            navigateToOrderDetails={navigateToOrderDetails}
                        />],
                        ["past", "Past Orders", <PastOrders 
                            userId={userId}
                            allOrdersData={allOrdersData}
                            navigateToOrderDetails={navigateToOrderDetails}
                        />],
                        ["cancelled", "Cancelled Orders", <CancelledOrders 
                            userId={userId}
                            allOrdersData={allOrdersData}
                            navigateToOrderDetails={navigateToOrderDetails}
                        />]
                    ].map((item, index) => (
                        <Tab key={index} eventKey={item[0]} title={
                            <p className="text_accent tabs-bottom-line position-relative"> {item[1]} </p>
                        }>
                            {item[2]}
                        </Tab>
                    ))
                }
            </Tabs>
        </div>
    )
}

export default MyBookings
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api/index';
import OrderCard from './OrderCard';

function ActiveOrders({ userId, navigateToOrderDetails }) {
  const [activeOrders, setActiveOrders] = useState([])

  useEffect(() => {
    const getActiveOrders = async () => {
      try{
        const response = await axios.get(`${BASE_API_URL}/orders/active-orders/${userId}`);
        setActiveOrders(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    getActiveOrders();
  }, [setActiveOrders, userId]);

  return (
    <div id='active-orders-tab' className='d-flex flex-wrap gap-2 p-3'>
      {activeOrders && activeOrders.length > 0 ? (
        activeOrders.map((order, index) => (
          <OrderCard 
            key={index} 
            order={order}
            userId={userId}
            navigateToOrderDetails={navigateToOrderDetails}
          />
        ))
      ) : (
        <p>No active orders</p>
      )}
    </div>
  )
}

export default ActiveOrders
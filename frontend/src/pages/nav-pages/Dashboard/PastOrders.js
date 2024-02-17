import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api/index';
import OrderItemCard from './OrderCard';

function PastOrders({ userId, navigateToOrderDetails }) {
  const [pastOrders, setPastOrders] = useState([])

  useEffect(() => {
    const getPastOrders = async () => {
      try{
        const response = await axios.get(`${BASE_API_URL}/orders/past-orders/${userId}`);
        setPastOrders(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    getPastOrders();
  }, [setPastOrders, userId]);

  return (
    <div id='past-orders-tab' className='d-flex flex-wrap gap-2 p-3'>
      {pastOrders && pastOrders.length > 0 ? (
        pastOrders.map((orderItem, index) => (
          <OrderItemCard 
            key={index} 
            orderItem={orderItem}
            userId={userId}
            navigateToOrderDetails={navigateToOrderDetails}
          />
        ))
      ) : (
        <p>No Past orders</p>
      )}
    </div>
  )
}

export default PastOrders
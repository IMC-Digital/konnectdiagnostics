import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api/index';
import OrderItemCard from './OrderCard';

function CancelledOrders({ userId, navigateToOrderDetails }) {
  const [cancelledOrders, setCancelledOrders] = useState([])

  useEffect(() => {
    const getCancelledOrders = async () => {
      try{
        const response = await axios.get(`${BASE_API_URL}/orders/cancelled-orders/${userId}`);
        setCancelledOrders(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    getCancelledOrders();
  }, [setCancelledOrders, userId]);

  return (
    <div id='past-orders-tab' className='d-flex flex-wrap gap-2 p-3'>
      {cancelledOrders && cancelledOrders.length > 0 ? (
        cancelledOrders.map((orderItem, index) => (
          <OrderItemCard 
            key={index} 
            orderItem={orderItem}
            userId={userId}
            navigateToOrderDetails={navigateToOrderDetails}
          />
        ))
      ) : (
        <p>No Cancelled orders</p>
      )}
    </div>
  )
}

export default CancelledOrders
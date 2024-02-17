import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BASE_API_URL from "../../../../api/index"
import AnimatedProgressBar from '../AnimatedProgressBar';

export default function OrderItemsStatus({ order }) {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const getAppointmentDate = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/orders/order-items/${order.order_id}`);
        setOrderItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAppointmentDate();
  }, [setOrderItems, order]);

  return (
    <div>
      {
        orderItems.map((item, index) => (
          <div key={index} className="p-3 bg-white border-bottom">
            <AnimatedProgressBar orderItem={item} />
          </div>
        ))
      }
    </div>
  )
}

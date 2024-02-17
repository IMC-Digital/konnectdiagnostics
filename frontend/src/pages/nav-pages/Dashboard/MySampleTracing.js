import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../api/index';
import OrderDate from './orderDetailsComps/OrderDate';
import OrderItemsStatus from './orderDetailsComps/OrderItemsStatus';
// import { Image } from 'react-bootstrap';
// import AnimatedProgressBar from './AnimatedProgressBar';

function MySampleTracing({ userId, navigateToOrderDetails }) {
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

  const handleKnowMoreClick = (order) => {
    navigateToOrderDetails(order.order_id);
  }

  return (
    <div>
      <h2 className='text-k-secondary'> Orders Sample Tracking (Status) </h2>
      <hr />
      {activeOrders && activeOrders.length > 0 ? (
        activeOrders.map((order, index) => (
          <div key={index} className='shadow-sm rounded my-3 overflow-hidden w-100'>
            <div key={index} className='w-100 bg-k-light rounded'>
              <div className="d-flex-cb p-2">
                <div className="d-flex-cc">
                  <h2
                    className="order-id text-k-accent mb-0 px-3 py-2 bg-white shadow-md text-k-clr-primary me-2"
                    style={{ borderRadius: "50px" }}>
                    Order Id: <strong className='text-k-clr-secondary fw-bold'> #ORKDC{order.order_id} </strong>
                  </h2>
                </div>

                <div className="d-flex-cc gap-2">
                  <OrderDate date={order.order_date} />
                  <button className='btn btn-sm btn-outline-secondary d-flex-cc' onClick={() => { handleKnowMoreClick(order) }}>
                    <span className="me-2" style={{ color: "inherit" }}> Order Info </span>
                    <i className="fa-solid fa-arrows-turn-right" style={{ color: "inherit" }}></i>
                  </button>
                </div>
              </div>
            </div>

            <OrderItemsStatus order={order} />
          </div>
        ))
      ) : (
        <p>No orders to track sample status</p>
      )}

    </div>
  )
}

export default MySampleTracing;
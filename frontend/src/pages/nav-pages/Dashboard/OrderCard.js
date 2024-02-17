import React from 'react';
import OrderHead from './orderDetailsComps/OrderHead';
import OrderAppointmentDate from './orderDetailsComps/OrderAppointmentDate';
import OrderItemsGrid from './orderDetailsComps/OrderItemsGrid';

export default function OrderCard({ order, navigateToOrderDetails }) {
    const handleKnowMoreClick = (order) => {
        navigateToOrderDetails(order.order_id);
    }

    return (
        <div className="shadow-sm rounded w-100">
            <OrderHead order={order} handleKnowMoreClick={handleKnowMoreClick} />

            <div className='p-3'>
                <OrderAppointmentDate order={order} />
                <OrderItemsGrid order={order} />
            </div>
        </div>
    )
}
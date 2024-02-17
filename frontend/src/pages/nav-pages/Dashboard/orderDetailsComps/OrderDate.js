import React from 'react'

export default function OrderDate({ date }) {
    function formatOrderDate(orderDate) {
        const date = new Date(orderDate);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }).format(date);

        return formattedDate;
    }

  return (
    <p className="order-placed-time text-k-text small text-light-dark mb-0 ">
        Order Placed : {formatOrderDate(date)}
    </p>
  )
}

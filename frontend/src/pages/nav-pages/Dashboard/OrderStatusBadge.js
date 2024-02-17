import React from 'react';

const OrderStatusBadge = ({ orderStatus }) => {
  let iconSrc, color, text;

  switch (orderStatus) {
    case 'paid':
      iconSrc = 'https://cdn.lordicon.com/oqdmuxru.json';
      color = '#227151';
      text = 'Paid';
      break;
    case 'pending':
      iconSrc = 'https://cdn.lordicon.com/vihyezfv.json';
      color = '#e8b730';
      text = 'Payment Pending';
      break;
    case 'cancelled':
      iconSrc = 'https://cdn.lordicon.com/nqtddedc.json';
      color = '#e83a30';
      text = 'Cancelled';
      break;
    case 'refunded':
      iconSrc = 'https://cdn.lordicon.com/ciawvzjk.json';
      color = '#110a5c';
      text = 'Refunded';
      break;
    default:
      return null;
  }

  return (
    <span className={`order-status order-status-${orderStatus}`}>
      <lord-icon
        src={iconSrc}
        trigger="loop"
        delay="2000"
        colors={`primary:${color}`}
        style={{ width: '20px', marginRight: '5px' }}
      ></lord-icon>
      {text}
    </span>
  );
};

export default OrderStatusBadge;

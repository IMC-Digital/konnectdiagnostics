// orderroutes.js
const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/place-order', ordersController.placeOrder);

router.get('/:userId', ordersController.getAllOrders);
router.get('/get-order-by-orderid/:orderId', ordersController.getOrderByOrderId);
router.get('/active-orders/:userId', ordersController.getActiveOrders);
router.get('/past-orders/:userId', ordersController.getPastOrders);
router.get('/cancelled-orders/:userId', ordersController.getCancelledOrders);
router.get('/get-order-details/:orderPlacedId', ordersController.getOrderDetails);
router.get('/single-order/:orderId', ordersController.getSingleOrder);

router.get('/appointment-date/:orderId', ordersController.getOrderAppointmentDate);
router.get('/order-billing/:orderId', ordersController.getOrderBillingDetails);
router.get('/order-payment/:orderId', ordersController.getOrderPaymentDetails);
router.get('/order-items/:orderId', ordersController.getOrderItems);
router.get('/order-user-address/:orderId', ordersController.getUserOrderAddress)
router.get('/order-clinic-address/:orderId', ordersController.getOrderClinicAddress)


module.exports = router;
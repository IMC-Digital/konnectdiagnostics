//src/redux/actions/cartActions.js
import { SET_CART } from '../constants/actionTypes';

// Change the function name and type to setCart
export const setCart = (cartItems) => ({
  type: SET_CART,
  payload: cartItems,
});

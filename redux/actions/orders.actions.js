import {ADD_ORDER} from "../constants/orders.constants";

export const addOrder = (cartItems, totalAmount) => ({
  type: ADD_ORDER,
  payload: {
    items: cartItems,
    amount: totalAmount
  }
});

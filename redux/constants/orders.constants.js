import {ADD_ORDER} from "../actions/orders.actions";

export const addOrder = (cartItems, totalAmount) => ({
  type: ADD_ORDER,
  payload: {
    items: cartItems,
    amount: totalAmount
  }
});

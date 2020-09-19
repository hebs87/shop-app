import {ADD_ORDER} from "../constants/orders.constants";
import Order from "../../models/Order";

const initialState = {
  orders: [],
}

const ordersReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const items = action.payload.items;
      const amount = action.payload.amount;
      const newOrder = new Order(
        new Date().toString(),
        items,
        amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
    default:
      return state;
  }
}

export default ordersReducer;

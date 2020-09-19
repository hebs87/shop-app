import {combineReducers} from "redux";
import productsReducer from "./products.reducers";
import cartReducer from "./cart.reducers";
import ordersReducer from "./orders.reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default rootReducer;

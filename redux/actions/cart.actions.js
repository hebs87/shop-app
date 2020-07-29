import {ADD_TO_CART} from "../constants/cart.constants";

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product,
});

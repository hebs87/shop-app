import PRODUCTS from "../../data/dummy-data";
import {DELETE_PRODUCT} from "../constants/products.constants";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
};

const productsReducer = (state=initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productId = action.payload;
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          product => product.id !== productId
        ),
        userProducts: state.userProducts.filter(
          product => product.id !== productId
        ),
      }
    default:
      return state;
  }
};

export default productsReducer;

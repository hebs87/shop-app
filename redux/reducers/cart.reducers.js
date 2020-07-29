import {ADD_TO_CART} from "../constants/cart.constants";
import CartItem from "../../models/CartItem";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updatedOrNewCartItem;
      if (state.items[addedProduct.id]) {
        // Already have item in the cart - increment quantity and add to sum
        const cartItem = state.items[addedProduct.id];
        updatedOrNewCartItem = new CartItem(
          cartItem.quantity + 1,
          prodPrice,
          prodTitle,
          cartItem.sum + prodPrice
        );
      } else {
        // Add new item to cart
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + prodPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;

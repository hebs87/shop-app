import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../constants/cart.constants";
import {ADD_ORDER} from "../constants/orders.constants";
import {DELETE_PRODUCT} from "../constants/products.constants";
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
    case REMOVE_FROM_CART:
      const productId = action.payload;
      const selectedItem = state.items[productId];
      const currentQty = selectedItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        // Create a new cart item with the amended values - reduced quantity and sum
        const updatedCartItem = new CartItem(
          currentQty - 1,
          selectedItem.productPrice,
          selectedItem.productTitle,
          selectedItem.sum - selectedItem.productPrice
        )
        updatedCartItems = {...state.items, [productId]: updatedCartItem}
      } else {
        // Remove item from list
        updatedCartItems = {...state.items};
        delete updatedCartItems[productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedItem.productPrice,
      }
    case ADD_ORDER:
      return initialState;
    case DELETE_PRODUCT:
      const prodId = action.payload;
      if (!state.items[prodId]) {
        return state;
      }
      const updatedItems = {...state.items};
      const itemTotal = state.items[prodId].sum;
      delete updatedItems[prodId];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount -itemTotal
      }
    default:
      return state;
  }
};

export default cartReducer;

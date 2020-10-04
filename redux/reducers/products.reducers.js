import PRODUCTS from "../../data/dummy-data";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/products.constants";
import Product from "../../models/Product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
};

const productsReducer = (state=initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const data = action.payload;
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        data.title,
        data.imageUrl,
        data.description,
        data.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct)
      }
    case UPDATE_PRODUCT:
      const productData = action.payload;
      // Get the product index in userProducts, create an updated product and update the userProducts array
      const productIndex = state.userProducts.findIndex(prod => prod.id === productData.id);
      const updatedProduct = new Product(
        productData.id,
        state.userProducts[productIndex].ownerId,
        productData.title,
        productData.imageUrl,
        productData.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      // Update the availableProducts array
      const availableProductIndex = state.availableProducts.findIndex(prod => prod.id === productData.id);
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      }
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

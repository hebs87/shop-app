import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/products.constants";

export const createProduct = data => ({
  type: CREATE_PRODUCT,
  payload: data
});

export const updateProduct = data => ({
  type: UPDATE_PRODUCT,
  payload: data
});

export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  payload: productId
});

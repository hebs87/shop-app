import {DELETE_PRODUCT} from "../constants/products.constants";

export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  payload: productId
});

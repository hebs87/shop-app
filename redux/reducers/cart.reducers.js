import PRODUCTS from "../../data/dummy-data";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;

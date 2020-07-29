import React from 'react';
import {enableScreens} from "react-native-screens";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension/index";
import productsReducer from "./redux/reducers/products.reducers";
import ShopNavigator from "./navigation/ShopNavigator";

enableScreens();

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}

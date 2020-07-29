import React, {useState} from 'react';
import {enableScreens} from "react-native-screens";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import {composeWithDevTools} from "redux-devtools-extension/index";
import productsReducer from "./redux/reducers/products.reducers";
import cartReducer from "./redux/reducers/cart.reducers";
import ShopNavigator from "./navigation/ShopNavigator";

enableScreens();

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(false)}
        onError={error => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}

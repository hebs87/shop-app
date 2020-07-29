import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import ProductOverviewScreen from "../screens/shop/ProductsOverview";
import Colors from '../theme/constants';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductOverviewScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
      headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
    },
  }
);

export default createAppContainer(ProductsNavigator);

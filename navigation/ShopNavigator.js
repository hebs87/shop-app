import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import ProductOverviewScreen from "../screens/shop/ProductsOverview";
import ProductDetailScreen from "../screens/shop/ProductDetail";
import Colors from '../theme/constants';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductOverviewScreen,
      navigationOptions: () => {
        return {
          headerTitle: 'All Products',
        };
      },
    },
    ProductDetail: {
      screen: ProductDetailScreen,
      navigationOptions: navData => {
        const title = navData.navigation.getParam('title');
        return {
          headerTitle: title,
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
      headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
      headerTitleStyle: {
        fontFamily: 'OpenSansBold',
      },
      headerBackTitleStyle: {
        fontFamily: 'OpenSans',
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);

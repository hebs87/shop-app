import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/HeaderButton";
import ProductOverviewScreen from "../screens/shop/ProductsOverview";
import ProductDetailScreen from "../screens/shop/ProductDetail";
import CartScreen from "../screens/shop/Cart";
import Colors from '../theme/constants';

const renderCartButton = navData => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        onPress={() => navData.navigation.navigate('Cart')}
      />
    </HeaderButtons>
  )
}

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductOverviewScreen,
      navigationOptions: navData => {
        return {
          headerTitle: 'All Products',
          headerRight: () => (
            renderCartButton(navData)
          ),
        };
      },
    },
    ProductDetail: {
      screen: ProductDetailScreen,
      navigationOptions: navData => {
        const title = navData.navigation.getParam('title');
        return {
          headerTitle: title,
          headerRight: () => (
            renderCartButton(navData)
          ),
        };
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: navData => {
        return {
          headerTitle: 'Cart'
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

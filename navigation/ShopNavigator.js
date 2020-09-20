import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";
import CustomHeaderButton from "../components/UI/HeaderButton";
import ProductOverviewScreen from "../screens/shop/ProductsOverview";
import ProductDetailScreen from "../screens/shop/ProductDetail";
import CartScreen from "../screens/shop/Cart";
import OrdersScreen from "../screens/shop/Orders";
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
};

const renderMenuButton = navData => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
};

const defaultNavOptions = {
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
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductOverviewScreen,
      navigationOptions: navData => {
        return {
          headerTitle: 'All Products',
          headerLeft: () => (
            renderMenuButton(navData)
          ),
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
          headerTitle: 'Your Cart',
        };
      },
    },
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: {
      screen: OrdersScreen,
      navigationOptions: navData => {
        return {
          headerTitle: 'Your Orders',
          headerLeft: () => (
            renderMenuButton(navData)
          ),
        };
      },
    },
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: {
      screen: ProductsNavigator,
    },
    Orders: {
      screen: OrdersNavigator,
    },
  },
  {
    drawerBackgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    contentOptions: {
      inactiveTintColor: Platform.OS === 'android' ? Colors.black : '',
      activeTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
      activeBackgroundColor: Platform.OS === 'android' ? Colors.accent : '',
      labelStyle: {
        fontFamily: 'OpenSansBold',
      },
      itemStyle: {
        width: '100%',
        justifyContent: 'center',
      },
    },
    overlayColor: Colors.opaque,
  }
);

export default createAppContainer(ShopNavigator);

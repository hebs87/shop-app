import React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/actions/cart.actions";
import {addOrder} from "../../redux/actions/orders.actions";
import Card from "../../components/UI/Card";
import CartItem from "../../components/shop/CartItem";
import Colors from "../../theme/constants";

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    // We need to set a productId, so we create a new array of product objects with the required values from the store
    const transformedCartItems = [];
    const items = state.cart.items;

    for (const key in items) {
      transformedCartItems.push({
        productId: key,
        productTitle: items[key].productTitle,
        productPrice: items[key].productPrice,
        quantity: items[key].quantity,
        sum: items[key].sum
      });
    }
    // Return the array of products and sort them to ensure the displayed order doesn't change when removing items
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  const handleRemove = productId => {
    return dispatch(removeFromCart(productId));
  };

  const handleOrderNowPress = (cartItems, totalAmount) => {
    return dispatch(addOrder(cartItems, totalAmount));
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>
            £{Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems.length === 0}
          onPress={() => handleOrderNowPress(cartItems, cartTotalAmount)}
        />
      </Card>
      <FlatList
        keyExtractor={item => item.productId}
        data={cartItems}
        renderItem={({item}) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            deletable
            handleRemove={() => handleRemove(item.productId)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: 'OpenSansBold',
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
})

export default CartScreen;

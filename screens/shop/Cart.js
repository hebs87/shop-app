import React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/actions/cart.actions";
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
  }

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>£{cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        keyExtractor={item => item.productId}
        data={cartItems}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            handleRemove={() => handleRemove(itemData.item.productId)}
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
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
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

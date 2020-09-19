import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../theme/constants"

const CartItem = props => {
  const {quantity, title, amount, handleRemove} = props;

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>
          {quantity} x{' '}
        </Text>
        <Text style={styles.mainText}>
          {title}
        </Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>
          £{amount.toFixed(2)}
        </Text>
        <TouchableOpacity
          onPress={handleRemove}
          style={styles.deleteButton}
        >
          <Ionicons
            name={Platform.OS === 'android' ?  'md-trash': 'ios-trash'}
            color="red"
            size={23}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'OpenSans',
    color: Colors.darkGrey,
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'OpenSansBold',
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;

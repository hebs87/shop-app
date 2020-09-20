import React, {useState} from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import CartItem from "./CartItem";
import Colors from "../../theme/constants";

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  const {amount, date, items} = props;

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.amount}>
          £{amount.toFixed(2)}
        </Text>
        <Text style={styles.date}>
          {date}
        </Text>
      </View>
      <Button
        title={showDetails ? "Hide Details" : "Show Details"}
        color={Colors.primary}
        onPress={() => setShowDetails(!showDetails)}
      />
      {
        showDetails &&
        <View style={styles.detailItems}>
          {items.map(({productId, productTitle, quantity, sum}) => (
            <CartItem
              key={productId}
              title={productTitle}
              quantity={quantity}
              amount={sum}
            />
          ))}
        </View>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  amount: {
    fontFamily: 'OpenSansBold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'OpenSans',
    fontSize: 16,
    color: Colors.darkGrey,
  },
  detailItems: {
    width: '100%',
  },
});

export default OrderItem;

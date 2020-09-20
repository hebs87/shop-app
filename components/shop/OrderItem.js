import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import CartItem from "./CartItem";

const OrderItem = props => {
  const {amount, date} = props;

  return (
    <View>
      <View>
        <Text>£{amount.toFixed(2)}</Text>
        <Text>{date}</Text>
      </View>
      <Button
        title="Show Details"
      />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default OrderItem;

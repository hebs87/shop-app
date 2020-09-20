import React from "react";
import {Text, FlatList} from "react-native";
import {useSelector} from "react-redux";

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={orders}
      renderItem={itemData => (
        <Text>{itemData.item.totalAmount}</Text>
      )}
    />
  );
};

export default OrdersScreen;

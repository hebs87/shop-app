import React from 'react';
import {useSelector} from "react-redux";
import {StyleSheet, View, Text, FlatList} from 'react-native';

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={products}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProductOverviewScreen;

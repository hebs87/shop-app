import React from 'react';
import {useSelector} from "react-redux";
import {StyleSheet, View, Text, Button, Image, ScrollView} from 'react-native';

const ProductDetailScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(
    state => state.products.availableProducts.find(prod => prod.id === prodId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProductDetailScreen;

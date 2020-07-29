import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import Colors from "../../theme/constants";

const ProductItem = props => {
  const {imageUrl, title, price, onViewDetail, onAddToCart} = props;

  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{uri: imageUrl}}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>£{price.toFixed(2)}</Text>
      <View style={styles.actions}>
        <Button
          title='View Details'
          onPress={onViewDetail}
        />
        <Button
          title='To Cart'
          onPress={onAddToCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: Colors.darkGrey,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductItem;

import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import Colors from "../../theme/constants";

const ProductItem = props => {
  const {imageUrl, title, price, onViewDetail, onAddToCart} = props;

  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>£{price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          title='View Details'
          color={Colors.primary}
          onPress={onViewDetail}
        />
        <Button
          title='To Cart'
          color={Colors.primary}
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
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detail: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
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
    height: '25%',
    paddingHorizontal: 20,
  },
});

export default ProductItem;

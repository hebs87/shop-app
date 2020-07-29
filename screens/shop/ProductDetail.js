import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {StyleSheet, View, Text, Button, Image, ScrollView} from 'react-native';
import * as cartActions from '../../redux/actions/cart.actions';
import Colors from "../../theme/constants";

const ProductDetailScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(
    state => state.products.availableProducts.find(prod => prod.id === prodId)
  );
  const dispatch = useDispatch();
  const {imageUrl, price, description} = selectedProduct;

  const handleAddToCart = item => {
    dispatch(cartActions.addToCart(item));
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: imageUrl}}/>
      <View style={styles.actions}>
        <Button
          title='Add To Cart'
          color={Colors.primary}
          onPress={() => handleAddToCart(selectedProduct)}
        />
      </View>
      <Text style={styles.price}>£{price}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontFamily: 'OpenSansBold',
    fontSize: 20,
    color: Colors.darkGrey,
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;

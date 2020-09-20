import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FlatList, Button, View} from 'react-native';
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../redux/actions/cart.actions';
import Colors from "../../theme/constants";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const handleViewDetail = item => {
    props.navigation.navigate(
      'ProductDetail',
      {
        productId: item.id,
        title: item.title,
      }
    )
  };

  const handleAddToCart = item => {
    dispatch(cartActions.addToCart(item));
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={products}
      renderItem={({item}) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => handleViewDetail(item)}
        >
          <Button
            title='View Details'
            color={Colors.primary}
            onPress={() => handleViewDetail(item)}
          />
          <Button
            title='To Cart'
            color={Colors.primary}
            onPress={() => handleAddToCart(item)}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductOverviewScreen;

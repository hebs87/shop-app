import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FlatList} from 'react-native';
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../redux/actions/cart.actions';

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
          onViewDetail={() => handleViewDetail(item)}
          onAddToCart={() => handleAddToCart(item)}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;

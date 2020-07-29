import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FlatList} from 'react-native';
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../redux/actions/cart.actions';

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const handleViewDetail = itemData => {
    props.navigation.navigate(
      'ProductDetail',
      {
        productId: itemData.item.id,
        title: itemData.item.title,
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
      renderItem={itemData => (
        <ProductItem
          imageUrl={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => handleViewDetail(itemData)}
          onAddToCart={() => handleAddToCart(itemData.item)}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;

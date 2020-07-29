import React from 'react';
import {useSelector} from "react-redux";
import {FlatList} from 'react-native';
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={products}
      renderItem={itemData => (
        <ProductItem
          imageUrl={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate(
              'ProductDetail',
              {
                productId: itemData.item.id,
                title: itemData.item.title,
              }
            )
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;

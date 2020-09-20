import React from "react";
import {FlatList} from "react-native";
import {useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const UserProductsScreen = props => {
  const products = useSelector(state => state.products.userProducts)

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={products}
      renderItem={({item}) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default UserProductsScreen;

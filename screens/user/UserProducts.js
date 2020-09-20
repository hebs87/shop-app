import React from "react";
import {FlatList, Button} from "react-native";
import {useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../theme/constants";

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
          onSelect={() => {}}
        >
          <Button
            title='Edit'
            color={Colors.primary}
            onPress={() => {}}
          />
          <Button
            title='Delete'
            color={Colors.primary}
            onPress={() => {}}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;

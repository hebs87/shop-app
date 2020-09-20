import React from "react";
import {FlatList, Button} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {deleteProduct} from "../../redux/actions/products.actions";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../theme/constants";

const UserProductsScreen = props => {
  const products = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const handleDelete = productId => {
    return dispatch(deleteProduct(productId));
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
            onPress={() => handleDelete(item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;

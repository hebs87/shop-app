import React from "react";
import {FlatList, Button, Alert} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {deleteProduct} from "../../redux/actions/products.actions";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../theme/constants";

const UserProductsScreen = props => {
  const products = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const handleEdit = item => {
    props.navigation.navigate(
      'EditProduct',
      {
        productId: item.id,
        title: item.title,
      }
    );
  };

  const handleDelete = productId => {
    Alert.alert(
      'Are you sure?',
      'Do you really want to delete this item?',
      [
        {
          text: 'No',
          style: 'default'
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            dispatch(deleteProduct(productId));
          }
        }
      ]
    );
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
          onSelect={() => handleEdit(item)}
        >
          <Button
            title='Edit'
            color={Colors.primary}
            onPress={() => handleEdit(item)}
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

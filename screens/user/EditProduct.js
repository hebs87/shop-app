import React, {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {StyleSheet, ScrollView, View, TextInput, Text} from "react-native";
import {createProduct, updateProduct} from "../../redux/actions/products.actions";
import Colors from '../../theme/constants';

const EditProductScreen = props => {
  // Get product if there is one - if user is editing
  const prodId = props.navigation.getParam('productId');
  const product = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));
  const dispatch = useDispatch();

  // Set state to product details if editing product
  const [title, setTitle] = useState(product ? product.title : '');
  const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : '');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(product ? product.description : '');

  const handleSave = useCallback(() => {
    const formData = {
      id: product ? product.id : null,
      title,
      imageUrl,
      description,
      price: product ? product.price : +price
    };

    if (product) {
      dispatch(updateProduct(formData));
    } else {
      dispatch(createProduct(formData));
    }

    props.navigation.navigate('UserProducts')
  }, [dispatch, prodId, title, imageUrl, price, description]);

  useEffect(() => {
    props.navigation.setParams({handleSave})
  }, [handleSave]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
        </View>
        {
          !product &&
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </View>
        }
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
   margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSansBold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;

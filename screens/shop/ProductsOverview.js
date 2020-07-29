import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const ProductOverviewScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Products Overview Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProductOverviewScreen;

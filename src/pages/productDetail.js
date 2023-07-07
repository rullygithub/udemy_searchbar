import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProductDetail = ({product}) => {
  return (
    <View style={styles.cardItem}>
      <Image style={styles.images} source={{uri: product.image_url}} />
      <Text>{product.name}</Text>
      <View>
        <Text>{product.price}</Text>
      </View>
      <View style={styles.boxCardProduct}>
        <Text style={styles.textName}>Rating : {product.rating}</Text>
        <Text style={styles.textName}>Review : {product.review_count}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  cardItem: {
    margin: 5,
    borderRadius: 3,
  },
  images: {
    width: 150,
    height: 100,
    borderRadius: 3,
  },
  boxCardProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textName: {
    fontSize: 11,
    color: '#B25068'
  },
});

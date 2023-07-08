import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductDetail from './productDetail'

const ProductList = ({title, product, navigation}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={product}
        keyExtractor={(pro) => pro.id }
        renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('list', {id: item.id})}>
                <ProductDetail product={item} />

              </TouchableOpacity>
            )
        }}

      />
    </View>
  )
}

export default ProductList;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },

})
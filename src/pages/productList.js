import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ProductDetail from './productDetail'

const ProductList = ({title, product}) => {
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
                <ProductDetail product={item} />
            )
        }}

      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },

})
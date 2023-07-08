import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../component/searchBar';
import useResult from '../component/hook/useResult';
import ProductList from './productList';
// import yelp from '../component/api/yelpApi';

const HomeScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, product, errorMessage] = useResult();

  const filterProductByPrice = (price) => {
    return product.filter(prod => {
      return prod.price === price;
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
      </View>
      <View style={styles.result}>
        <Text style={styles.textTitle}>Search Result</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text style={styles.textTitle}>Ditemukan {product.length} Product </Text>

      </View>
        <ScrollView>
          <ProductList product={filterProductByPrice('$')} navigation={navigation} title="Low Price"/>
          <ProductList product={filterProductByPrice('$$')} navigation={navigation} title="Middle Price"/>
          <ProductList product={filterProductByPrice('$$$')} navigation={navigation} title="High Price"/>
        </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  result: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 12,
    color: '#967E76'
  }
});

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../component/searchBar';
import yelp from '../component/api/yelpApi';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [product, setProduct] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {

    try {
         
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term:searchTerm,
            location: 'san jose'
          },
        });
        setProduct(response.data.businesses);
    } catch(error) {

        //Error Handling
        setErrorMessage('414, Something went wrong')
    }
  };

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
        <Text>Search Result</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Ditemukan {product.length} Product </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  result: {
    marginTop: 20,
  },
});

import {StyleSheet, Text, View, Alert, ActivityIndicator, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import yelp from '../component/api/yelpApi';

const ShowList = ({route}) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = route.params.id;

  console.log(result);

  const getProduct = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Terjadi Kesalahan dalam pengambilan data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  if (loading) {
    return (
      <View style={{display: 'flex' ,alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Image source={require('../assets/images/error.jpg')}/>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: result.image_url}}/>
      </View>
      <Text>{result.name}t</Text>
    </View>
  );
};

export default ShowList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  error: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
  }
});

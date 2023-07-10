import {
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Image,
  ScrollView,
  FlatList,

} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import yelp from '../component/api/yelpApi';
import Carousel, {Pagination} from 'react-native-snap-carousel'

const ShowList = ({route}) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const id = route.params.id;

  //carousell image slider
  
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  // const handlePrev =() => {
  //   const prevSlide = activeSlide - 1 >= 0 ? activeSlide - 1 : result.photos.length - 1;
  //   carouselRef.current.snapToItem(prevSlide)
  // }
  // const handleNext =() => {
  //   const nextSlide = activeSlide + 1 < (result.photos.length) ? activeSlide + 1 : 0;
  //   carouselRef.current.snapToItem(nextSlide)
  // }

  const getProduct = async id => {
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

  if(!result) {
    return null
  }

  if (loading) {
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Image source={require('../assets/images/error.jpg')} />
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Carousel layout={'tinder'} layoutCardOffset={`9`} style={styles.carousel}
        ref={carouselRef}      
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.images} source={{uri: item}} />;
        }}
        sliderWidth={400}
        itemWidth={400}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Text style={styles.textDetailName}>{result.name}</Text>
    </View>
  );
};

export default ShowList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  carousel: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'red',
  },

  img_card: {
    

  },
  images: {
    width: 400,
    height: 300,
    objectFit:'cover'
  },
  textDetailName: {
    color: '#3F2E3E',
    textTransform: 'uppercase',
    marginVertical: 20,
    marginHorizontal: 20
  },
  error: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

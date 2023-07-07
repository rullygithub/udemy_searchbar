import react, {useEffect, useState} from 'react'
import yelp from '../api/yelpApi';

export default () => {
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
  useEffect(() => {
    searchApi('pizza')
  }, []);

  return [searchApi, product, errorMessage];
}

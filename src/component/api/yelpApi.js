import axios from 'axios';

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      'Bearer OrpF7a5bJQWOtbDJEdiByo_jaGMg7DUDn05gp4JoZvH8ymhXKuHVgFhpjYJKg2HjCaCG6-aPMYv8I0WPNdnsObpXFJbapGOEA516XolxSThC16-Fsv02Kwjc-DCmZHYx',
    accept: 'application/json',
  },
});

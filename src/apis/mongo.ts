const mongoose = require('mongoose');
const { Product } = require('../models/product');

mongoose.connect('mongodb://ecom_user:password123@ds255728.mlab.com:55728/heroku_1kj197vx', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('COnencted');
});

export const getProducts = () => {
  console.log('Getting those products');
  Product.find(function(err: any, products: any) {
    console.log('products', products);
  });
};

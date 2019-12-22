import * as mongoose from 'mongoose';
import Product from '../models/product';

mongoose.connect('mongodb://ecom_user:password123@ds255728.mlab.com:55728/heroku_1kj197vx', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

export const getProducts = async () => {
  console.log('Getting all those products!');
  return await Product.find({});
};

export const getProductById = async (productId: String) => {
  console.log(`Getting product: ${productId}`);
  return await Product.findById(productId);
};

import * as mongoose from 'mongoose';
import Product from '../models/product';

import '../utils/env';

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_URL}`, {
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

export const getProductById = async (productId: mongoose.Types.ObjectId) => {
  console.log(`Getting product: ${productId}`);
  return await Product.findById(productId);
};

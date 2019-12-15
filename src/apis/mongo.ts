import * as mongoose from 'mongoose';
import Product from '../models/product';

mongoose.connect('mongodb://ecom_user:password@ds255728.mlab.com:55728/heroku_1kj197vx');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connected');
});

export const getProducts = () => {
  Product.find({ _id: 1 }, (data: Product) => {
    console.log('Hello');
    console.log(data);
  });
};

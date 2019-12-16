import { Schema, model } from 'mongoose';

const productSchema: Schema = new Schema({
  name: String,
  descriptrion: String,
  categories: Array
});

export default model('Product', productSchema);

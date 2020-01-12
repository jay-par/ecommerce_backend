import { Schema, model } from 'mongoose';

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  descriptrion: { type: String, required: true },
  categories: { type: Array, required: true },
  price: { type: Number, required: true },
  imageUrsl: { type: String, required: true }
});

export default model('Product', productSchema);

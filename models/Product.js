// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  source: String,
  title: String,
  image: String,
  rating: String,
  price: String,
  finalPrice: String,
  offer: String,
  productlink:String,
 });

 productSchema.index({ title: 'text', source: 'text'}, { unique: false });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  source: String, 
  category: String,
  title: String,
  image: String,
  rating: String,
  price: String,
  finalPrice: String,
 });

 productSchema.index({ title: 'text', source: 'text', category: 'text'}, { unique: false });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

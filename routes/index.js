
const express = require('express');
const router = express.Router();
const { getProducts, clearProductsCollection, productSearch } = require('../controllers/index');

// Define a route to handle the initial data fetching
router.get('/fetch', getProducts);

// Define an endpoint to clear the products collection
router.post('/clear-products', clearProductsCollection);

// Define a route to handle search
router.get('/search', productSearch);


module.exports = router;

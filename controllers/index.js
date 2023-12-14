//controllers/index.js
const Product = require('../models/Product');
const { connectDB } = require('../dbConfig');


const getProducts = async (req, res) => {
 await connectDB()
  try {
    // Fetch data from the database
    const amazonProducts = await Product.find({ source: 'Amazon' });
    const flipkartProducts = await Product.find({ source: 'Flipkart' });
    const snapdealProducts = await Product.find({ source: 'Snapdeal' });

    // Log the fetched products
    // console.log('Amazon Products:', amazonProducts);
    // console.log('Flipkart Products:', flipkartProducts);
    // console.log('Snapdeal Products:', snapdealProducts);

    // Send the fetched data as JSON
    res.status(200).json({
      amazonProducts,
      flipkartProducts,
      snapdealProducts,
    });

  } catch (error) {
    console.error('Error fetching products:', error);

    // Send a more specific error status code and message if needed
    res.status(500).send('Error fetching products. Please try again later.');
  }
};


async function clearProductsCollection() {
  await connectDB()

  try {
    // Use deleteMany to remove all documents from the collection
    const deleteResult = await Product.deleteMany({});
    
    console.log(`Deleted ${deleteResult.deletedCount} documents from the products collection.`);
  } catch (error) {
    console.error('Error clearing products collection:', error);
  }
}

const productSearch = async (req, res) => {
   await connectDB()
  const searchTerm = req.query.term;
  //console.log("searchTerm", searchTerm);
  try {
    const results = await Product.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search for title
        { source: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search for source
        { category: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search for category
      ],
    });
    res.json(results);
    //console.log(results)
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).send('Internal Server Error');
  }
}


module.exports = {
  getProducts,
  clearProductsCollection,
  productSearch,
};

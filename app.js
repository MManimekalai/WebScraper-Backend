const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const { getProducts, clearProductsCollection } = require('./controllers/index'); 
const { connectDB } = require('./dbConfig');
const path = require('path'); 
const cors = require('cors'); 


require('./scheduleScraping');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your local frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

(async () => {
  await connectDB();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('public'));

  // Set EJS as the view engine
  app.set('view engine', 'ejs');

  // Set the views directory
  app.set('views', path.join(__dirname, 'views'));


  // Use the API routes
  app.use('/api', apiRoutes);

    // Define an endpoint to clear the products collection
    app.post('/clear-products', clearProductsCollection);

  
})();


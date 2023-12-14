// scrapers.js

const axios = require('axios');
const cheerio = require('cheerio');
const Product = require('../models/Product');

const scrapeAmazonCategory = async (url) => {
  const defaultImage = './Assets/amazon.jpg'
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
    
        const products = [];
  
        //$('div.puis-card-container').each((index, element) => {
          $('div.a-section.a-spacing-base').each((index, element) => {
            if (index >= 30) return; // Limit the number of products to 10
  
            const $element = $(element);
            // Extract relevant information from the product card
            //const imageUrl = $element.find('div.a-section div.puisg-row div.puisg-col span.s-product-image a.a-link-normal').attr('src');
            const image = $element.find('.s-image').attr('src');
            const title = $element.find('.a-size-base-plus.a-color-base.a-text-normal').text();
            const rating = $element.find('span[aria-label]').attr('aria-label')
            //const numberOfRatings = $element.find('span.a-size-small.a-color-secondary').text().replace(/\D+/g, '');
            //const finalPriceWithOffer = $element.find('span.a-price-whole').text() + $element.find('span.a-price-whole').text() + $element.find('span.a-price-decimal').text();
            const finalPriceWithOffer = $element.find('.a-price-whole').text();
            const originalPrice = $element.find('.a-price.a-text-price span[aria-hidden="true"]').text().trim();
            const offer = $element.find('span.a-letter-space').next().text();
            const urll ='https://www.amazon.in'
            const productlink =urll + $element.find('a').attr('href');

  
            // Create a product object with the extracted details
            const product = {
                source: 'Amazon',
                title,
                image,
                rating,
                price: originalPrice,
                finalPrice: finalPriceWithOffer,
                offer,
                productlink,
            };
  
            products.push(product);
        });
  
        // Log the scraped products
        //console.log(products);
  
        // Save the products to the MongoDB collection using the Product model or perform any other desired action
        await Product.insertMany(products);
  
        console.log('Data saved or processed successfully.');
  
        return products;
    } catch (error) {
        console.error('Error scraping Amazon');
        console.log("Error", error);
        //throw error;
    }
};


const scrapeSnapdealCategory = async (url) => {
    const defaultImage = 'https://tse1.mm.bing.net/th?id=OIP.WTontfkd9Gz8HXs5CzckKwHaEK&pid=Api&rs=1&c=1&qlt=95&w=222&h=124'
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
    
        const products = [];
        
    
        $('.favDp.product-tuple-listing').each((index, element) => {
          if (index >= 30) return;  // Limit the number of products to 10
    
          const $element = $(element);
          //const image = $element.find('div.product-tuple-image a img.product-image').attr('src');
          const imageElement = $element.find('img.product-image').attr('src');
          //const image = imageElement.length ? imageElement.attr('src') : null;
          const title = $element.find('div.product-tuple-description p.product-title').text();
          const ratingElement = $element.find('div.product-desc-rating div.clearfix div.rating-stars div.filled-stars');
          const rating = ratingElement.length ? ratingElement.css('width') : 'Not Rated';
          const price = $element.find('div.product-desc-rating div.product-price-row span.product-desc-price').text().trim();
          const finalPrice = $element.find('div.product-desc-rating div.product-price-row span.product-price').text().trim();
          const discount = $element.find('div.product-discount span').text().trim();
          const numberOfRatings = $element.find('div.product-rating-count').text().replace(/\D+/g, '');
    
          const product = {
            source: 'Snapdeal',
            title,
            rating,
            price,
            finalPrice,
            discount,
            numberOfRatings,
            image: imageElement, 
          };
          
            
          products.push(product);
        });
    
        // Save the products to the MongoDB collection using the Product model
        await Product.insertMany(products);
    
        console.log('Data saved to MongoDB Atlas successfully.');
    
        return products;
      } catch (error) {
        console.error('Error scraping Snapdeal');
        console.log("Error", error);
        //throw error;
      }
};

const scrapeFlipkartCategory = async (url) => {
  const defaultImage = './Assets/amazon.jpg'
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        
    
        const products = [];
    
        $('div._2kHMtA').each((index, element) => {
          if (index >= 10) return; // Limit the number of products to 10
    
          const $element = $(element);
          const image = $element.find('div.CXW8mj img').attr('src');
          const title = $element.find('div._4rR01T').text().trim();
          //const rating = $element.find('div._3LWZlK').prop('checked') ? 'Rated' : 'Not Rated';
          const rating = $element.find('div._3LWZlK').text().trim();
          const finalPrice = $element.find('div._25b18c div._30jeq3').text();
          const price = $element.find('div._25b18c div._3I9_wc').text();
          const offer = $(ele).find('._3Ay6Sb').text().trim();
          const urll = 'https://www.flipkart.com'
          const productlink =urll + $element.find('a').attr('href')

             
          const product = {
            source: 'Flipkart',
            title,
            image,
            rating,
            price,
            finalPrice,
            productlink,
            offer
          };
    
          products.push(product);
        });
    
        // Save the products to the MongoDB collection using the Product model
        await Product.insertMany(products);
    
        console.log('Data saved to MongoDB Atlas successfully.');
    
        return products;
      } catch (error) {
        console.error('Error scraping Flipkart');
        console.log("Error", error);
        //throw error;
      }
};

module.exports = {
  scrapeAmazonCategory,
  scrapeSnapdealCategory,
  scrapeFlipkartCategory,
  
};

// productController.js
const {
    scrapeAmazonCategory,
    scrapeSnapdealCategory,
    scrapeFlipkartCategory,
  } = require('./scraper');

  const scrapeAndLogProducts = async (url, source) => {
    try {
      let products;
      if (source === 'Snapdeal') {
        console.log('Scraping Snapdeal...');
        products = await scrapeSnapdealCategory(url);
      } else if (source === 'Amazon') {
        console.log('Scraping Amazon...');
        products = await scrapeAmazonCategory(url);
      } else if (source === 'Flipkart') {
        console.log('Scraping Flipkart...');
        products = await scrapeFlipkartCategory(url);
      }
      //console.log(`${category} Products (${source}):`, products);
      return products;
    } catch (error) {
      console.error(`Error scraping ${source}:`, error);
      throw error;
    }
  };

 


module.exports = { scrapeAndLogProducts };

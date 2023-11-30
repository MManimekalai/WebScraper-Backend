// productController.js
const {
    scrapeAmazonCategory,
    scrapeSnapdealCategory,
    scrapeFlipkartCategory,
  } = require('./scraper');

  const scrapeAndLogProducts = async (url, category, source) => {
    try {
      let products;
      if (source === 'Snapdeal') {
        console.log('Scraping Snapdeal...');
        products = await scrapeSnapdealCategory(url, category);
      } else if (source === 'Amazon') {
        console.log('Scraping Amazon...');
        products = await scrapeAmazonCategory(url, category);
      } else if (source === 'Flipkart') {
        console.log('Scraping Flipkart...');
        products = await scrapeFlipkartCategory(url, category);
      }
      //console.log(`${category} Products (${source}):`, products);
      return products;
    } catch (error) {
      console.error(`Error scraping ${source}:`, error);
      throw error;
    }
  };

 


module.exports = { scrapeAndLogProducts };

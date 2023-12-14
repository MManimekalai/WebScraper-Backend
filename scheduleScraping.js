// scheduleScraping.js
const cron = require('node-cron');
const { scrapeAndLogProducts } = require('./controllers/productController');
const {clearProductsCollection} = require('./controllers/index')

// Schedule the scraping task to run every 12 hours (adjust the schedule as needed)
cron.schedule('0 */12 * * *', async () => {
  await clearProductsCollection()
  console.log('Scheduled scraping started...');
  try {
    
await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=mobiles&santizedKeyword=mobiles&catId=0&categoryId=0&suggested=false&vertical=p&noOfResults=20&searchState=categoryNavigation&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=Mobile&sort=rlvncy', 'Mobile Devices', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=vacuum%20cleaner&sort=rlvncy', 'Home Appliances', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=Laptop&sort=rlvncy', 'Computers & Laptops', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=Fridge&sort=rlvncy', 'Kitchen Appliances', 'Snapdeal');

await scrapeAndLogProducts('https://www.amazon.in/s?i=electronics&rh=n%3A65320318031&fs=true&page=2&qid=1686295107&ref=sr_pg_2', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=mobile+phone&crid=2GJ1CM1W4XDW&sprefix=mobile+%2Caps%2C424&ref=nb_sb_ss_ts-doa-p_1_7', 'Mobile Devices', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=vaccum+cleaner&crid=1VRX1ACEM8YKZ&sprefix=vaccum+cleane%2Caps%2C372&ref=nb_sb_noss_2', 'Home Appliances', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=laptop&crid=2FVNXRP0U9XUD&sprefix=laptop%2Caps%2C326&ref=nb_sb_noss_1', 'Computers & Laptops', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=fridge&crid=2Q5FTYXO0BYYH&sprefix=fridge%2Caps%2C349&ref=nb_sb_noss_1', 'Kitchen Appliances', 'Amazon');

await scrapeAndLogProducts('https://www.flipkart.com/search?sid=tyy%2C4io&p%5B%5D=facets.network_type%255B%255D%3D5G&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_1_6.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_92P8Y0U07S00_wp2&fm=neo%2Fmerchandising&iid=M_b49cac28-2871-472e-8211-03e4a5d02b6e_6.92P8Y0U07S00&ppt=hp&ppn=homepage&ssid=sxpmvacw5c0000001686282140077&page=2', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Mobile Devices', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Vaccum%20Cleaner&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Home Appliances', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Computers & Laptops', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Fridge&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Kitchen Appliances', 'Flipkart');


    console.log('Scheduled scraping completed.');
  } catch (error) {
    console.error('Scheduled scraping error:', error);
  }
});

(async () => {
  await clearProductsCollection()
  try {
    console.log('Manual scraping started...');
      
    await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=mobiles&santizedKeyword=mobiles&catId=0&categoryId=0&suggested=false&vertical=p&noOfResults=20&searchState=categoryNavigation&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=Mobile&sort=rlvncy', 'Mobile Devices', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=vacuum%20cleaner&sort=rlvncy', 'Home Appliances', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=Laptop&sort=rlvncy', 'Computers & Laptops', 'Snapdeal');
//await scrapeAndLogProducts('https://www.snapdeal.com/search?keyword=Fridge&sort=rlvncy', 'Kitchen Appliances', 'Snapdeal');

await scrapeAndLogProducts('https://www.amazon.in/s?i=electronics&rh=n%3A65320318031&fs=true&page=2&qid=1686295107&ref=sr_pg_2', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=mobile+phone&crid=2GJ1CM1W4XDW&sprefix=mobile+%2Caps%2C424&ref=nb_sb_ss_ts-doa-p_1_7', 'Mobile Devices', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=vaccum+cleaner&crid=1VRX1ACEM8YKZ&sprefix=vaccum+cleane%2Caps%2C372&ref=nb_sb_noss_2', 'Home Appliances', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=laptop&crid=2FVNXRP0U9XUD&sprefix=laptop%2Caps%2C326&ref=nb_sb_noss_1', 'Computers & Laptops', 'Amazon');
//await scrapeAndLogProducts('https://www.amazon.in/s?k=fridge&crid=2Q5FTYXO0BYYH&sprefix=fridge%2Caps%2C349&ref=nb_sb_noss_1', 'Kitchen Appliances', 'Amazon');

//await scrapeAndLogProducts('https://www.flipkart.com/search?sid=tyy%2C4io&p%5B%5D=facets.network_type%255B%255D%3D5G&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_1_6.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_92P8Y0U07S00_wp2&fm=neo%2Fmerchandising&iid=M_b49cac28-2871-472e-8211-03e4a5d02b6e_6.92P8Y0U07S00&ppt=hp&ppn=homepage&ssid=sxpmvacw5c0000001686282140077&page=2', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Mobile Devices', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Vaccum%20Cleaner&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Home Appliances', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Computers & Laptops', 'Flipkart');
//await scrapeAndLogProducts('https://www.flipkart.com/search?q=Fridge&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', 'Kitchen Appliances', 'Flipkart');


    console.log('Manual scraping completed.');
  } catch (error) {
    console.error('Manual scraping error:', error);
  }
}) ();
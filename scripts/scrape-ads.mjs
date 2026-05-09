import puppeteer from 'puppeteer';
import fs from 'fs';

const KEYWORD = process.argv[2] || "roofers in oakland";

async function run() {
  console.log(`🔍 Searching Google Ads for: "${KEYWORD}"...`);
  
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  try {
    const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(KEYWORD)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
    
    await new Promise(r => setTimeout(r, 3000));
    
    console.log('✅ Search results loaded. Looking for sponsored ads...');
    
    const adLinks = await page.evaluate(() => {
      const links = [];
      
      // Bing ads usually have the class 'b_ad'
      const adContainers = document.querySelectorAll('.b_ad .b_algo');
      
      adContainers.forEach(ad => {
        const anchor = ad.querySelector('h2 a') || ad.querySelector('a');
        if (anchor) {
          const title = anchor.innerText || 'Unknown Title';
          const displayUrlSpan = ad.querySelector('cite'); 
          const displayUrl = displayUrlSpan ? displayUrlSpan.innerText : anchor.href;
          
          links.push({
            title: title.replace(/\n/g, ' '),
            url: anchor.href,
            displayUrl: displayUrl
          });
        }
      });
      
      return links;
    });

    if (adLinks.length === 0) {
      console.log('⚠️ No ads found on the first page for this keyword.');
    } else {
      console.log(`🔥 Found ${adLinks.length} businesses paying for ads!`);
      console.log(adLinks);
      
      // Save them
      fs.writeFileSync('scraped_ads.json', JSON.stringify(adLinks, null, 2));
      console.log('💾 Saved to scraped_ads.json');
    }
    
  } catch (err) {
    console.error('❌ Error during scraping:', err.message);
  } finally {
    await browser.close();
  }
}

run();
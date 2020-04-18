const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
   headless: false
 });
  const page = await browser.newPage();
  await page.goto('https://github.com/join');
await page.setDefaultNavigationTimeout(0);
let texts = await page.evaluate(() => {
  let data = []
   let elements = document.getElementsByClassName('form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus');
   for (var element of elements)
         data.push(element.name);
     return data;
   }
);
console.log(texts);
await page.screenshot({ path: "landing-page.png",  fullpage: true});
//  browser.close();
})();

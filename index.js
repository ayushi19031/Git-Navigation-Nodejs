const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const puppeteer = require('puppeteer');
var url = require('url');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
  var username  = req.body.emailid;
  var password  = req.body.Password;
  res.send("The information is " + username + " " + password);
});
app.listen(3000, function(){
  console.log("Server is up and running at port 3000");
//  res.send(username + " " + password);
});
(async () => {
  const browser = await puppeteer.launch({
   headless: false
 });
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  //console.log("Logged in successfully");
  await page.type('#login_field', "ayushij2704@gmail.com");
 await page.type('#password', "ayushij@27");
 console.log("Logged in successfully");
 await page.click('[name="commit"]')
await page.setDefaultNavigationTimeout(0);

console.log("Yeah!! ");
await page.goto("https://github.com/settings/tokens");
console.log("Hello");
console.log("Hello");
console.log("Hello");
const list = await page.evaluate(() =>
{let x = document.getElementsByClassName("ml-2 details-reset details-overlay details-overlay-dark");
return x
});
console.log(list);
console.log(page.frames());
await page.screenshot({ path: "landing-page.png",  fullpage: true});
})();

const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function miner(url) {
  const browser = await puppeteer.launch({ headless: 1 });
  const page = await browser.newPage();
  await page.goto(url);

  //Grab text content or src from name, photo, and price

  const data = await page.$$eval(".grid-view-item", (items) => {
    return items.map((item) => {
      const name = item
        .querySelector(".product-grid--title > a")
        .textContent.trim();
      const photo = item.querySelector("img").src;
      const priceElement = item.querySelector(".product-grid--price .money");
      const price = priceElement
        ? priceElement.textContent
        : "Price not available";
      const productPage = item.querySelector(".grid__image__match").href;
      return { name, photo, price, productPage };
    });
  });

  await fs.writeFile(
    "miners/product-data.txt",
    JSON.stringify(data.length === 0 ? "No data available" : data)
  );

  await browser.close();
}

module.exports = { miner };

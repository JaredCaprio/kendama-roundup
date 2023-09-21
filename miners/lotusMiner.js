const fs = require("fs/promises");
const { dataFileNames } = require("../JSONdata/dataFileNames");
const { launchBrowser } = require("./puppeteerBrowserInit");

async function lotusMiner(url) {
  const { browser, page } = await launchBrowser(url);

  //Grab text content or src from name, photo, and price
  const data = await page.$$eval(".grid-view-item", (items) => {
    return items.map((item) => {
      const title = item
        .querySelector(".product-grid--title > a")
        .textContent.trim();
      const photo = item.querySelector("img").src;
      const priceElement = item.querySelector(".product-grid--price .money");
      const price = priceElement
        ? priceElement.textContent
        : "Price not available";
      const productPage = item.querySelector(".grid__image__match").href;
      return { title, photo, price, productPage };
    });
  });

  await fs.writeFile(
    dataFileNames.lotus,
    JSON.stringify(data.length === 0 ? "No data available" : data)
  );

  await browser.close();
}

module.exports = { lotusMiner };

const fs = require("fs/promises");
const { dataFileNames } = require("../JSONdata/dataFileNames");
const { launchBrowser } = require("./puppeteerBrowserInit");

async function kromMiner(url, route) {
  const { browser, page } = await launchBrowser(url);

  let prevHeight = 0;
  let currentHeight = await page.evaluate("document.body.scrollHeight");

  while (prevHeight !== currentHeight) {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await new Promise((r) => setTimeout(r, 1000)); // Wait for a second
    prevHeight = currentHeight;
    currentHeight = await page.evaluate("document.body.scrollHeight");
  }

  //Grab text content or src from name, photo, and price
  const data = await page.$$eval(".product-item", (items) => {
    return items.map((item) => {
      const title = item
        .querySelector(".product-item > div > p:nth-child(3) > a")
        .textContent.trim();
      const srcSetAttr = item
        .querySelector("img.h-full.w-full")
        .getAttribute("srcset");
      const photo = srcSetAttr
        ? srcSetAttr
            .split(",")
            .pop()
            .trim()
            .replace(/\s*\d+w$/, "")
            .replace(/^/, "https:")
        : "No Photo Available";

      const priceElement = item.querySelector(
        ".product-item > div > p:nth-child(4) .font-bold.mr-3"
      );
      const price = priceElement
        ? priceElement.innerText
        : "Price not available";
      const productPage = item.querySelector(".block.mb-2").href;
      return { title, photo, price, productPage };
    });
  });
  console.log(data);
  try {
    await fs.writeFile(
      dataFileNames.krom[route],
      JSON.stringify(data.length === 0 ? "No data available" : data),
      (err) => {
        if (err) throw err;
      }
    );
  } catch (error) {
    console.log("error");
    console.error(err);
  }

  await browser.close();
}

module.exports = { kromMiner };

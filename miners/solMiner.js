const fs = require("fs");
const { dataFileNames } = require("../JSONdata/dataFileNames");
const { launchBrowser } = require("./puppeteerBrowserInit");

async function solMiner(url) {
  const { browser, page } = await launchBrowser(url);

  const pageNumArr = await page.$$eval("#pagination > span.page", (items) => {
    return items.map((item) => {
      return item.textContent;
    });
  });

  let currPage = 1;
  let lastPage = parseInt(pageNumArr[pageNumArr.length - 1]);

  let dataToWrite = [];

  while (currPage <= lastPage) {
    const splitUrl = url.split("?");

    const currUrl =
      currPage <= 1 ? url : `${splitUrl[0]}?page=${currPage}&${splitUrl[1]}`;
    await page.goto(currUrl);
    const data = await page.$$eval(".spf-col-xl-4", (items) => {
      return items.map((item) => {
        const title = item.querySelector(".info > .title").textContent.trim();
        const price = item
          .querySelector(".info > .price > .money > .money")
          .textContent.trim()
          .split(" ")
          .slice(0, -1)
          .join("");
        const photo = item.querySelector("img").src;
        const productPage = item.querySelector("a").href;

        return { title, photo, price, productPage };
      });
    });
    dataToWrite.push(...data);
    currPage++;
  }

  fs.writeFile(
    dataFileNames.sol,
    JSON.stringify(
      dataToWrite.length === 0 ? "No Data Available" : dataToWrite
    ),
    (err) => {
      if (err) throw err;
      console.log("Data written to file");
    }
  );

  await browser.close();
}

module.exports = { solMiner };

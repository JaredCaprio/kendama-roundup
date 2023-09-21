const puppeteer = require("puppeteer");

async function launchBrowser(url) {
  const browser = await puppeteer.launch({
    headless: 1,
    args: ["--proxy-server=p.webshare.io:80"],
  });

  const page = await browser.newPage();

  await page.authenticate({
    username: process.env.WEBSHARE_USERNAME,
    password: process.env.WEBSHARE_PASSWORD,
  });
  await page.goto(url);

  return { browser, page };
}

module.exports = { launchBrowser };

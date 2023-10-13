const puppeteer = require("puppeteer");

async function launchBrowser(url) {
  const runHeadless = process.env.NODE_ENV === "production";

  const browser = await puppeteer.launch({
    headless: runHeadless,
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

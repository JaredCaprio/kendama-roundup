const express = require("express");
const app = express();
const fs = require("fs/promises");
const { miner } = require("./miners/dataMiners.js");

async function minerMiddleware(req, res, next) {
  const url = res.locals.url; // Retrieve the URL from res.locals
  if (!url) {
    return res.status(400).json({ error: "URL not provided" });
  }

  await miner(url);

  fs.readFile("miners/product-data.txt", "utf-8")
    .then((content) => {
      const jsondata = JSON.parse(content);
      res.locals.jsondata = jsondata; // Store the parsed JSON data in res.locals
      next(); // Move to the next middleware/route handler
    })
    .catch((error) => {
      console.error("Error reading file:", error);
      res.status(500).json({ error: "Error reading file" });
    });
}

const urlToRoute = {
  "/kendamas": "https://lotuskendamas.com/collections/sacred-shape",
  "/apparel": "https://lotuskendamas.com/collections/apparel",
  "/accessories": "https://lotuskendamas.com/collections/accessories",
};

app.get(
  "/kendamas",
  (req, res, next) => {
    res.locals.url = urlToRoute["/kendamas"];
    next();
  },
  minerMiddleware,
  (req, res) => {
    res.json(res.locals.jsondata);
  }
);

app.get(
  "/apparel",
  (req, res, next) => {
    res.locals.url = urlToRoute["/apparel"];
    next();
  },
  minerMiddleware,
  (req, res) => {
    res.json(res.locals.jsondata);
  }
);

app.get(
  "/accessories",
  (req, res, next) => {
    res.locals.url = urlToRoute["/accessories"];
    next();
  },
  minerMiddleware,
  (req, res) => {
    res.json(res.locals.jsondata);
  }
);

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

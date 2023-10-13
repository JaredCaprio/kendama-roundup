const fs = require("fs/promises");

const { dayChecker } = require("../middleware/dayChecker");

function minerMiddleware(dataFileName, minerFunc, storeName, route) {
  return async (req, res, next) => {
    const url = res.locals.url; // Retrieve the URL from res.locals
    if (!url) {
      return res.status(400).json({ error: "URL not provided" });
    }

    const date = new Date();
    const APINotScrapedToday = dayChecker(
      date.getDate().toString(),
      storeName,
      route
    );
    console.log(APINotScrapedToday);

    try {
      if (APINotScrapedToday) {
        await minerFunc(url, route);
      }

      const content = await fs.readFile(dataFileName, "utf-8");
      const jsondata = JSON.parse(content);
      res.locals.jsondata = jsondata;

      next();
    } catch (error) {
      console.error("Error reading file:", error, "bitch cunt");
      res.status(500).json({ error: "Error reading file" });
    }
  };
}

module.exports = { minerMiddleware };

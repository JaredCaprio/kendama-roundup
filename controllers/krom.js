const { urlToRoute } = require("../JSONdata/urls");

module.exports = {
  kendamas: (req, res, next) => {
    res.locals.url = urlToRoute.krom["/kendamas"];
    next();
  },

  apparel: (req, res, next) => {
    res.locals.url = urlToRoute.krom["/apparel"];
    next();
  },

  accessories: (req, res, next) => {
    res.locals.url = urlToRoute.krom["/accessories"];
    next();
  },

  sendJSON: (req, res) => {
    res.json(res.locals.jsondata);
  },
};

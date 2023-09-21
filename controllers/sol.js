const { urlToRoute } = require("../JSONdata/urls");

module.exports = {
  kendamas: (req, res, next) => {
    res.locals.url = urlToRoute.sol["/kendamas"];
    next();
  },

  apparel: (req, res, next) => {
    res.locals.url = urlToRoute.sol["/apparel"];
    next();
  },

  accessories: (req, res, next) => {
    res.locals.url = urlToRoute.sol["/accessories"];
    next();
  },

  sendJSON: (req, res) => {
    res.json(res.locals.jsondata);
  },
};

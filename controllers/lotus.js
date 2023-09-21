const { urlToRoute } = require("../JSONdata/urls");

module.exports = {
  kendamas: (req, res, next) => {
    res.locals.url = urlToRoute.lotus["/kendamas"];
    next();
  },

  apparel: (req, res, next) => {
    res.locals.url = urlToRoute.lotus["/apparel"];
    next();
  },

  accessories: (req, res, next) => {
    res.locals.url = urlToRoute.lotus["/accessories"];
    next();
  },

  sendJSON: (req, res) => {
    res.json(res.locals.jsondata);
  },
};

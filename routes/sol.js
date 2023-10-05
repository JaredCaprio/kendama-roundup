const express = require("express");
const router = express.Router();
const solController = require("../controllers/sol");
const { minerMiddleware } = require("../middleware/minerMiddleware");
const { solMiner } = require("../miners/solMiner");
const { dataFileNames } = require("../JSONdata/dataFileNames");

// @desc  show all sol kendamas
// @route GET /sol/kendamas
router.get(
  "/kendamas",
  solController.kendamas,
  minerMiddleware(
    dataFileNames.sol.kendamas,
    solMiner,
    dataFileNames.sol.storeName,
    "kendamas"
  ),
  solController.sendJSON
);

// @desc  show all sol apparel
// @route GET /sol/apparel
router.get(
  "/apparel",
  solController.apparel,
  minerMiddleware(
    dataFileNames.sol.apparel,
    solMiner,
    dataFileNames.sol.storeName,
    "apparel"
  ),
  solController.sendJSON
);

// @desc  show all sol accessories
// @route GET /sol/accessories
router.get(
  "/accessories",
  solController.accessories,
  minerMiddleware(
    dataFileNames.sol.accessories,
    solMiner,
    dataFileNames.sol.storeName,
    "accessories"
  ),
  solController.sendJSON
);

module.exports = router;

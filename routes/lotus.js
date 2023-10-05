const express = require("express");
const router = express.Router();
const lotusController = require("../controllers/lotus");
const { minerMiddleware } = require("../middleware/minerMiddleware");
const { lotusMiner } = require("../miners/lotusMiner");
const { dataFileNames } = require("../JSONdata/dataFileNames");

// @desc  show all lotus kendamas
// @route GET /lotus/kendamas
router.get(
  "/kendamas",
  lotusController.kendamas,
  minerMiddleware(
    dataFileNames.lotus.kendamas,
    lotusMiner,
    dataFileNames.lotus.storeName,
    "kendamas"
  ),
  lotusController.sendJSON
);

// @desc  show all lotus apparel
// @route GET /lotus/apparel
router.get(
  "/apparel",
  lotusController.apparel,
  minerMiddleware(
    dataFileNames.lotus.apparel,
    lotusMiner,
    dataFileNames.lotus.storeName,
    "apparel"
  ),
  lotusController.sendJSON
);
router.get(
  "/accessories",
  lotusController.accessories,
  minerMiddleware(
    dataFileNames.lotus.accessories,
    lotusMiner,
    dataFileNames.lotus.storeName,
    "accessories"
  ),
  lotusController.sendJSON
);

module.exports = router;

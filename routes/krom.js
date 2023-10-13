const express = require("express");
const router = express.Router();
const kromController = require("../controllers/krom");
const { minerMiddleware } = require("../middleware/minerMiddleware");
const { kromMiner } = require("../miners/kromMiner");
const { dataFileNames } = require("../JSONdata/dataFileNames");

// @desc  show all krom kendamas
// @route GET /krom/kendamas
router.get(
  "/kendamas",
  kromController.kendamas,
  minerMiddleware(
    dataFileNames.krom.kendamas,
    kromMiner,
    dataFileNames.krom.storeName,
    "kendamas"
  ),
  kromController.sendJSON
);

// @desc  show all krom apparel
// @route GET /krom/apparel
router.get(
  "/apparel",
  kromController.apparel,
  minerMiddleware(
    dataFileNames.krom.apparel,
    kromMiner,
    dataFileNames.krom.storeName,
    "apparel"
  ),
  kromController.sendJSON
);
router.get(
  "/accessories",
  kromController.accessories,
  minerMiddleware(
    dataFileNames.krom.accessories,
    kromMiner,
    dataFileNames.krom.storeName,
    "accessories"
  ),
  kromController.sendJSON
);

module.exports = router;

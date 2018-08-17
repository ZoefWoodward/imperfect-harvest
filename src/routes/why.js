const express = require("express");
const router = express.Router();
const whyController = require("../controllers/whyController");

router.get("/why", whyController.index);

module.exports = router;
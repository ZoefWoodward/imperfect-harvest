const express = require("express");
const router = express.Router();
const preferencesController = require("../controllers/preferencesController");

router.get("/preferences", preferencesController.index);

module.exports = router;
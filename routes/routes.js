const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("main");
});

router.get("/items", (req, res) => {
  return res.render("items");
});

router.get("/blocks", (req, res) => {
  return res.render("blocks");
});

module.exports = router;

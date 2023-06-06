const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("main");
});

// adds dogs route

// add main route

module.exports = router;

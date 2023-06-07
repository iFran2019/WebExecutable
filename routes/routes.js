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

router.post("/items", (req, res) => {
  const data = req.params;
  const datatoyml = {
    name: ``,
  };
  
  const json = JSON.stringify(data, null, 2);
  const parsedData = JSON.parse(json);
  const yamlData = yaml.dump(parsedData);
  
  console.log('JSON:');
  console.log(json);
  console.log('YAML:');
  console.log(yamlData);
})

module.exports = router;

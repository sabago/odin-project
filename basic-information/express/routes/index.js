var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res) {
//   res.render("index", { title: "Home page 🏠" });
// });

router.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there! Greetings!' })
  })
module.exports = router;
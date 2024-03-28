var express = require("express");
var router = express.Router();

/* GET about page. */
router.get('/', (req, res) => {
    res.render('about', { title: 'About', message: `Hi, I'm Sandra, an experienced full stack engineer` })
  })
// router.get("/", function (req, res) {
//   res.render("about", { title: "About page 🔺" });
// });

module.exports = router;
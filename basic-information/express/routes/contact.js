var express = require("express");
var router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
    res.render('contact', { title: 'Contact', message: 'Email me at  newcoderontheblock at gmail dot com' })
  })
// router.get("/", function (req, res) {
//   res.render("contact", { title: "Contact page 📞" });
// });

module.exports = router;
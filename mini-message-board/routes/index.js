const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res) {
  res.render('form', { title: "Post a New Message" });
});

/* POST new message */
router.post('/new', function(req, res) {
  // Extracting form data
  const userName = req.body.user;
  const messageText = req.body.text;

  // Creating a new message object
  const newMessage = {
    text: messageText,
    user: userName,
    added: new Date()
  };

  // Adding the new message to the array
  messages.push(newMessage);

  // Redirecting back to the home page to display all messages including the new one
  res.redirect('/');
});

module.exports = router;

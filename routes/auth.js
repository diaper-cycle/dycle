const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

// signup
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

//the signup form posts in this route
router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  console.log( username, password);
  if (password.length < 8) {
    res.render('signup', {message: 'Your password must be 8 characters minimum.'});
  }
  if(username ==='') {
    res.render('signup', {message: 'Your username cannot be empty.'});
  }
  User.findOne({ username: username })
    .then(userFromDB => {
      if (userFromDB != null) {
        res.render('signup', {message: 'Username is already taken.'});
    } else {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt)
        User.create({username: username, password: hash})
          .then(userFromDB => {
            console.log(userFromDB);
            res.redirect('/login');
          });
          
    }
  })
  .catch(err => {
    console.logg(err);
  })
});

// login
router.get("/login", (req, res, next) => {
  res.render("login");
});

module.exports = router;
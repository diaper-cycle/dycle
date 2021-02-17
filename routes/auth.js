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
        User.create({username: username, passwordHash: hash})
          .then(userFromDB => {
            console.log(userFromDB);
            //can be redirect to /locations view
            res.redirect('/login');
          })     
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

//the login form posts in this route
router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
 
  if (username === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, username and password to login.'
    });
    return;
  }
 
  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'username is not registered.' });
        return;
      } else if (bcrypt.compareSync(password, user.passwordHash)) {
        res.redirect('/test');
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});
 

module.exports = router;
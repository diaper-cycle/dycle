const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

// signup
router.get('/signup', (req, res) => res.render('signup'));

// login
router.get('/login', (req, res) => res.render('login'));

//the signup form posts in this route
router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  console.log('1', username, password);
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
        console.log('RIGHT ROUTE')
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt)
        User.create({username: username, password: hash})
          .then(userFromDB => {
            console.log('2', userFromDB);
            res.redirect('/location');
          })     
    }
  })
  .catch(err => {
    console.logg(err);
  })
});

//the login form posts in this route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
  passReqToCallback: true
})
);

module.exports = router;
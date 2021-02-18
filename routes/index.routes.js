//const router = require("express").Router();
//or:
const express = require('express');
const router = express.Router();

const Pickuplocations = require ("../models/PickupLocation");

const Pickuplocations = require("../models/PickupLocation");


// middleware to check if the user is logged in
const loginCheck = () => {
  return (req, res, next) => {
    // if user is logged in proceed to the next step
    if (req.session.user) {
      next();
    } else {
      // otherwise redirect to /login
      res.redirect('/login');
    }
  }
}

/* GET home page */
// router.get('/', (req, res, next) => {
//   const user = req.session.user;
//   res.render('index', { user: user });
// });

router.get('/', (req, res) => res.render('index', { title: 'Check your Dycle Pick-up location' }));


router.get('/locations', (req, res) => {
  // get locations the database -> find() returns all the documents
  Pickuplocations.find().then(locationsFromDB => {
    console.log("this is the response",locationsFromDB);
    // render a books view to display them
    res.render('locations/locationLayoutLocations', { locationsList: locationsFromDB })
  }).catch(err => {
    console.log(err);
  })
})

router.get('/profile', loginCheck(), (req, res) => {
  res.render('profile');
})

module.exports = router;

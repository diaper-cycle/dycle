const router = require('express').Router();
const Pickuplocations = require("../models/PickupLocation")

router.get('/', (req, res, next) => {
  res.render('test');
})

router.get("/test", (req, res, next) => {
  Pickuplocations.find().then((pickUpfromDB) => {
    console.log(pickUpfromDB)
    res.render("test.hbs", {pickUpfromDB})
  })
});

// router.get("/locations", (req, res, next) => {
//   res.render("locations");
// });



module.exports = router;
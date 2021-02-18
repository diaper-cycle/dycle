const router = require('express').Router();
const Pickuplocations = require("../models/PickupLocation")

/* router.get('/', (req, res, next) => {
  res.render('test');
}) */

// RENDER HBS AND DATA
router.get("/test", (req, res, next) => {
  console.log("working");
  Pickuplocations.find().then((pickUpfromDB) => {
    console.log(pickUpfromDB)
    res.render("test.hbs", {pickUpfromDB})
  })
});

// router.get("/locations", (req, res, next) => {
//   res.render("locations");
// });


// ADD NEW LOCATION
router.post('/test', (req, res) => {
  console.log(req.body);
  const locationName = req.body.title;
  const street = req.body.street;
  const nr = req.body.nr;
  const zip = req.body.zip;
  const imageLink = req.body.imageLink;
  const stock = req.body.stock;
  // const { title, author, decription, rating } = req.body; 
  console.log('this is the loco field: ', locationName);
  // console.log(title, author, description, rating);
  Pickuplocations.create({
    locationName: locationName,
    address: {
      street: street,
      houseNumber: nr,
      zip: zip
    },
    image: imageLink,
    stock: stock,
  })
    .then(pickUpfromDB => {
      console.log('this location was just created: ', pickUpfromDB);
      res.render('test.hbs', {pickUpfromDB});
      /* res.redirect('test.hbs'); */
    })
})


//DELETE LOCATIONS
router.get('/test/delete/:id', (req, res) => {
  const locID = req.params.id;
  Pickuplocations.findByIdAndDelete(locID)
    .then(() => {
      // redirect to the Location list
      res.redirect('/test')
    })
    .catch(err => {
      console.log(err);
    })
})

//DIRECT TO SPECIFIC EDIT-LOCATIONS-PAGE
router.get('/test/edit/:id', (req, res) => {
  const locID = req.params.id;
  Pickuplocations.findById(locID)
    .then(pickUpFromDB => {
      console.log(pickUpFromDB);
      res.render('testEdit.hbs', {pickUpFromDB});
    })
})

//EDIT SPECIFIC LOCATION IN DB
router.post('/test/edit/:id', (req, res) => {
  console.log(req.body);
  const locID = req.params.id;
  const locationName = req.body.title;
  const street = req.body.street;
  const nr = req.body.nr;
  const zip = req.body.zip;
  const imageLink = req.body.imageLink;
  const stock = req.body.stock;
  // const { title, author, decription, rating } = req.body; 
  Pickuplocations.findByIdAndUpdate(locID, {
    locationName: locationName,
    address: {
      street: street,
      houseNumber: nr,
      zip: zip
    },
    image: imageLink,
    stock: stock,
  })
    .then(book => {
      res.redirect(`../`);
    })
    .catch(err => {
      console.log(err);
    })
})


module.exports = router;
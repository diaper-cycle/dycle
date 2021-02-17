const mongoose = require('mongoose');

const Warehouse = require("./models/Warehouse");
const PickupLocation = require("./models/PickupLocation");
const User = require("./models/User");

mongoose.connect('mongodb://localhost/dycle', {
    userNewUrlParser: true
});


// ADD PickupLocations
const pickupLocations = [
    {
        locationName: "Kita Kritzelknirpse",
        address: {
            street: "Lychener Str.",
            houseNumber: 55,
            zip: 10437
        },
        stock: 230,
        image: "https://www.pfefferwerk.de/wp-content/uploads/2018/07/Kritzelknirpse-2.jpg"
    },
    {
        locationName: "Kindergarten Milchzahnbande",
        address: {
            street: "Prenzlauer Allee",
            houseNumber: 115,
            zip: 10409
        },
        stock: 40,
        image: "https://www.inbruehl.com/images/stories/2009_09/k_milchzahnbande0909.jpg"
    },
    {
        locationName: "Kita Sonnenblume",
        address: {
            street: "Schwebelstraße",
            houseNumber: 22,
            zip: 12305
        },
        stock: 180,
        image: "https://mar.prod.image.rndtech.de/var/storage/images/maz/lokales/teltow-flaeming/mehr-plaetze-fuer-kita-sonnenblume-geplant/626856551-2-ger-DE/Mehr-Plaetze-fuer-Kita-Sonnenblume-geplant_big_teaser_article.jpg"
    }
];

PickupLocation.insertMany(pickupLocations)
    .then(pickupLocations => {
        console.log(`Success! Added ${pickupLocations.length} pickupLocations to the database.`);
        mongoose.connections.close();
    })
    .catch(err => {
        console.log(err);
    })


// ADD our warehouses
const warehouses = [
    {
    warehouseName: "Dycle Headquarters",
    address: {
        street: "Friedrichstrasse",
        houseNumber: 200,
        zip: 10117
      },
    stock: 4000
  }
];

Warehouse.insertMany(warehouses)
    .then(warehouses => {
        console.log(`Success! Added ${warehouses.length} pickupLocations to the database.`);
        mongoose.connections.close();
    })
    .catch(err => {
        console.log(err);
    })


// ADD Users
const users = [
    {
    username: "Tamy100",
    email: "tamy100@hotmail.de",
    password: "123456",
    firstname: "Tamara",
    lastname: "Gast",
    address: {
        street: "Tölpelstr.",
        houseNumber: 100,
        zip: 10889
    }
    },
    {
        username: "DoggoLover",
        email: "Dorothea.Wierer@gmail.com",
        password: "654321",
        firstname: "Dorothea",
        lastname: "Wierer",
        address: {
            street: "Torfstr.",
            houseNumber: 18,
            zip: 13353
        }
    }
];

User.insertMany(users)
    .then(users => {
        console.log(`Success! Added ${users.length} pickupLocations to the database.`);
        mongoose.connections.close();
    })
    .catch(err => {
        console.log(err);
    })
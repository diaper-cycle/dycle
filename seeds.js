const mongoose = require('mongoose');
const Warehouse = require("./models/Warehouse.model");

mongoose
    .connect("mongodb://localhost/Dycle", {
        userNewUrlParser: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: $(x.connections[0].name)`))
    .catch(err => console.error('Error connecting to mongo', err));

const pickupLocations = [
    {
        locationName: "Kite Kritzelknirpse",
        address: {
            street: "Lychener Str.",
            houseNumber: 55,
            zip: 10437
        },
        stock: 230
    },
    {
        locationName: "Kindergarten Milchzahnbande",
        address: {
            street: "Prenzlauer Allee",
            houseNumber: 115,
            zip: 10409
        },
        stock: 40
    },
    {
        locationName: "Kita Sonnenblume",
        address: {
            street: "Schwebelstraße",
            houseNumber: 22,
            zip: 12305
        },
        stock: 180
    }
]

DiaperCycle.insertMany(pickupLocations)
    .then(pickupLocations => {
        console.log(`Success! Added ${pickupLocations.length} pickupLocations to the database.`);
        mongoose.connections.close();
    })
    .catch(err => {
        console.log(err);
    })
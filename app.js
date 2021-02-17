// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');

const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// default value for title local
const projectName = "dycle";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with IronGenerator`;

// 👇 Start handling routes here
//
const index = require("./routes/index.routes");
app.use("/", index);
//

const auth = require("./routes/auth");
app.use("/", auth);

//Make static files inside of 'public' accessable
app.use(express.static(path.join(__dirname, 'public')));

//Make everything inside of 'views' accessable
//And allow handlebars to take charge of the views
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'hbs');

//Register all partials to make them available
hbs.registerPartials(__dirname + "/views/partials");

//Test
app.get("/test", (req, res, next) => {
    const locos = [
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
    res.render("test", {locos});
});

app.get("/locations", (req, res, next) => {
    res.render("locations");
});


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);


module.exports = app;

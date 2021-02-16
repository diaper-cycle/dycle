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
const testing = require("./routes/testing");
app.use("/", testing);
//

const auth = require("./routes/auth");
app.use("/", auth);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

app.listen(3000, () => {
    console.log("App listening at port:3000");
});

module.exports = app;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var session = require('express-session');
const routes = require("./routes");
const PATH = require('path');
const PORT = process.env.PORT || 3001;
var MongoStore = require('connect-mongo')(session);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/testreactchorelist",
  {
    useMongoClient: true
  }
);
var db = mongoose.connection;
//use for tracking logins 
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV) {
  // Serve up static assets
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


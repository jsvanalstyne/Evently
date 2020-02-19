const express = require("express");

require('dotenv').config();

const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3030;

// Square pay stuff
const crypto = require('crypto');
const squareConnect = require('square-connect');
const accessToken = process.env.PAY_TOKEN;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// redis stuffs
const redis = require("redis");
// let redisURL = process.env.REDIS_URL || "127.0.0.1"
// const client = redis.createClient(redisURL);

const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379
});

client.on("connect", () => {
  console.log("redis connected");
  app.set("cache", client);
  // app.use("cache", client);
});

client.on("error", err => {
  console.log(err);
});
// Add routes, both API and view
app.use(routes);

// More square stuff
// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Balls");
// mongodb://user:userpassword1@ds157276.mlab.com:57276/heroku_b1dcvdgd
// MONGODB_URI=mongodb://user:userpassword1@ds157276.mlab.com:57276/heroku_b1dcvdgd

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Balls"
console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// MONGODB_URI=mongodb://user2020:userpassword2020@ds157276.mlab.com:57276/heroku_b1dcvdgd

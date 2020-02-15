const express = require("express");

require('dotenv').config();

const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3030;

// Square pay stuff
const crypto = require('crypto');
const squareConnect = require('square-connect');
const accessToken = 'EAAAEBBwzDGOZMRiQ9mLCf8K37RfcKDTXENE4OgSSJ2X9EoS16pP3SzOJkb_nqDh';
// const redis = require("redis");
// const client = redis.createClient({
//   host: "127.0.0.1",
//   port: 6379
// });
// client.on("connect", () => {
//   console.log("redis connected");
//   app.set("cache", client);
//   // app.use("cache", client);
// });
// client.on("error", err => {
//   console.log(err);
// });
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
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

// app.post('/process-payment', async (req, res) => {
//   const request_params = req.body;
//   console.log(request_params)

//   // length of idempotency_key should be less than 45
//   const idempotency_key = crypto.randomBytes(22).toString('hex');

//   // Charge the customer's card
//   const payments_api = new squareConnect.PaymentsApi();
//   const request_body = {
//     source_id: request_params.nonce,
//     amount_money: {
//       amount: 100, // $1.00 charge
//       currency: 'USD'
//     },
//     idempotency_key: idempotency_key
//   };

//   try {
//     const response = await payments_api.createPayment(request_body);
//     res.status(200).json({
//       'title': 'Payment Successful',
//       'result': response
//     });
//   } catch(error) {
//     res.status(500).json({
//       'title': 'Payment Failure',
//       'result': error.response.text
//     });
//   }
// });

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


// MONGODB_URI=mongodb://user:userpassword1@ds157276.mlab.com:57276/heroku_b1dcvdgd
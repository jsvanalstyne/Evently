const router = require("express").Router();
const crypto = require('crypto');
const squareConnect = require('square-connect');
const accessToken = process.env.PAY_TOKEN;
const auth = require("../auth/authorization.js");
const Bills = require("../../models/Bills");
const billsController = require("../../controllers/API/Bills");
const Events = require("../../controllers/API/Events");
const Programs = require("../../controllers/API/Programs")


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

router.post('/process', auth, async (req, res) => {
  // let cache = req.app.get("cache")
  // cache.get(user${req.user.id}) gives us the users id within our db
  console.log("we got in here")

  // console.log("the first thing")
  // return res.json({"message": "we in here"})
  console.log("IN POST ROUTE")
  const request_params = req.body;
  console.log(request_params)
  const eventId = req.body.eventId
  const userId = req.user.id;
  const type = req.body.type;
  // creating a bill for the users payemnt
  console.log("user: " + req.user.name);
  console.log(request_params.amount/100)
  // need to pass in userId, billAmount and cb
  billsController.createBillforPayment(req.user.id, (request_params.amount/100), request_params.eventId, function(results) {
    console.log("bill results: " + results)
  })

  // length of idempotency_key should be less than 45
  const idempotency_key = crypto.randomBytes(22).toString('hex');

  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi();
  const request_body = {
    eventId: request_params.id,
    source_id: request_params.nonce,
    amount_money: {
      amount: request_params.amount, // $1.00 charge
      currency: 'USD'
    },
    idempotency_key: idempotency_key
  };

  try {
    const response = await payments_api.createPayment(request_body);
    console.log("line 63 in payment.js "+ type)
    switch (type){
      case "program":
          Programs.addUserToProgram(eventId, userId, function(res){
            console.log(res);
          });
        break;
      case "event":
          Events.addUserToEvent(eventId, userId, function(res){
            console.log(res);
          });
        break;
      default:
        console.log("broke switch")
    }

   
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  }
});

module.exports = router;
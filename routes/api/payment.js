const router = require("express").Router();
const crypto = require('crypto');
const squareConnect = require('square-connect');
const accessToken = 'EAAAEBBwzDGOZMRiQ9mLCf8K37RfcKDTXENE4OgSSJ2X9EoS16pP3SzOJkb_nqDh';
const Events = require("../../controllers/API/Events");
const userId ="5e35c71607cf87e4497c4187";
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

router.post('/process', async (req, res) => {
    // console.log("the first thing")
    // return res.json({"message": "we in here"})
    console.log("IN POST ROUTE")
    const request_params = req.body;
    console.log(request_params)
    const eventId = req.body.eventId
    console.log(eventId);
    
  
    // length of idempotency_key should be less than 45
    const idempotency_key = crypto.randomBytes(22).toString('hex');
  
    // Charge the customer's card
    const payments_api = new squareConnect.PaymentsApi();
    const request_body = {
      eventId: request_params.id,
      source_id: request_params.nonce,
      amount_money: {
        amount: 100, // $1.00 charge
        currency: 'USD'
      },
      idempotency_key: idempotency_key
    };
  
    try {
      const response = await payments_api.createPayment(request_body);
      Events.addUserToEvent(eventId, userId, function(res){
        console.log(res);
      })
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
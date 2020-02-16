// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Converstions = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const blanketAuthorization = require("../auth/authorization.js");

// route to get all conversations associated with one user
router.get("/all", blanketAuthorization, (req, res) => {
    console.log('we got in here');

    console.log("current user:");
    console.log(req.user);
});

module.exports = router;
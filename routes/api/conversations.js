// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Converstions = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const blanketAuthorization = require("../auth/authorization.js");
console.log(blanketAuthorization);

// route to get all conversations associated with one user
router.get("/all", (req, res) => {
    let userId
    console.log('we got in here');

    console.log("current user:");
    console.log(req.user);
});

module.exports = router;
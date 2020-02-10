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
router.get("/all", async (req, res) => {
    let authIdAsString = req.user.id;

    let userId = req.cache.get(authIdString) || await Users.findByAuthId(authIdAsString)
});

module.exports = router;
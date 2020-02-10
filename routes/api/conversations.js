// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Converstions = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const blanketAuthorization = require("../auth/authorization.js");


// route to get all conversations associated with one user
router.get("/all", blanketAuthorization, async (req, res) => {
    let cache = req.app.get("cache");
    
    let userId = await Users.findByAuthId(req.user.id);
    userId = userIds[0]._id;

    Converstions.getConversationsByUser(userId, result => {
        
    })
    
});

module.exports = router;
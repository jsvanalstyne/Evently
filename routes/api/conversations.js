// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Conversations = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const blanketAuthorization = require("../auth/authorization.js");


// route to get all conversations associated with one user
router.get("/all", blanketAuthorization, async (req, res) => {
    // grabbing cache from app
    let cache = req.app.get("cache");
    // getting user id from cache
    // let userId = cache.get(`user${req.user.id}`);
    let userId = "5e35c71607cf87e4497c418b";
    // getting all conversation Ids that the user is a part of
    try {
        Conversations.getConversationsByUser(userId, convResults => {
            // checking to see if the user has any conversations
            if(convResults.length < 1) {
                return res.json({
                    "message": "You don't have any conversations yet"
                })
                .status(200)
            }
            // getting messages from latest conversations to be displayed on
            // opening screen in client
            Conversations.getMessagesByConversation(convResults[0]._id, messResults => {
                // returning conversations and opening messages to client
                return res.json({
                    "conversations": convResults, 
                    "messages": messResults
                })
                .status(200);
            })
        });
    } catch(error) {
        return res.json({
            "message": "Couldn't get messages from user", 
            "error": error
        })
        .status(404);
    }

});

module.exports = router;
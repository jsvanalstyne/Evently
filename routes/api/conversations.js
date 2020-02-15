// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Conversations = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const auth = require("../auth/authorization.js");


// route to get all conversations associated with one user
router.get("/all", auth, async (req, res) => {
    // route to get all conversations associated with one user
    router.get("/all", auth, (req, res) => {
        // getting conversations with authorized user id 
        Conversations.getConversationsByUser(req.user.id)
        .then(conversations => {
            // get all messages and senders associated with the most recent conversation
            Conversations.getMessagesByConversation(conversations[0]._id)
            .then(messages => {
                // if no errors, sending conversations and messgaes back to client
                res.json({
                    "conversations": conversations, 
                    "messages": messages
                })
                .status(200);
            })
        
        })
        .catch(err => {
            console.log(err);
        })

    });
});

module.exports = router;
// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Conversations = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const auth = require("../auth/authorization.js");
// middleware for gett live sockets
const getUsers = require("./chat.js");


// route to get all conversations associated with one user
router.get("/all", auth, (req, res) => {
    // getting conversations with authorized user id 
    Conversations.getConversationsByUser(req.user.id)
    .then(conversations => {
        if(conversations.length < 1) {
            return res.json({
                "message": "This user has no conversations yet"
            })
            .status(404);
        }
        // get all messages and senders associated with the most recent conversation
        Conversations.getMessagesByConversation(conversations[0]._id)
        .then(messages => {
            // if no errors, sending conversations and messgaes back to client
            res.json({
                "conversations": conversations, 
                "messages": messages, 
                "user": req.user
            })
            .status(200);
        })
    
    })
    .catch(err => {
        console.log(err);
    })

});

router.get("/messages/:id", auth, (req, res) => {
    Conversations.getMessagesByConversation(req.params.id)
    .then(results => {
        res.json({
            "messages": results, 
            "message": `found ${results.length} messages`
        })
        .status(200);
    })
    .catch(error => {
        res.json({
            "message": "could not find conversation"
        })
        .status(404);
    });
})


router.post("/create", auth, getUsers, (req, res) => {
    Conversations.createConversation(req.body.conversation)
    .then(result => {
        if(result.name) {
            return res.json({
                "message": "conversation created successfully", 
                "conversation": result
            })
            .status(200);
        } else {
            return res.json({
                "message": "Could not create conversation"
            })
            .status(404);
        }
    })
    .catch(error => {
        return res.json({
            "message": "Could not create conversation"
        })
        .status(404);
    })
});

router.get("/one/:id", auth, (req, res) => {
    Conversations.getConversationById(req.params.id)
    .then(result => {
        res.json({
            "conversation": result, 
        })
        .status(200);
    })
    .catch(error => {
        res.json({
            "message": "could not find conversation"
        })
        .status(404);
    });
})

router.post("/create-connection", auth, (req, res) => {
    const cache = req.app.get("cache");
    cache.set(`socket${req.user.id}`, req.body.socketId);

    cache.get(`socket${req.user.id}`, (err, result) => {
        if(err) {
            console.log("error on server")
            console.log(err)
            return res.json({
                "message": "could not add connection"
            })
            .status(404)
        }

        if(result === req.body.socketId && typeof result === "string") {
            console.log(`${req.user.name}: ${result}`)
            return res.json({
                "message": "connection created", 
                "socketId": result
            })
            .status(200)
        } else {
            console.log("shouldn't have gotten in here");
            return res.json({
                "message": "could not add connection"
            })
            .status(404)
        }
    })
})

module.exports = router;
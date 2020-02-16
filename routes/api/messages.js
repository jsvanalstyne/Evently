// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Conversations = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const auth = require("../auth/authorization.js");



router.post("/create", auth, (req, res) => {
    console.log("we got in here");
    console.log(req.body.message);
    Conversations.createMessage(req.body.message)
    .then(result => {
        console.log(result);
        if(result.senderName) {
            return res.json({
                "message": "message successfully created", 
                "newMessage": result
            })
            .status(200);
        } else {
            return res.json({
                "message": "Could not create message"
            })
            .status(404);
        }
    })
    .catch(error => {
        return res.json({
            "message": "Could not create message"
        })
        .status(404);
    })
})

module.exports = router;
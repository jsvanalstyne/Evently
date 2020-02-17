// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Conversations = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const auth = require("../auth/authorization.js");
// importing check for live users
const getLiveUsers = require("./chat.js")



router.post("/create", auth, getLiveUsers, (req, res) => {
    const socket = req.app.get("socket");
    const cache = req.app.get("cache");
    
    Conversations.createMessage(req.body.message)
    .then(result => {
        if(result.senderName) {
            for(let i = 0; i < req.userIds.length; i++) {
                cache.get(`socket${req.userIds[i]}`, (err, socketId) => {
                    if(err) {
                        console.log(err)
                    } else {
                        if(socket.sockets.connected[socketId]) {
                            const recipientSocket = socket.sockets.connected[socketId];
                            recipientSocket.emit("newMessage", req.body.message);
                        }
                    }
                })
            }
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
});

module.exports = router;
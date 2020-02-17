const Conversations = require("../../controllers/API/Conversations.js");

module.exports = (req, res, next) => {    
    Conversations.getUsers(req.body.message.conversationId)
    .then(result => {
        req.userIds = result.userIds;
        next();
    })
};
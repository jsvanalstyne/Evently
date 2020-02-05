const Conversations = require("../../models/Conversations.js");
const Messages = require("../../models/Messages.js");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ GET ------------------
    // Find all users associated with a conversation
    getUsers: (conversationId, cb) => {
        conversationId = ObjectId(conversationId);

        Conversations.findById(conversationId)
        .then(cb)
    }, 
    // Find all conversations associated with 
    // a single user
    getConversationsByUser: (userId, cb) => {
        userId = ObjectId(userId);

        Conversations.find({"userIds": userId})
        .then(cb)
    },
    // Finds a conversation based on user Ids
    // associated with that conversation
    getConversationByUsers: (userIds, cb) => {
        let userIdsAsObjectIds = userIds.map(userId => ObjectId(userId));

        Conversations.find({"userIds": userIdsAsObjectIds})
        .then(cb)
    },
    // Find all messages (with users) associated with the conversation
    // that they're a part of
    getMessagesByConversation: (conversationId, cb) => {
        conversationId = ObjectId(conversationId);

        Messages.find({"conversationId": conversationId})
        .populate("Users")
        .then(cb)
    },
    // ------------------ POST ------------------
    // Adds a message to the database 
    // Message object contains: 
    //   1. senderId: user Id from user who sent the message
    //   2. conversationId: id of conversation the messge is 
    //      is associated with
    //   3. text: text from the message
    createMessage: (message, cb) => {
        Messages.create(message)
        .then(cb)
    },
    // Adds a conversation to the database 
    // Conversation object contains: 
    //   1. userIds: Ids of users associated with the conver-
    //      sation
    createConversation: (conversation, cb) => {
        Conversations.create(conversation)
        .then(cb)
    },
    // ------------------ PUT ------------------
    // Finds one message based on id, changes
    // the text of that message to the text argument, 
    // and updates the dateUpdated field
    updateMessageText: (messageId, text, cb) => {
        messageId = ObjectId(messageId);

        Messages.findByIdAndUpdate(messageId, {
            $set: {
                "text": text, 
                "dateUpdated": Date.now()
            }
        })
        .then(cb)
    }, 
    // Finds a conversation and adds a user to the 
    // corresponding document's userIds field
    addUser: (conversationId, userId, cb) => {
        conversationId = ObjectId(conversationId);

        Conversations.findByIdAndUpdate(conversationId, 
            {
                $push: {
                    "userIds": userId
                }
            }
        )
        .then(cb)
    },
    // ------------------ DELETE ------------------
    // Finds conversation associated with id and removes
    // it from database
    deleteConversation: (conversationId, cb) => {
        conversationId = ObjectId(conversationId);

        Conversations.remove({"_id": conversationId})
        .then(cb)
    },
    // Finds all messages associated with a conversation and
    // removes them from the database
    deleteMessagesByConversation: (conversationId, cb) => {
        conversationId = ObjectId(conversationId);

        Messages.remove({"conversationId": conversationId})
        .then(cb);
    },
    // Finds one message by id and removes it from the 
    // database
    deleteMessageById: (messageId, cb) => {
        messageId = ObjectId(messageId);

        Messages.findByIdAndRemove(messageId)
        .then(cb)
    }


}
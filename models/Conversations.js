var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConversationsSchema = new Schema({
    userIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Users", 
        required: [true, "Must enter valid user Id"]
        // unique: true
    }], 
    name: {
        type: String
    },
    lastUpdated: {
        type: Date, 
        default: Date.now
    }
});

var Conversations = mongoose.model("Conversations", ConversationsSchema);

module.exports = Conversations;
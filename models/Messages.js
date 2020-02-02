var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessagesSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId, 
        ref: "Users", 
        required: [true, "Must enter valid sender Id"]
    }, 
    conversationId: {
        type: Schema.Types.ObjectId, 
        ref: "Conversations", 
        required: [true, "Must enter valid conversation Id"]
    }, 
    dateSent: {
        type: Date, 
        default: Date.now
    }, 
    text: {
        type: String, 
        validate: {
            validator: v => {
                return v.length > 0 && v.length < 500;
            }, 
            messages: "Messages must be between one and 500 characters long"
        }, 
        required: [true, "Must enter valid text"]
    }, 
    dateUpdated: {
        type: Date,
        default: Date.now
    }
})

var Messages = mongoose.model("Messages", MessagesSchema);

module.exports = Messages;
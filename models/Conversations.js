var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConversationsSchema = new Schema({
    userIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Users", 
        required: [true, "Must enter valid user Id"]
    }]
});

var Conversations = mongoose.model("Conversations", ConversationsSchema);

export default Conversations;
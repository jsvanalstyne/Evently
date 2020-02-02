var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    authId: {
        type: String, 
        required: [true, "Must enter Okta Id"]
    }
});

var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
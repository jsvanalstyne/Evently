var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    authId: {
        type: String, 
        required: [true, "Must enter Okta Id"], 
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
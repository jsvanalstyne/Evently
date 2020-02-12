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
        required: [true, "Must enter a first name"]
    }, 

    lastName: {
        type: String, 
        required: [true, "Must enter a last name"]
    }, 

    email: {
        type: String,
        required: [true, "Must enter a valid email"]
    }
});

var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
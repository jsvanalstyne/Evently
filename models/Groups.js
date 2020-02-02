var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GroupsSchema = new Schema({
    name: {
        type: String, 
        required: [true, "Must enter a name for your new group"]
    },
    description: {
        type: String, 
        required: [true, "Must enter a short description of your program"], 
        validate: {
            validator: (v) => {
                return v.length <= 500;
            }, 
            message: "Program descriptions must be a maximum of 500 characters"
        }
    }, 
    userIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Users", 
        required: [true, "Must have users associated with this event"]
    }], 
    adminIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Employees", 
        required: [true, "Must have at least one admin associated with this event"]
    }], 
    type: {
        type: String
    }
});

var Groups = mongoose.model("Groups", GroupsSchema);

module.exports = Groups;
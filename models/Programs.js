var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProgramsSchema = new Schema({
    name: {
        type: String, 
        required: [true, "Must enter a name for this program"], 
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
    organizationId: {
        type: Schema.Types.ObjectId, 
        ref: "Organizations", 
        required: [true, "Must enter an organization Id"]
    }, 
    dateStart: {
        type: Date, 
        required: [true, "Must eneter a start date for your event"],
    }, 
    dateEnd: {
        type: Date,
        required: [true, "Must enter an ending date for your program"]
    }, 
    adminIds: [{
        type: Schema.Types.ObjectId,
        ref: "Employees"
    }],
    groupIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Groups",
    }], 
    price: {
        type: Number
    },
    groupIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Groups",
    }], 
});

var Programs = mongoose.model("Programs", ProgramsSchema);

module.exports = Programs;
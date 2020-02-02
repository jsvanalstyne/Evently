var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    name: {
        type: String, 
        required: [true, "Must enter a name for this event"], 
        unique: true
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
    }, 
    dateStart: {
        type: Date, 
        required: [true, "Must eneter a start date for your event"],
    }, 
    dateEnd: {
        type: Date,
        required: [true, "Must enter an ending date for your event"]
    }, 
    adminIds: [{
        type: Schema.Types.ObjectId,
        ref: "Employees"
    }], 
    cost: {
        type: Number
    }, 
    facilityId: {
        type: Schema.Types.ObjectId, 
        ref: "Facilities",
        required: [true, "Must enter a facility Id"]
    }, 
    programId: {
        type: Schema.Types.ObjectId, 
        ref: "Programs"
    },
    setupNotes: {
        type: String,
    }, 
    tearDownNotes: {
        type: String
    }, 
    groupIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Groups",
    }], 
    type: {
        type: String   
    }
});

var Events = mongoose.model("Events", EventsSchema);

module.exports = Events;
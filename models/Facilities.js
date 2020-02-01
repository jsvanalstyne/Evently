var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FacilitiesSchema = new Schema({
    name: {
        type: String, 
        unique: true, 
        required: [true, "Must enter a name for facility"]
    }, 
    description: {
        type: String
    }, 
    capacity: {
        type: Number, 
        required: [true, "Must enter a max capacity for facility"]
    }, 
    organizationId: {
        type: Schema.Types.ObjectId, 
        ref: "Organizations", 
        required: [true, "Must enter organization Id"]
    }, 
    type: {
        type: String, 
        enum: ["Pool", "Court", "Event space", "Field", "Classroom", "Performance", 
               "General", "Studio", "Gym", "Track", "Other"], 
        default: "Other"
    }
});

var Facilities = mongoose.model("Facilities", FacilitiesSchema)
export default Facilities;
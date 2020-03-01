var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TasksSchema = new Schema({ 
    name: {
        type: String, 
        required: [true, "Must enter a name for the scheduled task"]
    }, 

    employeeIds: [{
        type: Schema.Types.ObjectId, 
        required: [true, "Must enter at least one employee Id"], 
        ref: "Employees"
    }], 

    description: {
        type: String
    },

    startTime: {
        type: Date, 
        default: Date.now
    },

    endTime: {
        type: Date, 
        default: Date.now() - 15 * 60000
    }
});

var Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = Tasks;
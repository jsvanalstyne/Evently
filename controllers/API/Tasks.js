const Tasks = require("../../models/Tasks.js");
const ObjectId = require("mongoose").Types.ObjectId;
const moment = require("moment");


module.exports = {
    getTasksByEmployeeByDateRange: (employeeId, startTime, endTime) => {
        employeeId = ObjectId(employeeId);
        
        return Tasks.find({
            "employeeIds": employeeId, 
            "startTime": {$gte: startTime, $lte: endTime}
        })
        .sort({"startTime": 1})
        
    }, 

    createTask: task => {
        return Tasks.create(task)
    }
}
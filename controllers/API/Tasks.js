const Tasks = require("../../models/Tasks.js");
const ObjectId = require("mongoose").Types.ObjectId;
const moment = require("moment");

const getStartOfDay = () => moment.utc().startOf("day");
const getEndOfDay = () => moment.utc().endOf("day");
const getDatePlusDays = (date, numDays) => moment(date).add(numDays, "days");
const getTimePlusHours = (date, numHours) => moment(date).add(numHours, "hours");

module.exports = {
    getTasksByEmployeeByDay = (employeeId, numDays) => {
        employeeId = ObjectId(employeeId);
        let currDate = getStartOfDay();
        let endOfDay = getEndOfDay();

        let endDateRange = getDatePlusDays(endOfDay, numDays);

        return Tasks.find({
            "employeeId": employeeId, 
            "startDate": {$gte: currDate, $lte: endDateRange}
        })
        
    }, 

    createTask = task => {
        return Tasks.create(task)
    }
}
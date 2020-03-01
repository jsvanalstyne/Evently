const router = require("express").Router();
const Tasks = require("../../controllers/API/Tasks");
const moment = require("moment");
// get all dates within a week 
// takes in a date and gets the current start and end to that week
// calls the getTasksByEmployeeByTimeRange method
// loops through all of those results and and divides them into an array 
// of day objects (tasks added to the task array on that object)

const getFormattedDate = (dayOfWeek) => {
    let numberAndIsoArray = dayOfWeek.split(",");

    let dateAsNumber = numberAndIsoArray[0].substring(0, numberAndIsoArray[0].length - 2);
    let dateObj = {
        "dayAsNumber": dateAsNumber, 
        "dayOfWeek": numberAndIsoArray[1], 
        "tasks": []
    }

    return dateObj;
}

const getWeek = (day) => {
    let weekStart = day.clone().startOf('isoWeek');
    let week = []

    for(let i = 0; i < 7; i++) {
        let dayOfWeek = moment(weekStart).add(i, "days").format("Do,ddd");
        
        week.push(getFormattedDate(dayOfWeek));
    }

    return week;
}

const formatWeek = (tasks, startTime) => {
    var week = getWeek(moment(startTime));

    for(const task of tasks) {
        var day = moment(task.startTime).day();

        if(day == 0) {
            day = 6;
        } else { 
            day -= 1;
        }

        let formattedTask = {
            startTime: moment(task.startTime).format("h:mm a"),
            endTime: moment(task.endTime).format("h:mm a"),
            name: task.name, 
            description: task.description, 
            _id: task._id
        }
        
        week[day].tasks.push(formattedTask)
    }

    return week;
}

router.get("/by-week/:startTime/:endTime", (req, res) => {
    let employeeId = "5e5ad7ebdb631f1ea784849c";

    let startTime = req.params.startTime;
    let endTime = req.params.endTime

    Tasks.getTasksByEmployeeByDateRange(employeeId, startTime, endTime)
    .then(results => {
        const week = formatWeek(results, startTime)

        res.json({
            "message": "success", 
            "week": week
        })
        .status(200)
    })
    .catch(error => {
        res.json({
            "message": "error", 
            "error": error
        })
        .status(404)
    })
})


router.post("/create", (req, res) => {
    let task = req.body.task;

    Tasks.createTask(task)
    .then(result => {
        res.json({
            "message": "success", 
            "tasks": result
        })
    })
    .catch(error => {
        res.json({
            "message": "error", 
            "tasks": error
        })
        .status(404)
    })
})


module.exports = router;
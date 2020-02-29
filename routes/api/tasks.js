const router = require("express").Router();
const Tasks = require("../../controllers/API/Tasks");

router.get("/:employeeId/:numDays", (req, res) => {
    let employeeId = "5e5ad7ebdb631f1ea784849c";

    let numDays = req.params.numDays;

    Tasks.getTasksByEmployeeByDay(employeeId, numDays)
    .then(result => {
        res.json({
            "message": "success", 
            "tasks": result
        })
        .status(200)
    })
    .catch(error => {
        res.json({
            "message": "error", 
            "tasks": error
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
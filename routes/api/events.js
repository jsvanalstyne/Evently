const router = require("express").Router();
const eventController = require("../../controllers/API/Events");

router.get("/:organizationid", (req, res) => {
    let id = req.params.organizationid
    // console.log("events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        // console.log("results: " + results);
        return res.json(results)
    } )
})

router.get("/allevents/:organizationid", (req, res) => {
    let id = req.params.organizationid
    eventController.getEventsByOrganization(id, function(results) {
        return res.json(results);
    })
} )

router.put("/add-user-to-event", (req, res) => {
    let eventId = req.body.eventId;
    let userId = req.body.userId;

    eventController.addUserToEvent(eventId, userId, (err, result) => {
        if(err) console.log(err);
        console.log(result);
    })
})

module.exports = router;
const router = require("express").Router();
const eventController = require("../../controllers/API/Events");
const verifyBlanketUser = require("../auth/authorization");
const programController = require("../../controllers/API/Programs")

const auth = require("../auth/authorization.js")

router.get("/:organizationid", auth, (req, res) => {
    let id = req.params.organizationid
    // console.log("events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        // console.log("results: " + results);
        return res.json(results)
    } )
})
router.get("/promos/:organizationid", verifyBlanketUser, (req, res) => {
    let id = req.params.organizationid
    // console.log("line events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        // console.log("line 18 results: " + results[0]);
        return res.json({"results": results}).status(200);
    });
})

module.exports = router;

// getEventsByOrganization
router.get("/allevents/:organizationid", (req, res) => {
    let id = req.params.organizationid
    let organizationPrograms = []
    let organizationEvents=[];
    eventController.getEventsByOrganization(id, function(results) {
        organizationEvents = results.map(event => {
            return event
        })
        
    })

    programController.getProgramsByOrganization(id, function(results) {
        organizationPrograms = results.map(program => {
            return program
        })
        organizationCalendarArray = organizationEvents.concat(organizationPrograms);
        console.log("line 44 in events.js" + JSON.stringify(organizationCalendarArray))
        return res.json(organizationCalendarArray).status(200);
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

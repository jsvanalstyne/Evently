const router = require("express").Router();
const eventController = require("../../controllers/API/Events");
const verifyBlanketUser = require("../auth/authorization");
const programController = require("../../controllers/API/Programs")
const userController = require("../../controllers/API/Users")

const auth = require("../auth/authorization.js")


router.get("/:organizationid", verifyBlanketUser, (req, res) => {
    let id = req.params.organizationid
    // console.log("events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        // console.log("results: " + results);
        return res.json(results)
    } )
})
router.delete("/removal/:eventId", verifyBlanketUser, (req, res) => {
    let eventid = req.params.eventId
    console.log("line 17 in events "+eventid);
    eventController.getEventById(eventid, function(result){
        console.log("line 19 event.js "+ JSON.stringify(result))
       console.log("line 16" + result);
        console.log("line 20" +result[0].groupIds);
        console.log(result)
        
        let groupIDArray = result[0].groupIds
        
    
            let userId = req.user.id
           
            console.log("line 30" + userId);
            console.log(groupIDArray)
    

           userController.removeUserIdFromGroup(groupIDArray, userId, function(result){
               console.log("removed user" + result);
               res.json(200);
           })
         
    

    })

})
router.get("/promos/:organizationid", verifyBlanketUser, (req, res) => {
    let id = req.params.organizationid
    // console.log("line events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        // console.log("line 18 results: " + results[0]);
        return res.json({"results": results}).status(200);
    });
})



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

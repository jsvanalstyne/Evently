const router = require("express").Router();
const eventController = require("../../controllers/API/Events");
const userController = require("../../controllers/API/Users");
const verifyBlanketUser = require("../auth/authorization");


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
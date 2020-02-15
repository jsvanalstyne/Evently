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
    console.log(eventid);
    eventController.getEventById(eventid, function(result){
       console.log("line 16" + result);
        console.log(result.groupIds);
        console.log(result)
        let authId = req.user.id
        // let authId= "7"
        let groupIDArray = result.groupIds
        userController.findByAuthId(authId,  function (results) {
            console.log("line 17 " + results);
            // res.json(results)
    
            let userId = results[0]._id
            // let userId = "5e3e0a2e1442d70b7c49eec8"
            console.log("line 30" + userId);
            console.log(groupIDArray)
    

           userController.removeUserIdFromGroup(groupIDArray, userId, function(result){
               console.log("removed user" + result);
               res.json(200);
           })
         
    });

    })

})

module.exports = router;
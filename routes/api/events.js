const router = require("express").Router();
const eventController = require("../../controllers/API/Events");
const verifyBlanketUser = require("../auth/authorization");


router.get("/:organizationid", (req, res) => {
    let id = req.params.organizationid
    // console.log("events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        // console.log("results: " + results);
        return res.json(results)
    } )
})
router.get("/promos/:organizationid", verifyBlanketUser, (req, res) => {
    let id = req.params.organizationid
    console.log("line events id:" + id)
    eventController.getEventsByOrganization(id, function(results) {
        console.log("line 18 results: " + results[0]);
        return res.json({"results": results}).status(200);
    });
})

module.exports = router;

// getEventsByOrganization
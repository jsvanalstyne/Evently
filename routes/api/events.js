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

module.exports = router;
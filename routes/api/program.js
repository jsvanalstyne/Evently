const router = require("express").Router();
const programController = require("../../controllers/API/Programs");

// router.route("/")
//     .get(programController.getProgramsByOrganization,)
//     .post(programController.create)

router.get("/:organizationid", (req, res) =>{
    let id = req.params.organizationid
    console.log("id: "+id)
    programController.getProgramsByOrganization(id, function(results){
        console.log("line 11" +results);
        return res.json(results);
    })
})

module.exports = router;
const router = require("express").Router();
const programController = require("../../utils/API/Programs");

// router.route("/")
//     .get(programController.getProgramsByOrganization,)
//     .post(programController.create)

router.get("/", (req, res) =>{
    let id = req.body.organizationid
    console.log("id: "+id)
    programController.getProgramsByOrganization(id, function(results){
        console.log("line 11" +results);
        return res.json(results);
    })
})

module.exports = router;
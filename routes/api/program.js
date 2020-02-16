const router = require("express").Router();
const programController = require("../../controllers/API/Programs");
const verifyBlanketUser = require("../auth/authorization");
const auth = require("../auth/authorization.js")

// router.route("/")
//     .get(programController.getProgramsByOrganization,)
//     .post(programController.create)

router.get("/:organizationid", verifyBlanketUser,(req, res) =>{

    let id = req.params.organizationid
    // console.log("id: "+id)
    programController.getProgramsByOrganization(id, function(results){
        // console.log("line 11" +results);
        return res.json(results);
    })
})

module.exports = router;
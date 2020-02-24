const router = require("express").Router();
const programController = require("../../controllers/API/Programs");
const verifyBlanketUser = require("../auth/authorization");
const auth = require("../auth/authorization.js")
const userController = require("../../controllers/API/Users")
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
});

router.delete("/removal/:programId", verifyBlanketUser, (req, res) => {
    let programid = req.params.programId
    console.log("line 17 in programs "+programid);
    programController.getProgramById(programid, function(result){
        console.log("line 19 event.js "+ JSON.stringify(result))
       console.log("line 16" + result);
        // console.log("line 20" +result[1].groupIds);
        console.log(result.name)
        console.log(result.description)
        console.log(result.groupIds)
        console.log(Object.keys(result)[9])
        console.log(result.adminIds)
        let groupIDArray = result.groupIds
        let userId = req.user.id
           
            console.log("line 30" + userId);
            console.log("line 32 "+groupIDArray);
    

           userController.removeUserIdFromGroup(groupIDArray, userId, function(result){
               console.log("removed user" + result);
               return res.json(200);
           })
         
    

    })

})

module.exports = router;
const router = require("express").Router();
const eventController = require("../../controllers/API/Events");
const promoController = require("../../controllers/API/Promos");


router.get("/:organizationid", (req, res) => {
    let id = req.params.organizationid
    console.log("inside get for promos")
    console.log("organization id:" + id +" line 8 inside promo.js") 
    promoController.getPromosByOrganization(id, function(results) {
        console.log(results);
        // return res.json(results)
    } )
})

module.exports = router;
const router = require("express").Router();
const billController = require("../../controllers/API/Bills")
const verifyBlanketUser = require("../auth/authorization");
const eventController = require("../../controllers/API/Events");

router.get("/", verifyBlanketUser, (req, res) => {
    let userId = req.user.id;
    console.log(userId)
    billController.findByUserId(userId, function(results){
        console.log(results);
        let userBillsArray = results.map(data => {
            return {
                note: data.note,
                amount: data.amountOwed,
                date: data.dateIssued,
                eventPaidFor: data.eventPaidFor
            }
        })
        eventController.getEventById(eventId, function(data){
            console.log(data)
            res.json().status(200);
        })
    })

});

module.exports = router;

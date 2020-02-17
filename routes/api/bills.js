const router = require("express").Router();
const billController = require("../../controllers/API/Bills")
const verifyBlanketUser = require("../auth/authorization");
const eventController = require("../../controllers/API/Events");

router.get("/", verifyBlanketUser, (req, res) => {
    let eventIdAsrray = [];
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
       let eventIdArray = userBillsArray.map(eventId => {
        
              return [eventId.eventPaidFor]
            
        })
        console.log("line 24 bills.js "+ eventIdArray);

        eventController.getEventsByManyIds(eventIdArray, function(data){
            console.log("line 28 " +data[0].name)
                for (var i =0; userBillsArray.length; i++){
                    userBillsArray[0].eventName = data[0].name
                }
                console.log("line 32 in bills.js "+ JSON.stringify(userBillsArray))
            res.json().status(userBillsArray);
        })
    })

});

module.exports = router;

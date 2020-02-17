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
        console.log(userBillsArray)
    //    let eventIdArray = userBillsArray.map(eventId => {
        
    //           return {id: eventId.eventPaidFor}
            
    //     })
    //     console.log("line 24 bills.js "+ eventIdArray);

        eventController.getEventsByManyIds(userBillsArray.map(bill => bill.eventPaidFor), function(data){
            console.log("line 28 " +data)
                for (var i =0; i<userBillsArray.length; i++){
                    userBillsArray[i].eventName = data[i].name
                    // console.log(userBillsArray[i], data[i])
                }
                console.log("line 32 in bills.js "+ JSON.stringify(userBillsArray))
            res.json(userBillsArray).status(200);
        })
    })

});

module.exports = router;

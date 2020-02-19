const Bills = require("../../models/Bills");
// const Events = require("../../models/Events.js");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ POST ------------------
    // Create a bill for a users payment
    
    createBillforPayment: (userId, billAmount, eventType, eventId ,cb) => {
        userId = ObjectId(userId);
        eventId = ObjectId(eventId);
        console.log(eventId);
        console.log(eventType);
        if(eventType === "event") {
            Bills.create(
                {"accountId": userId,
                "amountOwed": billAmount,
                "eventPaidFor": eventId,
                "isPaid": true,
                "note": "paid",  
            })
            .then(cb)
        } else {
            Bills.create(
                {"accountId": userId,
                "amountOwed": billAmount,
                "programPaidFor": eventId,
                "isPaid": true,
                "note": "paid",  
            })
            .then(cb)
        }
    },
    findByUserId: (userId, cb) => {
        userId = ObjectId(userId)
        Bills.find({"accountId": userId})
        .populate("eventPaidFor")
        .populate("programPaidFor")
        .then(cb)
    }
    
};
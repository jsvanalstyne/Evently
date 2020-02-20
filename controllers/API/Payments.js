const Payments = require("../../models/Payments");
const Bills = require("../../models/Bills");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ POST ------------------
    // Create a bill for a users payment
    
    createPayment: (userId, eventId, billAmount, cb) => {
        userId = ObjectId(userId);
        eventId = ObjectId(eventId);
        Payments.create(
            {"accountId": userId},
            {"eventId": eventId},
            {"payerId": payerId},
            {"billId": billId},
            {"amountId": billAmount},
            {"datePaid": Date.now},
            {"employeeId": "some employee"},
            {"wasMadeInPerson": false},
            {"note": "paid"},
            
            )
        .then(cb)
    }
    
};
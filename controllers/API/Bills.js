const Bills = require("../../models/Bills");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ POST ------------------
    // Create a bill for a users payment
    
    createBillforPayment: (userId, billAmount, cb) => {
        userId = ObjectId(userId);
        Bills.create(
            {"accountId": userId},
            {"amountOwed": billAmount},
            {"dateIssued": Date.now},
            {"dateExpectedFinal": Date.now},
            {"note": "paid"}
            )
        .then(cb)
    }
    
};
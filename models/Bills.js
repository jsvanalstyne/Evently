var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BillsSchema = new Schema({
    accountId: {
        type: Schema.Types.ObjectId, 
        ref: "Accounts"
    }, 
    amountOwed: {
        type: Number
    },
    eventPaidFor: {
        type: Schema.Types.ObjectId
    },
    dateIssued: {
        type: Date, 
        default: Date.now
    }, 
    dateExpectedFinal: {
        type: Date
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    note: {
        type: String, 
        validate: {
            validator: v => {
                return v.length <= 500;
            }, 
            message: "Note must be at most 500 characters"
        }
    }
});

var Bills = mongoose.model("Bills", BillsSchema);

module.exports = Bills;
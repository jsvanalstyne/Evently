var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BillsSchema = new Schema({
    accountId: {
        type: Schema.Types.ObjectId, 
        ref: "Accounts", 
        required: [true, "Must enter an account Id"]
    }, 
    amountOwed: {
        type: Number, 
        required: [true, "Must enter an amount owed"]
    }, 
    dateIssued: {
        type: Date, 
        default: Date.now
    }, 
    dateExpectedFinal: {
        type: Date, 
        required: [true, "Must have a due date for bill"]
    },
    note: {
        type: String, 
        required: [true, "Must enter note for bill"], 
        validate: {
            validator: v => {
                return v.length <= 500;
            }, 
            message: "Note must be at most 500 characters"
        }
    }
});

var Bills = mongoose.model("Bills", BillsSchema);

export default Bills;
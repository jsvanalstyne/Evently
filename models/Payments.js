var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PaymentsSchema = new Schema({
    accountId: {
        type: Schema.Types.ObjectId, 
        ref: "Accounts", 
        required: [true, "Must enter account Id"]
    }, 
    payerId: {
        type: Schema.Types.ObjectId, 
        ref: "Users", 
        required: [true, "Must enter payer Id"]
    }, 
    billId: {
        type: Schema.Types.ObjectId, 
        ref: "Bills", 
        required: [true, "Must enter bill Id"]
    }, 
    amountPaid: {
        type: Number, 
        required: [true, "Must enter amount to be paid"], 
    }, 
    datePaid: {
        type: Date, 
        default: Date.now
    },
    employeeId: {
        type: Schema.Types.ObjectId, 
        ref: "Employees"
    }, 
    wasMadeInPerson: {
        type: Boolean, 
        default: false
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

var Payments = mongoose.model("Payments", PaymentsSchema)
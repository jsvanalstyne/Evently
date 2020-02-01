var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EmployeesSchema = new Schema({
    firstName: {
        type: String, 
        required: [true, "Must enter first name"]    
    }, 
    lastName: {
        type: String, 
        required: [true, "Must enter last name"]
    }, 
    email: {
        type: String, 
        validate: {
            validator: (v) => {
                // taken from: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(v).toLowerCase());
            }, 
            message: "Email must be in correct format"
        }, 
        required: [true, "Must enter email"], 
        unique: true
    }, 
    dateHired: {
        type: Date, 
        default: Date.now
    }, 
    birthDate: {
        type: Date, 
        required: [true, "Must eneter birth date"]
    }, 
    status: {
        type: String, 
        enum: ["Active", "Inactive", "Suspended", "Warning"], 
        default: "Active"
    }, 
    employeeType: {
        type: String, 
        enum: ["admin", "coach", "normal"], 
        default: 'normal'
    }, 
    role: {
        type: String, 
        required: [true, "Must enter employee role"]
    }, 
    organizationId: {
        type: Schema.Types.ObjectId, 
        ref: "Organizations", 
        required: [true, "Must enter organization Id"]
    }

});

var Employees = mongoose.model("Employees", EmployeesSchema);

export default Employees;
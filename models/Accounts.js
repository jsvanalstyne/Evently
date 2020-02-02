var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AccountsSchema = new Schema({
    userIds: [{
        type: Schema.Types.ObjectId, 
        ref: "Users",
        required: [true, "Must have at least one user Id"]
    }], 
    street: {
        type: String, 
        unique: true, 
        required: [true, "Must enter an organization name"]
    }, 
    zipcode: {
        type: String, 
        validate: {
            validator: function(v) {
                return v.length === 5;
            },
            message: () => `A zipcode must be 5 characters long`
        }, 
        required: [true, "Must enter a zipcode for your organization"]
    }, 
    city: {
        type: String, 
        required: [true, "Must enter a city for your organization"]
    }, 
    stateCode: {
        type: String,
        enum: ["AK","AL","AR", "AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI",
               "IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS",
               "MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR",
               "RI","SC","SD","TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", 
               "WY"], 
        required: [true, "Must enter a state code"]
    }

});

var Accounts = mongoose.model("Accounts", AccountsSchema);

module.exports = Accounts;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PromosSchema = new Schema({
    name: {
        type: String,
    },
    organizationId: {
        type: Schema.Types.ObjectId,
        ref: "Organizations",
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: "Events",
    }

});
var Promos = mongoose.model("Promos", PromosSchema);

module.exports = Promos;



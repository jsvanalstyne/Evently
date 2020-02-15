const Events = require("../../models/Events.js");
const Programs = require("../../models/Programs.js");
const Groups = require("../../models/Groups");
const Promos = require("../../models/Promo");


const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {

    getPromosByOrganization:(id, cb) => {
        let organizationId = ObjectId(id)
        let orgId = ObjectId("5e35c71607cf87e4497c41a9")
        console.log(organizationId + " line13 inside Promo.js controller")
        Promos.find({"organizationId": orgId})
        .then(cb);
    },
    create: (promo, cb) => {
        Promos.create(promo)
        .then(cb)
    }, 

}
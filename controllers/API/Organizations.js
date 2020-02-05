const Organizations = require("../../models/Organizations.js");
const Accounts = require("../../models/Accounts.js");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ GET ------------------
    // Find organization by id
    getOrganizationById: (organizationId, cb) => {
        userId = ObjectId(organizationId)
        Organizations.findById(organizationId)
        .then(cb)
    }, 
    // Get all userIds from all accounts associated with
    // an organization
    getUsersByOrganization: (organizationId, cb) => {
        organizationId = ObjectId(organizationId);

        Accounts.find({"organizationId": organizationId})
        .select("userIds")
        .then(cb)
    },
    // ------------------ POST ------------------
    // Creates a new organization document 
    create: (organization, cb) => {
        Organizations.create(organization)
        .then(cb)
    },
    // ------------------ DELETE ------------------
    // Finds user with matching id and deletes them
    delete: (organizationId, cb) => {
        organizationId = ObjectId(organizationId);

        Organizations.findByIdAndRemove(organizationId)
        .then(cb)
    }

} 
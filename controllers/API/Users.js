const Users = require("../../models/Users.js");
const ObjectId = require("mongoose").Types.ObjectId;
const Groups = require("../../models/Groups");

module.exports = {
    // ------------------ GET ------------------
    // Find user by their mongo id
    findById: (userId, cb) => {
        Users.findById(ObjectId(userId))
        .then(cb)
    }, 
    // Find user by okta id
    // findByAuthId: (authId, cb) => {
    //     return Users.find({"authId": authId})
    //     // .then(cb)
    findByAuthId: (authId) => {
        return Users.find({"authId": authId})
        .select("_id")
    },
    // ------------------ POST ------------------
    // Creates a new user document 
    create: (user, cb) => {
        Users.create(user)
        .then(cb)
    },
    // ------------------ DELETE ------------------
    // Finds user with matching id and deletes them
    delete: (userId, cb) => {
        userId = ObjectId(userId);

        Users.findOneAndRemove({"_id": userId})
        .then(cb)
    }, 
    // Finds user with auth id and removes them from fb
    deleteByAuthId: (authId, cb) => {
        Users.findOneAndRemove({"authId": authId})
        .then(cb)
    },
    getInfromationforGroups: (groupIdArray, cb) => {
        Groups.find({"_id": {$in: groupIdArray}})
        .then(cb)
    },
    removeUserIdFromGroup: (groupIdArray, userId, cb) => {
        Groups.update({"_id": {$in: groupIdArray}}, {$pull: {"userIds": userId}})
        .then(cb);
    }
}
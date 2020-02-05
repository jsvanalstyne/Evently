const Accounts = require("../../models/Accounts.js");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ GET ------------------
    // Takes in account id and returns the account
    // populated by the users that make up that account
    findOneById: (id, cb) => {
        Accounts.findById(ObjectId(id))
        .populate("Users")
        .then(cb)
        .catch(err => {
            return err;
        })
    }, 
    // Takes in a user Id and returns the accounts that 
    // contains that Id, populated with the other users
    // associated with that account     
    findByUserId: (userId, cb) => {
        userId = ObjectId(userId);

        Accounts.find({"userIds": userId})
        .populate("Users")
        .then(cb)
        .catch(err => {
            return err;
        })
    }, 
    // ------------------ POST ------------------
    // Takes in an account object containing: 
    //   1. A list containing a single user Id
    //   2. The address of the user that is creating
    //      the account
    create: (account, cb) => {
        Accounts.create(account, cb);
    },
    // ------------------ PUT ------------------
    // Takes in a user Id and account Id, finds the desired 
    // account and adds the user to the list of users 
    // associated with that account.
    addUser: (accountId, userId, cb) => {
        Accounts.findOneAndUpdate(
            {_id: ObjectId(accountId)}, 
            {$push: {
                userIds: userId
            }}
        )
        .then(cb)
        .catch(err => {
            return err;
        });
    }, 
    // Takes in a user Id and account Id, finds the desired 
    // account and removes the user from the list of users 
    // associated with that account.
    removeUser: (accountId, userId, cb) => {
        Accounts.findOneAndUpdate(
            {_id: ObjectId(accountId)}, 
            {$pull: {
                userIds: userId
            }}
        )
        .then(cb)
        .catch(err => {
            return err;
        });
    },
    // ------------------ DELETE ------------------
    // Takes an account Id and then removes that account
    // from the database.
    delete: (accountId, cb) => {
        Accounts.findOneAndRemove({_id: ObjectId(accountId)})
        .then(cb)
        .catch(err => {
            return err;
        })
    }

};
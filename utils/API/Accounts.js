const Accounts = require("../../models/Accounts.js");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ GET ------------------
    // Takes in account id and returns the account
    // populated by the users that make up that account
    findOneById: id => {
        Accounts.findOneById(id)
        .populate("Users")
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
    }, 
    // Takes in a user Id and returns the account that 
    // contains that Id, populated with the other users
    // associated with that account
    findOneByUserId: userId => {
        Accounts.findOne({
            "userIds": {
                $contains: userId
            }
        })
        .populate("Users")
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
    }, 
    // ------------------ POST ------------------
    // Takes in an account object containing: 
    //   1. A list containing a single user Id
    //   2. The address of the user that is creating
    //      the account
    createAccount: account => {
        Accounts.create(account)
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
    },
    // ------------------ PUT ------------------
    // Takes in a user Id and account Id, finds the desired 
    // account and adds the user to the list of users 
    // associated with that account.
    addUser: (accountId, userId) => {
        Accounts.findOneAndUpdate(
            {_id: ObjectId(accountId)}, 
            {$push: {
                userIds: userId
            }}
        )
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        });
    }
    // ------------------ DELETE ------------------

};
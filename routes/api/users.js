const router = require("express").Router();
const userController = require("../../controllers/API/Users.js");
const accountController = require("../../controllers/API/Accounts.js");
const oktaClient = require('./oktaClient');
const verifyBlanketUser = require("../auth/authorization");
const Users = require("../../controllers/API/Users");
const Events = require("../../controllers/API/Events");
// const Accounts = require("../../controllers/API/Accounts");



router.get("/information", verifyBlanketUser, (req, res) => {
    console.log("inside get route for users")
    // doing stuff with user information (this assumes that auth was successful)
    // console.log( req.user)
    // let authId = req.user.id
    let authId = "7";
    Users.findByAuthId(authId, function (results) {
        console.log("line 17 " + results);
        // res.json(results)

        let userId = results[0]._id
        console.log(userId);
        Events.getGroupIdForUser(userId, function (data) {
        
            let groupIDArray = data.map(group => group._id)

            Events.getEventsForGroups(groupIDArray, function (events) {
                let userEventsArray = events.map(event => {
                   return { name: event.name,
                    dateStart: event.dateStart,
                    dateEnd: event.dateEnd
                   }
                })

                return res.json(userEventsArray);
            })


        })

    })


})
router.get("/account", verifyBlanketUser, (req, res) => {
    // let authId = req.user.id
    let authId="7";
    Users.findByAuthId(authId, function (results) {
        let userId = results[0]._id
        console.log("Line 59 " + userId)
        

        accountController.findByUserId(userId, function(data){
            console.log(data)
            let userRegistrationInfoArray = data.map(information =>{
                return { street: information.street,
                    zipcode: information.zipcode,
                    stateCode: information.stateCode,
                    city: information.city
                   }
            })
            return res.json(userRegistrationInfoArray);
        })
    });


});


router.post("/", (req, res) => {
    // user object containing information for Okta account
    let user = req.body.user;
    // account object to send to 
    let account = req.body.account;
    // creating user in Okta
    oktaClient.createUser(user)
        .then(newUser => {
            // user to be added to local db
            let createdUser = {
                "authId": newUser.id
            }
            // creating user in local db
            userController.create(createdUser, result => {
                // adding the user's mongo id to the account it's associated
                // with 
                account.userIds = [result._id]
                // creating account in mongo with: 
                //    1. street
                //    2. zipcode
                //    3. city
                //    4. stateCode
                //    5. userIds (containing newly created user mongo id)
                accountController.create(account, result => {
                    // returning user and account information back to client
                    return res.json({
                        "message": "User and account created",
                        "user": createdUser,
                        "account": account
                    }).status(200)
                })
            })
        })
        .catch(err => {
            // returning failed message and error 
            return res.json({
                "message": "Could not create user",
                "error": err
            }).status(400);
        });

});

module.exports = router;
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
    // let authId = req.user.id;
    // let authId = "00u24pm87E0bSt6Y54x6";
    // Users.findByAuthId(authId, function (results) {
    //     console.log("line 17 " + results);
        // res.json(results)

        let userId = req.user.id
        console.log(userId);
        Events.getGroupIdForUser(userId, function (data) {
        
            let groupIDArray = data.map(group => group._id)

            Events.getEventsForGroups(groupIDArray, function (events) {
                console.log(events);
                let userEventsArray = events.map(event => {
                   return { name: event.name,
                    dateStart: event.dateStart,
                    dateEnd: event.dateEnd,
                    _id: event._id
                   }
                })

                return res.json(userEventsArray);
            })


        })

    // })


})
router.get("/account", verifyBlanketUser, (req, res) => {
    let userRegistrationInfoArray=[];
    let userObject = req.user
    console.log( "line 50" + JSON.stringify(userObject));
    // console.log(userId);
    // let userObject ={};
    // let authId="7";
    
    // Users.findByAuthId(authId, function (results) {
    //     
    //     let userId = results[0]._id
    //     console.log("Line 59 " + userId)
        //  userObject = {
        //     userId:results[0]._id,
        //     email:results[0].email,
        //     firstName:results[0].firstName,
        //     lastName:results[0].lastName
        // }
       
        

        accountController.findByUserId(userObject.id, function(information){
            console.log(information)
            // let userRegistrationArray = data.map(information =>{
            //     return { street: information.street,
            //         zipcode: information.zipcode,
            //         stateCode: information.stateCode,
            //         city: information.city
            //        }
                   
            // })
            let userAccountObject = {
                street: information[0].street,
                zipcode: information[0].zipcode,
                stateCode: information[0].stateCode,
                city: information[0].city
                           
            }
            // console.log( "line 72 "+JSON.stringify(userObject))
            let userRegistrationInfo =Object.assign(userAccountObject, userObject)
            console.log(userRegistrationInfo);
            userRegistrationInfoArray.push(userRegistrationInfo);
            console.log("line 89" +userRegistrationInfoArray);

            return res.json(userRegistrationInfoArray);
        })
    // });


});


router.post("/", (req, res) => {
    console.log("we got5 in herer");
    // user object containing information for Okta account
    let user = req.body.user;
    // account object to send to
    let account = req.body.account;
    // creating user in Okta
    oktaClient.createUser(user)
        .then(newUser => {
            // user to be added to local db
            console.log(newUser.id);
            let createdUser = {
                "authId": newUser.id,
                "firstName": user.profile.firstName,
                "lastName": user.profile.lastName,
                "email": user.profile.email
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
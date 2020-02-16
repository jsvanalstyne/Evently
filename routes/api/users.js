const router = require("express").Router();
const userController = require("../../controllers/API/Users.js");
const accountController = require("../../controllers/API/Accounts.js");
const oktaClient = require('./oktaClient');
const verifyBlanketUser = require("../auth/authorization");
const Users = require("../../controllers/API/Users");
const Events = require("../../controllers/API/Events");
const Programs = require("../../controllers/API/Programs");



router.get("/information", verifyBlanketUser, (req, res) => {
    console.log("inside get route for users")
    // doing stuff with user information (this assumes that auth was successful)
    // console.log( req.user)
    // let authId = req.user.id
    // let authId = "5";
    // Users.findByAuthId(authId, function (results) {
        // console.log("line 17 " + results);
        // res.json(results)

        let userId = req.user.id
        console.log(userId);
        Events.getGroupIdForUser(userId, function (data) {
            // console.log("line 25 " + data)
            let groupIDArray = data.map(group => group._id)
            
            console.log(groupIDArray + "line 27")
            
            Events.getEventsForGroups(groupIDArray, function (events) {
                let userEventsArray = events.map(event => {
                   return { name: event.name,
                    dateStart: event.dateStart,
                    dateEnd: event.dateEnd,
                    description: event.description
                   }
                });
                console.log("line 38" + JSON.stringify(userEventsArray))
                return res.json(userEventsArray);
            })

            // }


        // })

    })


});
router.get("/registeredprograms", verifyBlanketUser, (req, res) => {
   
        let userId = req.user.id
        console.log("line57 in users.js"+userId)
        Programs.getGroupIdForUser(userId, function (data) {
            // console.log("line 25 " + data)
            let groupIDArray = data.map(group => group._id)
            
            // console.log(groupIDArray + "line 27")
            
            Programs.getProgramsForGroups(groupIDArray, function (program) {
                console.log("line 63 in users.js "+ JSON.stringify(program))
                let userProgramArray = program.map(programs => {
                   return { name: programs.name,
                    dateStart: programs.dateStart,
                    dateEnd: programs.dateEnd,
                    description: programs.description,
                    price: programs.price
                   }
                });

                return res.json(userProgramArray);
            })
        
    });

})

router.get("/calendar", verifyBlanketUser, (req, res) => {
    let userEventsArray={};
    let userId = req.user.id
    console.log("line57 in users.js"+userId)
    Events.getGroupIdForUser(userId, function (data) {
        let groupIDArray = data.map(group => group._id)
        Events.getEventsForGroups(groupIDArray, function (events) {
                userEventsArray = events.map(event => {
               return { name: event.name,
                dateStart: event.dateStart,
                dateEnd: event.dateEnd,
                description: event.description
               }
            });
            console.log(userEventsArray);
            // return res.json(userEventsArray);
        })

})

    Programs.getGroupIdForUser(userId, function (data) {
        let calendarEventsArray=[];
        let groupIDArray = data.map(group => group._id)
        Programs.getProgramsForGroups(groupIDArray, function (program) {
            console.log("line 63 in users.js "+ JSON.stringify(program))
            let userProgramArray = program.map(programs => {
               return { name: programs.name,
                dateStart: programs.dateStart,
                dateEnd: programs.dateEnd,
                description: programs.description,
                price: programs.price
               }
            });
            const userCalendar = Object.assign(userProgramArray, userEventsArray)
            calendarEventsArray.push(userCalendar)
            return res.json(calendarEventsArray);
        })
    
});

})


router.post("/", (req, res) => {
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
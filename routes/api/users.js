const router = require("express").Router();
const userController = require("../../controllers/API/Users.js");
const accountController = require("../../controllers/API/Accounts.js");
const oktaClient = require('./oktaClient');


router.post("/", (req, res) => {
    // user object containing information for Okta account
    let user = req.body.user;
    // account object to send to 
    let account = req.body.account;
    console.log("got in the post route")
    console.log(user);
    console.log(account)
    oktaClient.createUser(user)
        .then(newUser => {
            console.log("new user created");
            console.log(user);
            accountController.create(account, result => {
                console.log("account created");
                console.log(result);
                let user = {
                    "authId": newUser.id
                }

                userController.create(user, result => {
                    console.log("user created");
                    console.log(result);
                    return res.json({
                        "message": "This shit wurk"
                    }).status(200)
                })
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400);
            res.send(err);
    });
    
});

module.exports = router;
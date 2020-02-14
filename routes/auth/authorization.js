// importing okta's jwt verifier
const OktaJwtVerifier = require('@okta/jwt-verifier');
// initializing an object from it
let oktaJwtVerifier = new OktaJwtVerifier({
    issuer: 'https://dev-844753.okta.com/oauth2/default'
});
// importing user controller
let Users = require("../../controllers/API/Users.js");
// creating a function to verify if a jwt is from a valid user
// to be called as middleware to perform basic authorization
// for users.
module.exports = async (req, res, next) => {
    console.log("YAAAAAAAAAAS")
    //grabbing cache from app
    let cache = req.app.get("cache");
    // grabbing jwt sent in body of request
    const bearer = req.headers["authorization"];
    if(bearer) {
        const accessToken = bearer.split(" ")[1];
        // getting clientId from env file
        // const audience = process.env.clientId
        // calling verify access token method. Takes in a token and the
        // expected audience for that token (i.e. a unique identifier for
        // our app/the issuer of token)
        oktaJwtVerifier.verifyAccessToken(accessToken, "0oa19phl3wEn9R1iI4x6")
            // if successful, we receive a decoded token with user's email, name
            // and authId that we add to the request to be sent to the next
            // route in the application
            .then(token => {
                const { email, name, sub } = token.claims;
                req.user = {
                    "email": email,
                    "name": name,
                }
                console.log("auth js file user: " + req.user)
                // checking if the user authId exists in our cache
                cache.get(`user${sub}`, (err, id) => {
                    if(err) {
                        req.error = {
                            "message": "authorization error", 
                            "error": req.error
                        }

                        next();
                    }

                    if(!id) {
                        // if not, getting userId from db and setting it in cache
                        Users.findByAuthId(sub).then(results => {
                            let subKey = "user" + sub;
                            cache.set(subKey, results[0]._id.toString());
                            req.user.id = results[0]._id;

                            next();
                        });
                    } else {
                        req.user.id = id;

                        next();
                    }
                });
            })
            // if unsuccessful, catch the error and add a failed message to the
            // to the request to be handled later in the workflow
            .catch(error => {
                req.error = {
                    "message": "authorization unsuccessful",
                    "error": error
                }
                next();
            })
    } else {
        req.error = {
            "message": "no token provided from user"
        }
        next();
    }
}

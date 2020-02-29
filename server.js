const express = require("express");

require('dotenv').config();

const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3030;
const Conversations = require("./controllers/API/Conversations.js")
// Square pay stuff
const crypto = require('crypto');
const squareConnect = require('square-connect');
const accessToken = process.env.PAY_TOKEN;

// Define middleware here
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// redis stuffs
const redis = require("redis");
let redisURL = process.env.REDIS_URL || {host: "127.0.0.1"}
const client = redis.createClient(redisURL);


client.on("connect", () => {
  console.log("redis connected");
  app.set("cache", client);
});

client.on("error", err => {
  console.log(err);
});

// Add routes, both API and view
app.use(routes);

// More square stuff
// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Balls");
// mongodb://user:userpassword1@ds157276.mlab.com:57276/heroku_b1dcvdgd
// MONGODB_URI=mongodb://user:userpassword1@ds157276.mlab.com:57276/heroku_b1dcvdgd

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Balls"
console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI);

// Start the API server
var server = app.listen(PORT)

const io = require("socket.io").listen(server);

io.sockets.on("connection", socket => {
  console.log(`socket connected: ${socket.id}`)
  socket.emit("id", socket.id);

  socket.on("disconnect", () => {
    console.log("socket: " + socket.id + " disconnected");
  })

  socket.on("newMessage", message => {
    console.log(message)
    Conversations.getUsers(message.conversationId)
    .then(usersResponse => {
      Conversations.createMessage(message)
      .then(result => {
        if(result.senderName) {
            for(let i = 0; i < usersResponse.userIds.length; i++) {
                console.log(`current user: ${usersResponse.userIds[i]}`);
                client.get(`socket${usersResponse.userIds[i]}`, (err, socketId) => {
                    if(err) {
                        console.log(err)
                    } else {
                        console.log(socketId);
                        console.log(io.sockets.connected)
                        let recipientSocket = io.sockets.connected[socketId]
                        if(recipientSocket) {
                          recipientSocket.emit("sentMessage", result);
                        }
                    }
                })
            }
        } else {
            console.log("could not write to db")
        }
      })
      .catch(error => {
        console.log(error);
      })
    })
    .catch(error => {
        console.log("some other error");
        console.log(error);
    })
  })
}); 

//   socket.on("newMessage", message => {
//     console.log(message);
//     Conversations.getUsers(message.conversationId)
//     .then(usersResponse => {
//       Conversations.createMessage(message)
//       .then(result => {
//         if(result.senderName) {
//             for(let i = 0; i < usersResponse.userIds.length; i++) {
//                 console.log(`current user: ${usersResponse.userIds[i]}`);
//                 client.get(`socket${usersResponse.userIds[i]}`, (err, socketId) => {
//                     if(err) {
//                         console.log(err)
//                     } else {
//                         console.log(socketId);
//                         console.log(socket.sockets.connected)
//                         if(socket.sockets.connected) {
//                           console.log("found recipient socket");
//                           socket.broadcast.to(socketId).emit("sentMessage", message);
//                         }
//                     }
//                 })
//             }
//         } else {
//             console.log("could not write to db")
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       })
//     })
//     .catch(error => {
//         console.log("some other error");
//         console.log(error);
//     })
//   })
// });






// MONGODB_URI=mongodb://user2020:userpassword2020@ds157276.mlab.com:57276/heroku_b1dcvdgd

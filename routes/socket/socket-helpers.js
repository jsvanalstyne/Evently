const Conversations = require("../../controllers/API/Conversations")

const disconnectListener = (socket) => {
    socket.on("disconnect", () => {
        console.log(`socket: ${socket.id} disconnected`);
    })
}

const sendMessage = (userIds, message, cache, io) => {
    for(let i = 0; i < userIds.length; i++) {
        cache.get(`socket${userIds[i]}`, (err, socketId) => {
            if(err) {
                console.log(err)
            } else {
                let recipientSocket = io.sockets.connected[socketId]
                
                if(recipientSocket) {
                  recipientSocket.emit("sentMessage", message);
                }
            }
        })
    }
}

const newMessageListener = (socket, cache, io) => {
    socket.on("newMessage", message => {
        console.log(message);
        Conversations.getUsers(message.conversationId)
        .then(users => {
            let userIds = users.userIds;

            Conversations.createMessage(message)
            .then(messageResult => {
                if(messageResult.senderName) {
                    sendMessage(userIds, messageResult, cache, io);

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
}


module.exports = {disconnectListener, newMessageListener}

// socket.on("disconnect", () => {
//     console.log("socket: " + socket.id + " disconnected");
//   })

//   socket.on("newMessage", message => {
//     console.log(message)
//     Conversations.getUsers(message.conversationId)
//     .then(usersResponse => {
//       Conversations.createMessage(message)
//       .then(result => {
//         if(result.senderName) {
//             for(let i = 0; i < usersResponse.userIds.length; i++) {
//                 client.get(`socket${usersResponse.userIds[i]}`, (err, socketId) => {
//                     if(err) {
//                         console.log(err)
//                     } else {
//                         let recipientSocket = io.sockets.connected[socketId]
//                         if(recipientSocket) {
//                           recipientSocket.emit("sentMessage", result);
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
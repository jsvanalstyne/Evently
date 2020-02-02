var API = require("./Conversations.js");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Balls');


const conversations = ["5e35c71607cf87e4497c4189", "5e35c71607cf87e4497c4187", "5e35c71607cf87e4497c4188"];

API.addUser("5e35c71607cf87e4497c418f", "5e36e6455c2d3ff91fe7a39a", result => {
    console.log(result);
})
    // API.findById("5e36e6455c2d3ff91fe7a39a", result => {
    //     console.log(result)
    //     // API.delete(result._id, result => {
    //     //     console.log(result);
    //     // })
    // })
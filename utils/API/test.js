var API = require("./Users.js");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Balls');

const user = {
    "authId": 9
}

API.findById("5e36e63be9411df90dab128a", result => {
        console.log(result);
       
    })
    // API.findById("5e36e6455c2d3ff91fe7a39a", result => {
    //     console.log(result)
    //     // API.delete(result._id, result => {
    //     //     console.log(result);
    //     // })
    // })
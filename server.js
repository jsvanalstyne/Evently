var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
const dbconn = process.env.MONGO_URL || "mongodb://localhost/Evently"
mongoose.connect(dbconn, { useNewUrlParser: true });

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("hello, world!");
})

module.exports = app;

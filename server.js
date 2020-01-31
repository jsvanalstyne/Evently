var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("hello, world!");
})

module.exports = app;

// initializing a router after importing express
const router = require("express").Router();
// importing conversation controller
const Converstions = require("../../controllers/API/Conversations.js");
// importing users controller
const Users = require("../../controllers/API/Users.js");
// importing middleware for authorization
const auth = require("../auth/authorization.js");




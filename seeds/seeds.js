var seeder = require('mongoose-seed');
var UsersSeeds = require("../seeds/UsersSeeds");
var ProgramsSeeds = require("../seeds/ProgramsSeeds");
var OrganizationsSeeds = require("../seeds/OrganizationsSeeds");
var MessagesSeeds = require("../seeds/MessagesSeeds");
var FacilitiesSeeds = require("../seeds/FacilitiesSeeds");
var EventsSeeds = require("../seeds/EventsSeeds");
var EmployeesSeeds = require("../seeds/EmployeesSeeds");
var ConversationsSeeds = require("../seeds/ConversationsSeeds");
var AccountsSeeds = require("../seeds/AccountsSeeds");
var path = require("path")

const modelsData = [UsersSeeds, AccountsSeeds, ConversationsSeeds, MessagesSeeds, 
                    OrganizationsSeeds, FacilitiesSeeds, EmployeesSeeds, 
                    ProgramsSeeds, EventsSeeds]

const models = ['Users', 'Accounts', 'Conversations', 'Messages', 'Organizations', 
                'Facilities', 'Employees', 'Programs', 'Events']

// Connect to MongoDB via Mongoose

seeder.connect(process.env.MONGODB_URI ||'mongodb://user2020:userpassword2020@ds157276.mlab.com:57276/heroku_b1dcvdgd', function() {
 
    // Load Mongoose models
    seeder.loadModels([
        path.join(__dirname, "../models/Accounts.js"),
        path.join(__dirname,"../models/Conversations.js"),
        path.join(__dirname, "../models/Employees.js"),
        path.join(__dirname, "../models/Events.js"),
        path.join(__dirname,"../models/Facilities.js"),
        path.join(__dirname,"../models/Messages.js"),
        path.join(__dirname,"../models/Organizations.js"),
        path.join(__dirname, "../models/Programs.js"), 
        path.join(__dirname,"../models/Users.js")
    ]);

    seeder.clearModels(models, function() {
        seeder.populateModels(modelsData, function() {
            seeder.disconnect();

        });            
    });
});

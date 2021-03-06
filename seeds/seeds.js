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
var PromosSeeds = require("../seeds/PromosSeeds");
var path = require("path")

const modelsData = [UsersSeeds, AccountsSeeds, ConversationsSeeds, MessagesSeeds, 
                    OrganizationsSeeds, FacilitiesSeeds, EmployeesSeeds, 
                    ProgramsSeeds, EventsSeeds, PromosSeeds]

const models = ['Users', 'Accounts', 'Conversations', 'Messages', 'Organizations', 
                'Facilities', 'Employees', 'Programs', 'Events', 'Promos']

// Connect to MongoDB via Mongoose
// mongodb://user2020:userpassword2020@ds157276.mlab.com:57276/heroku_b1dcvdgd
seeder.connect('mongodb://localhost/Balls', function() {
 
    // Load Mongoose models
    seeder.loadModels([
        "../models/Accounts.js",
        "../models/Conversations.js",
        "../models/Employees.js",
        "../models/Events.js",
        "../models/Facilities.js",
        "../models/Messages.js",
        "../models/Organizations.js",
        "../models/Programs.js", 
        "../models/Users",
        "../models/Promos"
    ]);

    seeder.clearModels(models, function() {
        seeder.populateModels(modelsData, function() {
            seeder.disconnect();

        });            
    });
});

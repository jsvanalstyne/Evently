const Events = require("../../models/Events.js");
const Programs = require("../../models/Programs.js");
const Groups = require("../../models/Groups");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    // ------------------ GET ------------------
    // Find a specific event by id
    getProgramById: (programId, cb) => {
        programId = ObjectId(programId);

        Programs.findById(programId)
        .then(cb)
    },
    // Find all events associated with a given organization
    // and program and sort by start date 
    getEventsByProgram: (organizationId, programId, cb) => {
        organizationId = ObjectId(organizationId);
        programId = ObjectId(programId);

        Events.find({
            "organizationId": organizationId, 
            "programId": programId
        })
        .sort({"startDate": 1})
        .then(cb)
    }, 
    // Find all programs associated with a given organization
    // and sort by date
    getProgramsByOrganization: (organizationId, cb) => {
        organizationId = ObjectId(organizationId);

        Programs.find({
            "organizationId": organizationId
        })
        .sort({"startDate": 1})
        .then(cb)
    },
    getGroupIdForUser: (id, cb) => {
        // userId= ObjectId(id)
        Groups.find({"userIds":{$in: id}})
        .then(cb)
    },
    getProgramsForGroups: (groupId, cb) => {
        // groupIds = ObjectId(groupId)
        Programs.find({"groupIds":{$in : groupId}})
        .then(cb);
    },
    addUserToProgram: (eventId, userId, cb) => {
        let programIdAsObject = ObjectId(eventId);
        // console.log("we got in this bitch")
        // console.log(eventIdAsObject);
        Programs.findById(programIdAsObject)
        .then(function(result) {
            console.log(result);
            // console.log("we got in the callback from the helper");
            id = result.groupIds;
            // console.log(id)
            Groups.findByIdAndUpdate(id, {$push:{"userIds": userId}})
            .then(cb)
        })
    },
    // ------------------ POST ------------------
    // Add new program to database. Event object contains: 
    //  1. name: name of program being created
    //  2. desciption: description of the program (max 500 chars)
    //  3. organizationId: id of organization associated with the program
    //  4. dateStart: start program date
    //  5. dateEnd: end program date  
    //  6. adminIds: employees owning the event
    //  7. cost: (optional) cost of event
    create: (program, cb) => {
        Programs.create(program)
        .then(cb)
    }, 
    // ------------------ PUT ------------------
    // Find event by Id and use filter object (that 
    // contains keys and values to update) to update
    // event in database
    updateEvent: (programId, filters, cb) => {
        eventId = ObjectId(programId);

        Programs.findByIdAndUpdate(programId, filters)
        .then(cb)
    }, 
    // ------------------ DELETE ------------------
    // find event by id and remove it from database
    delete: (programId, cb) => {
        programId = ObjectId(programId);

        Programs.findByIdAndDelete(programId)
        .then(cb);
    }
};
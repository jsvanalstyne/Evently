const Events = require("../../models/Events.js");
const Groups = require("../../models/Groups");
const ObjectId = require("mongoose").Types.ObjectId;


module.exports = {
    // ------------------ GET ------------------
    // Find a specific event by id
    getEventById: (eventId, cb) => {
        eventId = ObjectId(eventId);
        console.log(eventId);
        console.log("line13");
        Events.find({"_id": ObjectId(eventId)})
        .then(cb)
    },
    // Find all events associated with a given organization
    // and sort by start date 
    getEventsByOrganization: (organizationId, cb) => {
        Events.find({"organizationId": organizationId})
        .sort({"startDate": 1})
        .then(cb)
    }, 
    
    // Find all events associated with a given organization
    // and exclude all events that are associated with 
    // a given program and sort by 
    getNonProgramEventsByOrganization: (organizationId, cb) => {
        organizationId = ObjectId(organizationId);
        console.log("line 27" + organizationId);
        Events.find({
            "organizationId": organizationId, 
        
        })
        .sort({"startDate": 1})
        .then(cb)
    },
    getGroupIdForUser: (id, cb) => {
        // userId= ObjectId(id)
        console.log("line39 in events controller" +id)
        Groups.find({"userIds":{$in: id}})
        .then(cb)
    },
    getEventsForGroups: (groupId, cb) => {
        // groupIds = ObjectId(groupId)
        Events.find({"groupIds":{$in : groupId}})
        .then(cb);
    },
    
    // ------------------ POST ------------------
    // Add new event to database. Event object contains: 
    //  1. name: name of event being created
    //  2. desciption: description of the event (max 500 chars)
    //  3. organizationId: id of organization associated with event
    //  4. dateStart: start event date
    //  5. dateEnd: end event date  
    //  6. facilityId: id of facility the event is held at
    //  7. programId: (optional) id of program associated 
    //     with event
    //  8. setUpNotes: instructions for setting up event
    //  9. tearDownNotes: instructions for cleaning up 
    //     after event
    //  10. groupIds: (optional) groups associated with event
    //  11. type: (optional) type of event
    //  12. adminIds: employees owning the event
    //  13. cost: (optional) cost of event
    create: (event, cb) => {
        Events.create(event)
        .then(cb)
    }, 
    // ------------------ PUT ------------------
    // Find event by Id and use filter object (that 
    // contains keys and values to update) to update
    // event in database
    updateEvent: (eventId, filters, cb) => {
        eventId = ObjectId(eventId);

        Event.findByIdAndUpdate(eventId, filters)
        .then(cb)
    }, 
    
    // add a user to a group associated within an event
    addUserToEvent: (eventId, userId, cb) => {
        let eventIdAsObject = ObjectId(eventId);
        // console.log("we got in this bitch")
        // console.log(eventIdAsObject);
        Events.findById(eventIdAsObject)
        .then(function(result) {
            console.log(result);
            // console.log("we got in the callback from the helper");
            id = result.groupIds;
            // console.log(id)
            Groups.findByIdAndUpdate(id, {$push:{"userIds": userId}})
            .then(cb)
        })
    },
    // ------------------ DELETE ------------------
    // find event by id and remove it from database
    delete: (eventId, cb) => {
        eventId = ObjectId(eventId);

        Events.findByIdAndDelete(eventId)
        .then(cb);
    }
};
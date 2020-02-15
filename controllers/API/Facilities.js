const Facilities = require("../../models/Facilities.js");
const Events = require("../../models/Events.js");

const ObjectId = require("mongoose").Types.ObjectId;


module.exports = {
    // ------------------ GET ------------------
    // Find all facilities associated with a specific
    // organization Id
    getFacilitiesByOrganization: (organizationId, cb) => {
        organizationId = ObjectId(organizationId);

        Facilities.find({"organizationId": organizationId})
        .then(cb)
    }, 
    // Find all facilities available between two dates
    // events controlled when facility is booked 
    // find all facility ids that don't have an event registered
    // this is fucked but whatever 
    getAvailableFacilities: (organizationId, startDate, endDate, cb) => {
        organizationId = ObjectId(organizationId);

        Events.find({
                // "organizationId": organizationId,
                $or: [{"startDate": {$gte: startDate}, "startDate": {$lt: endDate}}, 
                      {"endDate": {$gte: startDate}, "endDate": {$lt: endDate}}]
        })
        .select("facilityId")
        .then(cb)
    },
    // ------------------ POST ------------------
    // Creates event document in db containing: 
    //   1. name: name of facility
    //   2. description: desciption of facility
    //   3. capacity: number of people who can fit in 
    //      facility
    //   4. organizationId: id of organization associated
    //      with the facility
    //   5. type: type of facility options: "Pool", "Court", "Event space", "Field", 
    //            "Classroom", "Performance", "General", "Studio", "Gym", "Track"
    //            "Other" (default to other)
    create: (facility, cb) => {
        Facilities.create(facility)
        .then(cb)
    },
    // ------------------ PUT ------------------
    // Find facility by Id and use filter object (that 
    // contains keys and values to update) to update
    // event in database
    update: (facilityId, filters, cb) => {
        facilityId = ObjectId(facilityId);

        Facilities.findByIdAndUpdate(facilityId, filters)
        .then(cb)
    },
    // ------------------ DELETE ------------------
    delete: (facilityId, cb) => {
        facilityId = ObjectId(facilityId);
        Facilities.findByIdAndRemove(facilityId)
        .then(cb)
    }


}
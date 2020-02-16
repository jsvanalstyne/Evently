const events = require("./Events");
var eventId = "5e35c71607cf87e4497c41b9"
var userId = "5e35c71607cf87e4497c418b";

// events.getGroupIdFromEvent(eventId, function(result) {
//     console.log(result);
// });

events.addUserToEvent(eventId, userId, function(result){
    console.log(result)
});
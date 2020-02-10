import axios from  "axios";
const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
console.log(token);

export default {

getAllPrograms: function(id){
    console.log("inside getAllPrograms");
    console.log(id)
    return axios.get("/api/programs/" +id);
   
},

getAllEvents: function(id){
    console.log("inside all events")
    return axios.get("/api/events/" + id)
},

getUserInformationFromDb: function(){
    console.log("inside of getUserInformation")
    return axios.get({
        "url": "/api/users/information",
        "data": {
            "jwt": token
        }
    })
}


}
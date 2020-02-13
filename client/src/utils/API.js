import axios from "axios";
export default {
    getAllPrograms: function (id) {
        console.log("inside getAllPrograms");
        console.log(id)
        return axios.get("/api/programs/" + id);
    },
    getAllEvents: function (id) {
        console.log("inside all events")
        return axios.get("/api/events/" + id)
    },
    getUserInformationFromDb: function () {
        console.log("inside of getUserInformation")
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token)

        return axios({
            method: "GET",
            url: "/api/users/information",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }
}
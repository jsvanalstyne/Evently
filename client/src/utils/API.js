import axios from "axios";
export default {
    getAllPrograms: function (id) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/programs/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        });
    },
    getAllEvents: function (id) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/events/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
           
        })
    },
    getUserInformationFromDb: function () {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/users/information",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }, 
    getAllConversations: function() {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/conversations/all",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    createConversation: function(conversation) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "POST", 
            url: "/api/conversations/create", 
            data: {
                "conversation": conversation
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getUserAccountInfoFromDb: function(){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        return axios({
            method: "GET",
            url: "/api/users/account",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    cancelEventRegistration: function(id){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token + "inside cancelEventRegistration")
        console.log(id);
        return axios({
            method: "DELETE",
            url: "/api/events/removal/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    cancelProgramRegistration: function(id){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token + "inside cancelEventRegistration")
        console.log(id);
        return axios({
            method: "DELETE",
            url: "/api/programs/removal/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },




    getOrganizationsPromos: function (id) {
        console.log("inside of getOrganizationPromoEvents" + id)
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        console.log(token)
        return axios({
            method: "GET",
            url: "/api/events/promos/"+ id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },

    getCalendarEventPrograms: function(id) {
        console.log("inside calendar");
        return axios.get("/api/events/allevents/" + id);
    
    }, 
    getUserByEmail: function(email) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET", 
            url: "/api/users/information/" + email, 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getUserPrograms: function() {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/users/registeredprograms",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }, 
    createMessage: function(message) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "POST", 
            url: "/api/messages/create", 
            data: {
                "message": message
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }, 
    createSocketConnection: function(socketId, conversationId) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken;

        return axios({
            method: "POST", 
            url: "/api/conversations/create-connection",
            data: {
                "socketId": socketId
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getUserEventsProgramCalendar: function(){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        return axios({
            method: "GET",
            url: "/api/users/calendar",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    getMessagesByConversation: function(conversationId) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken;

        return axios({
            method: "GET", 
            url: "/api/conversations/messages/" + conversationId, 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }, 
    
    getConversationById: function(conversationId) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken;

        return axios({
            method: "GET", 
            url: "/api/conversations/one/" + conversationId, 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },

    getUserBills: function (){
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken
        
        return axios({
            method: "GET",
            url: "/api/bills",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }, 

    getTasksByWeek: (startTime, endtTime) => {
        // const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/tasks/by-week/" + startTime + "/" + endtTime,
            // headers: {
            //     "Content-Type": "application/json",
            //     "Accept": "application/json",
            //     "Authorization": "Bearer " + token
            // }
        })
    }


}
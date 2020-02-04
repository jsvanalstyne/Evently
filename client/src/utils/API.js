import axios from  "axios";

export default {

getAllPrograms: function(id){
    console.log("inside getAllPrograms");
    console.log(id)
    return axios.get("/api/programs/" +id);
   
}

}
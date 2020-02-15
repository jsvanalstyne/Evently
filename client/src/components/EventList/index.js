import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import API from "../../utils/API";

class EventList extends Component {

    constructor(props) {
      super(props);
     
    }
    cancelEvent=(id) =>{
        console.log(id)
        API.cancelEventRegistration(id)
        .then(res =>{
            console.log(res)
            window.location.reload(false);
        })
    }
  
    render() {
      return (
        <div className="card-body">
            <div className="border">
                <p className="card-text mt-3">{this.props.name}</p>
               <Button className="mb-3"  eventid={this.props.eventid} 
               onClick={ () => this.cancelEvent(this.props.eventid)}
               >Cancel Registration</Button>
            </div>
            </div>
           
    )
}
}
export default EventList;
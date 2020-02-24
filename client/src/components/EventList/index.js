import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import API from "../../utils/API";

const style= {
  eventBtn: {
    backgroundColor: "#5BC0EB"
  }
}

class EventList extends Component {

  constructor(props) {
    super(props);

  }
  cancelEvent = (id, type) => {
    console.log("line 12 "+ id)
    console.log("line 13 " + type)
    switch (type) {
      case "event":
       API.cancelEventRegistration(id)
          .then(res => {
            console.log(res)
            window.location.reload(false);
          });
        break;
      case "program":
        console.log("program")
        API.cancelProgramRegistration(id)
          .then(res => {
            console.log(res)
            window.location.reload(false);
          });
        break;
      default:
       return "broken switch"
    }

  }

  render() {
    return (
      <div className="card-body">
        <div className="border border-dark eventList">
          <p className="card-text mt-3">{this.props.name}</p>
          <Button className="mb-3" style= {style.eventBtn} eventid={this.props.eventid}
            onClick={() => this.cancelEvent(this.props.eventid, this.props.type)}
          >Cancel Registration</Button>
        </div>
      </div>

    )
  }
}
export default EventList;
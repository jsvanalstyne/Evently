import React from "react";
import Button from 'react-bootstrap/Button'

function EventList (props) {
    return (

        <div className="card-body">
            <div className="border">
                <p className="card-text mt-3">{props.name}</p>
               <Button className="mb-3">Cancel Registration</Button>
            </div>
            </div>
           
    )
}
export default EventList;
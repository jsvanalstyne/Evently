import React, { Component } from "react";
import "./index.css";


class CreateTaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "", 
            description: "", 
            startTime: "", 
            endTime: "",
            invitees: []
        }
    }

    render() {
        return (
            <form className="create-task-form">
                <label className="form-label" for></label>
                <input/>
            </form>
        )
    }

}

export default CreateTaskForm;
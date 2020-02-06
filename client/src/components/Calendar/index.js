import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import API from "../utils/API"
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class MyCalendars extends Component {

  constructor(props) {
    super(props);
    const now = new Date();
    
    this.state = {
      name: 'React',
      
    };
  }

  render() {
    return (
      <div>
        
        <div className="calContainer" style={{ height: '500pt'}}>
          <Calendar
            events={this.props.events}
            titleAccessor= "name"
            startAccessor="dateStart"
            endAccessor="dateEnd"
            defaultDate={moment().toDate()}
            localizer={localizer}
            drilldownView= "agenda"
            defaultView="month"
            views= {["month", "agenda"]}

          />
        </div>
      </div>
    );
  }
}
export default MyCalendars;
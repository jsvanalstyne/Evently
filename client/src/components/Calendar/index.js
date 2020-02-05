import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class MyCalendars extends Component {

  constructor(props) {
    super(props);
    const now = new Date();
    // const events = []
      // {
      //     id: 0,
      //     title: 'All Day Event very long title',
      //     allDay: true,
      //     start: new Date(2020, 3, 0),
      //     end: new Date(2020, 3, 1),
      // },
      // {
      //     id: 1,
      //     title: 'Long Event',
      //     start: new Date(2020, 3, 7),
      //     end: new Date(2020, 3, 10),
      // },

      // {
      //     id: 2,
      //     title: 'DTS STARTS',
      //     start: new Date(2020, 2, 13, 0, 0, 0),
      //     end: new Date(2020, 2, 20, 0, 0, 0),
      // },

      // {
      //     id: 3,
      //     title: 'DTS ENDS',
      //     start: new Date(2020, 10, 6, 0, 0, 0),
      //     end: new Date(2020, 10, 13, 0, 0, 0),
      // },

      // {
      //     id: 4,
      //     title: 'Some Event',
      //     start: new Date(2020, 3, 9, 0, 0, 0),
      //     end: new Date(2020, 3, 10, 0, 0, 0),
      // },
      // {
      //     id: 5,
      //     title: 'Conference',
      //     start: new Date(2020, 3, 11),
      //     end: new Date(2020, 3, 13),
      //     desc: 'Big conference for important people',
      // },
      // {
      //     id: 6,
      //     title: 'Meeting',
      //     start: new Date(2020, 3, 12, 10, 30, 0, 0),
      //     end: new Date(2020, 3, 12, 12, 30, 0, 0),
      //     desc: 'Pre-meeting meeting, to prepare for the meeting',
      // },
      // {
      //     id: 7,
      //     title: 'Lunch',
      //     start: new Date(2020, 3, 12, 12, 0, 0, 0),
      //     end: new Date(2020, 3, 12, 13, 0, 0, 0),
      //     desc: 'Power lunch',
      // },
      // {
      //     id: 8,
      //     title: 'Meeting',
      //     start: new Date(2020, 3, 12, 14, 0, 0, 0),
      //     end: new Date(2020, 3, 12, 15, 0, 0, 0),
      // },
      // {
      //     id: 9,
      //     title: 'Happy Hour',
      //     start: new Date(2020, 3, 12, 17, 0, 0, 0),
      //     end: new Date(2020, 3, 12, 17, 30, 0, 0),
      //     desc: 'Most important meal of the day',
      // },
      // {
      //     id: 10,
      //     title: 'Dinner',
      //     start: new Date(2020, 3, 12, 20, 0, 0, 0),
      //     end: new Date(2020, 3, 12, 21, 0, 0, 0),
      // },
      // {
      //     id: 11,
      //     title: 'Birthday Party',
      //     start: new Date(2020, 3, 13, 7, 0, 0),
      //     end: new Date(2020, 3, 13, 10, 30, 0),
      // },
      // {
      //     id: 12,
      //     title: 'Late Night Event',
      //     start: new Date(2020, 3, 17, 19, 30, 0),
      //     end: new Date(2020, 3, 18, 2, 0, 0),
      // },
      // {
      //     id: 12.5,
      //     title: 'Late Same Night Event',
      //     start: new Date(2020, 3, 17, 19, 30, 0),
      //     end: new Date(2020, 3, 17, 23, 30, 0),
      // },
      // {
      //     id: 13,
      //     title: 'Multi-day Event',
      //     start: new Date(2020, 0, 20, 19, 30, 0),
      //     end: new Date(2020, 0, 22, 2, 0, 0),
      // },
      // {
      //     id: 14,
      //     title: 'Today',
      //     start: new Date(new Date().setHours(new Date().getHours() - 3)),
      //     end: new Date(new Date().setHours(new Date().getHours() + 3)),
      // },
      // {
      //     id: 15,
      //     title: 'Point in Time Event',
      //     start: now,
      //     end: now,
      // },
    // ]
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
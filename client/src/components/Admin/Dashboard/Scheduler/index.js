import React, { Component } from "react";
import DayAndDateDisplay from "../DayAndDateDisplay";
import Task from "../Task";
import API from "../../../../utils/API.js";
import moment from "moment";
import "./index.css";


class Schedule extends Component {
    constructor() {
        super();

        this.weekDays = moment.weekdays();

        this.state = {
            weeks: new Map(),
            currWeek: "",
            currDay: 0,
            showBody: true
        }
    }

    getWeekStartAndEnd = (day=moment()) => {
        let startOfWeek = day.clone().startOf('isoWeek')._d;
        let endOfWeek = day.clone().endOf('isoWeek')._d;

        return [startOfWeek, endOfWeek]
    }

    componentDidMount = () => {
        let [weekStart, weekEnd] = this.getWeekStartAndEnd();

        API.getTasksByWeek(weekStart, weekEnd)
        .then(response => {
            this.setState(prevState => {

                return {
                    weeks: prevState.weeks.set(weekStart, response.data.week),
                    currWeek: weekStart, 
                    currDay: moment().day() == 0 ? 6 : moment.day() - 1, 
                    showBody: true
                }
            }, () => console.log(this.state))
        })
    }

    getDaysAndDatesDisplays = () => {
        let currWeek = this.state.weeks.get(this.state.currWeek);

        if(currWeek) {
            return currWeek.map((day, i) => {

                return (
                    <DayAndDateDisplay 
                     dayOfWeek={day.dayOfWeek} 
                     dayAsNumber={day.dayAsNumber}
                     isCurrDay={this.state.currDay == i}
                     onClick={() => this.setState({currDay: i})}
                    />
                )
            })
        } 
    }

    getTaskDisplays = () => {
        let currWeek = this.state.weeks.get(this.state.currWeek)

        if(currWeek) {
            let currDay = currWeek[this.state.currDay];

            if(currDay) {
                return currDay.tasks.map(task => {
                    return <Task data={task}/>
                });
            }
        }
    }

    getNewWeek = (numDays) => {
        let newWeek = moment(this.state.currWeek).add(numDays, "days");

        let [newWeekStart, newWeekEnd] = this.getWeekStartAndEnd(newWeek);
        
        API.getTasksByWeek(newWeekStart, newWeekEnd)
        .then(response => {
            this.setState(prevState => {

                return {
                    weeks: prevState.weeks.set(newWeekStart, response.data.week),
                    currWeek: newWeekStart, 
                    currDay: prevState.currDay, 
                    showBody: true
                }
            })
        })
    }

    render = () => {
        return (
            <div className="dashboard-schedule-container">
                <div className="year-month-heading-container">
                    <h3 className="year-month-display">February 2020</h3>
                </div>
                <div className="day-of-week-slide">
                    <button className="week-control-slide" onClick={() => this.getNewWeek(-7)}>
                        <p>{"<"}</p>
                    </button>
                    {this.getDaysAndDatesDisplays()}
                    <button className="week-control-slide" onClick={() => this.getNewWeek(7)}>
                        <p>{">"}</p>
                    </button>
                </div>
                {
                    this.state.showBody ? 
                    <div className="schedule-body">
                        {this.getTaskDisplays()}
                    </div> :
                    <form className="create-task-form">

                    </form>
                }
            </div>
        )
    }

}

export default Schedule;
import React, { Component } from "react";
import DayAndDateDisplay from "../DayAndDateDisplay";
import Task from "../Task";
import CreateTaskForm from "../CreateTaskForm"
import API from "../../../../utils/API.js";
import moment from "moment";
import "./index.css";


class Schedule extends Component {
    constructor() {
        super();

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
            })
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

    getMonthAndYearDisplay = () => {
        let dateAsString = this.state.currWeek.toString();
        
        return `${dateAsString.split(" ")[1]} ${dateAsString.split(" ")[3]}`;
    }

    render = () => {
        return (
            <div className="dashboard-schedule-container">
                <div className="year-month-heading-container">
                    <h3 className="year-month-display">{this.getMonthAndYearDisplay()}</h3>
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
                        <button className="show-create-task-form" onClick={() => this.setState({showBody: false})}>
                            <span>+</span>
                        </button>
                        {this.getTaskDisplays()}
                    </div> :
                    <CreateTaskForm 
                        close={() => this.setState({showBody: true})}
                        currWeek={this.state.currWeek}
                        currDay={this.state.currDay}
                    />
                }
            </div>
        )
    }

}

export default Schedule;
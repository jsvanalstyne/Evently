import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";
import FunCard from "../components/Funcard";
import Border from "../components/Border";
import Headers from "../components/Headers";
import MyCalendars from "../components/Calendar";
import API from "../utils/API";
import { isValidObjectId } from "mongoose";
import Nav from "../components/Nav"
import { Collapse, Button } from "react-bootstrap";
var moment = require("moment");
​
const style = {
    seeBtn: {
        backgroundColor: "#5BC0EB",
        color: "rgb(15, 15, 15)",
        border: "rgb(15, 15, 15)",
    }
}
​
class Funtivity extends Component {
    state = {
        organizationid: "5e35c71607cf87e4497c41a9",
        programs: [],
        events: [],
        programopen: false,
        eventopen: false,
        calendar: [],
        registeredprograms: [],
        registeredevents: []
    }
​
    handleCollapse(name) {
        this.setState({ [name]: !this.state[name] })
    }
    componentDidMount() {
        this.getPrograms();
        this.getEvents();
        this.getCalendar();
        this.getUserPrograms();
        this.getUserEvents();
​
    }
​
    getPrograms = () => {
        API.getAllPrograms(this.state.organizationid)
            .then(res => {
                // console.log("PROGRAMS RES: " + JSON.stringify(res.data))
                this.setState({ programs: res.data })
                // console.log("EVENT RES: " + this.state.programs)
            })
    }
    getEvents = () => {
        API.getAllEvents(this.state.organizationid)
            .then(res => {
                // console.log("EVENT RES: " + res.data[0])
                this.setState({ events: res.data })
                // console.log("EVENT RES: " + this.state.events)
            });
        
    }
    getCalendar = () => {
        API.getCalendarEventPrograms(this.state.organizationid)
            .then(res => {
                this.setState({ calendar: res.data})
            })
    }
    getUserPrograms = () => {
        API.getUserPrograms()
        .then(res => {
            console.log("GET USER PROG: " + JSON.stringify(res.data))
            let paidPrograms = res.data.map(paidProgIds => {
                return paidProgIds.id
            })
            console.log(paidPrograms)
            this.setState({registeredprograms: paidPrograms})
        })
    }
    getUserEvents = () => {
        API.getUserInformationFromDb()
        .then(res => {
            console.log("GET USER EVENTS: " + JSON.stringify(res.data))
            let paidEvents = res.data.map(paidEventIds => {
                return paidEventIds._id
            })
            console.log(paidEvents)
            this.setState({registeredevents: paidEvents})
        })
    }
    // Get the user events/programs, map over them to get ids and setstate of registered events to array of ids
    determinePaidProg = (id) => {
        return this.state.registeredprograms.includes(id)
    }
    determinePaidEvent = (id) => {
        return this.state.registeredevents.includes(id)
    }
​
    render() {
        // this.state.programs.map(upcomingprograms => 
        //     console.log("TESTING:" + this.state.registeredprograms.includes(upcomingprograms._id)))
        return (
            <div>
                <Nav/>
                <div className="container">
                    <Border>
                        <Headers heading="Programs" />
                        <div>
                        
                            {this.state.programs.length <= 3 ? this.state.programs.map(upcomingprograms => (
                                <FunCard
                                    registered={this.determinePaidProg(upcomingprograms._id)}
                                    key={upcomingprograms._id}
                                    event={upcomingprograms.name}
                                    // eventId= {upcomingprograms._id}
                                    description={upcomingprograms.description}
                                    date={moment(upcomingprograms.dateStart).format('LLL')}
                                    type= "program"
                                    // {/* location={upcomingprograms.location} */}
                                    price={upcomingprograms.price}
                                    eventId={upcomingprograms._id}
                                    eventName={upcomingprograms.name}>
                                </FunCard>
                            ))
                                :
                                <Row>
                                    {[...this.state.programs].splice(0, 3).map(upcomingprograms => (
                                        <FunCard
                                            registered={this.determinePaidProg(upcomingprograms._id)}
                                            key={upcomingprograms._id}
                                            event={upcomingprograms.name}
                                            // eventId= {upcomingprograms._id}
                                            description={upcomingprograms.description}
                                            date={moment(upcomingprograms.dateStart).format('LLL')}
                                            type= "program"
                                            // {/* location={upcomingprograms.location} */}
                                            price={upcomingprograms.price}
                                            eventId={upcomingprograms._id}
                                            eventName={upcomingprograms.name}
                                            >
                                        </FunCard>
                                    ))
                                    }
                                    <Collapse in={this.state.programopen}>
                                        <div id="program-collapse">
                                            <Row>
                                                {[...this.state.programs].splice(3).map(upcomingprograms => (
                                                    <FunCard
                                                        registered={this.determinePaidProg(upcomingprograms._id)}
                                                        key={upcomingprograms._id}
                                                        event={upcomingprograms.name}
                                                        // eventId= {upcomingprograms._id}
                                                        description={upcomingprograms.description}
                                                        date={moment(upcomingprograms.dateStart).format('LLL')}
                                                        type= "program"
                                                        // {/* location={upcomingprograms.location} */}
                                                        price={upcomingprograms.price}
                                                        eventId={upcomingprograms._id}
                                                        eventName={upcomingprograms.name}
                                                        >
                                                    </FunCard>))}
                                            </Row>
                                        </div>
                                    </Collapse>
​
                                    <Button
                                        className="collapsedButton"
                                        style={style.seeBtn}
                                        onClick={() => this.handleCollapse("programopen")}
                                        aria-expanded={this.state.programopen}
                                        aria-controls="program-collapse"
                                    >
                                        {this.state.programopen ? "See Less" : "See More"}
                                    </Button>
                                </Row>
                            }
                        </div>
                    </Border>
                    <Border>
                        <Headers heading="Events" />
                        <div>
                            {this.state.events.length <= 3 ? this.state.events.map(upcomingevents => (
​
                                <FunCard
                                    registered={this.determinePaidEvent(upcomingevents._id)}
                                    key={upcomingevents._id}
                                    // eventId= {upcomingevents._id}
                                    event={upcomingevents.name}
                                    description={upcomingevents.description}
                                    date={moment(upcomingevents.dateStart).format('LLL')}
                                    type= "event"
                                    // {/* location={upcomingprograms.location} */}
                                    price={upcomingevents.price}
                                    eventName={upcomingevents.name}
                                    eventId={upcomingevents._id}>
                                </FunCard>
                            ))
                                :
                                <Row>
                                    {[...this.state.events].splice(0, 3).map(upcomingevents => (
                                        <FunCard
                                            registered={this.determinePaidEvent(upcomingevents._id)}
                                            key={upcomingevents._id}
                                            // eventId= {upcomingevents._id}
                                            event={upcomingevents.name}
                                            description={upcomingevents.description}
                                            date={moment(upcomingevents.dateStart).format('LLL')}
                                            eventName={upcomingevents.name}
                                            type= "event"
                                            // {/* location={upcomingprograms.location} */}
                                            price={upcomingevents.price}
                                            eventId={upcomingevents._id}>
                                        </FunCard>
                                    ))
                                    }
                                    <Collapse in={this.state.eventopen}>
                                        <div id="program-collapse">
                                            <Row>
                                                {[...this.state.events].splice(3).map(upcomingevents => (
                                                    <FunCard
                                                        registered={this.determinePaidEvent(upcomingevents._id)}
                                                        key={upcomingevents._id}
                                                        // eventId= {upcomingevents._id}
                                                        event={upcomingevents.name}
                                                        eventName={upcomingevents.name}
                                                        description={upcomingevents.description}
                                                        date={moment(upcomingevents.dateStart).format('LLL')}
                                                        type= "event"
                                                        // {/* location={upcomingprograms.location} */}
                                                        price={upcomingevents.price}
                                                        eventId={upcomingevents._id}>
                                                    </FunCard>))}
                                            </Row>
                                        </div>
                                    </Collapse>
​
                                    <Button
                                        className="collapsedButton"
                                        style={style.seeBtn}
                                        onClick={() => this.handleCollapse("eventopen")}
                                        aria-expanded={this.state.eventopen}
                                        aria-controls="program-collapse"
                                    >
                                        {this.state.eventopen ? "See Less" : "See More"}
                                    </Button>
                                </Row>
                            }
                        </div>
                    </Border>
​
                    
                    <Border>
                        <Headers heading=" Fun Calendar" />
                        <Row>
                            <Col size="12">
                                <MyCalendars
                                    events={this.state.calendar}/>
                            </Col>
                        </Row>
                    </Border>
​
                </div>
                <Footer/>
            </div>
        );
    }
​
}

export default Funtivity;
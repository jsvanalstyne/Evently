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

// const programs = [{
//     event: "Dolphin Swim Practice",
//     description: "Ages 7-10",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// },
// {
//     event: "Boys Youth basketball",
//     description: "Ages 12-15",
//     date: "2/1/20-5/1/20",
//     location: "Chapel Hill YMCA",
//     price: "$100"
// },

// {
//     event: "Boys Youth basketball",
//     description: "Ages 12-15",
//     date: "2/1/20-5/1/20",
//     location: "Chapel Hill YMCA",
//     price: "$100"

// },
// {
//     event: "Dolphin Swim Practice",
//     description: "",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// },
// {
//     event: "Dolphin Swim Practice",
//     description: "",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// },
// {
//     event: "Dolphin Swim Practice",
//     description: "",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// }

// ];
// const events = [{
//     event: "Dolphin Swim Practice",
//     description: "Ages 7-10",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// },
// {
//     event: "Boys Youth basketball",
//     description: "Ages 12-15",
//     date: "2/1/20-5/1/20",
//     location: "Chapel Hill YMCA",
//     price: "$100"
// },

// {
//     event: "Boys Youth basketball",
//     description: "Ages 12-15",
//     date: "2/1/20-5/1/20",
//     location: "Chapel Hill YMCA",
//     price: "$100"

// },
// {
//     event: "Dolphin Swim Practice",
//     description: "",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// },
// {
//     event: "Dolphin Swim Practice",
//     description: "",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// },
// {
//     event: "Dolphin Swim Practice",
//     description: "",
//     date: "February 1, 2020 at 6pm",
//     location: "Carrboro, NC",
//     price: "$75"
// }

// ];



class Funtivity extends Component {

    state = {
        organizationid: "5e35c71607cf87e4497c41a9",
        programs: [],
        events: [],
        programopen: false,
        eventopen: false,
        calendar: []
    }

    handleCollapse(name) {
        this.setState({ [name]: !this.state[name] })
    }
    componentDidMount() {
        this.getPrograms();
        this.getEvents();
        this.getCalendar();

    }

    getPrograms = () => {
        API.getAllPrograms(this.state.organizationid)
            .then(res => {
                console.log(res)
                this.setState({ programs: res.data })
            })
    }
    getEvents = () => {
        API.getAllEvents(this.state.organizationid)
            .then(res => {
                console.log(res)
                this.setState({ events: res.data })
            });
        
    }
    getCalendar = () => {
        API.getCalendarEventPrograms(this.state.organizationid)
            .then(res => {
                this.setState({ calendar: res.data})
            })
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="container">
                    <Border>
                        <Headers heading="Programs" />
                        <div>
                            {this.state.programs.length <= 3 ? this.state.programs.map(upcomingprograms => (

                                <FunCard
                                    key={upcomingprograms._id}
                                    event={upcomingprograms.name}
                                    description={upcomingprograms.description}
                                    date={upcomingprograms.dateStart}
                                    // {/* location={upcomingprograms.location} */}
                                    price={upcomingprograms.price}>
                                </FunCard>
                            ))
                                :
                                <Row>
                                    {[...this.state.programs].splice(0, 3).map(upcomingprograms => (
                                        <FunCard
                                            key={upcomingprograms._id}
                                            event={upcomingprograms.name}
                                            description={upcomingprograms.description}
                                            date={upcomingprograms.dateStart}
                                            // {/* location={upcomingprograms.location} */}
                                            price={upcomingprograms.price}>
                                        </FunCard>
                                    ))
                                    }
                                    <Collapse in={this.state.programopen}>
                                        <div id="program-collapse">
                                            <Row>
                                                {[...this.state.programs].splice(3).map(upcomingprograms => (
                                                    <FunCard
                                                        key={upcomingprograms._id}
                                                        event={upcomingprograms.name}
                                                        description={upcomingprograms.description}
                                                        date={upcomingprograms.dateStart}
                                                        // {/* location={upcomingprograms.location} */}
                                                        price={upcomingprograms.price}>
                                                    </FunCard>))}
                                            </Row>
                                        </div>
                                    </Collapse>

                                    <Button
                                        className="collapsedButton"
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
                    {/* <div className="border align-middle"> */}
                    <Border>
                        {/* <BorderWrapper> */}
                        <Headers heading="Events" />
                        <div>
                            {this.state.events.length <= 3 ? this.state.events.map(upcomingevents => (

                                <FunCard
                                    key={upcomingevents._id}
                                    event={upcomingevents.name}
                                    description={upcomingevents.description}
                                    date={upcomingevents.dateStart}
                                    // {/* location={upcomingprograms.location} */}
                                    price={upcomingevents.price}>
                                </FunCard>
                            ))
                                :
                                <Row>
                                    {[...this.state.events].splice(0, 3).map(upcomingevents => (
                                        <FunCard
                                            key={upcomingevents._id}
                                            event={upcomingevents.name}
                                            description={upcomingevents.description}
                                            date={upcomingevents.dateStart}
                                            // {/* location={upcomingprograms.location} */}
                                            price={upcomingevents.price}>
                                        </FunCard>
                                    ))
                                    }
                                    <Collapse in={this.state.eventopen}>
                                        <div id="program-collapse">
                                            <Row>
                                                {[...this.state.events].splice(3).map(upcomingevents => (
                                                    <FunCard
                                                        key={upcomingevents._id}
                                                        event={upcomingevents.name}
                                                        description={upcomingevents.description}
                                                        date={upcomingevents.dateStart}
                                                        // {/* location={upcomingprograms.location} */}
                                                        price={upcomingevents.price}>
                                                    </FunCard>))}
                                            </Row>
                                        </div>
                                    </Collapse>

                                    <Button
                                        className="collapsedButton"
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

                    
                    <Border>
                        <Headers heading=" Fun Calendar" />
                        <Row>
                            <Col size="12">
                                {/* Need to get the programs from the get request and display them on the calendar and also display the events. */}
                                {/* <h1>Calendar here</h1> */}
                                {/* {this.state.programs.map(events => (events.push(events)))} */}
                                <MyCalendars
                                    events={this.state.calendar}/>
                                {/* // title={events.name}
                                // startAccessor={events.dateStart}
                                // endAccessor={events.dateEnd} */}
                                
                            </Col>
                        </Row>
                    </Border>

                </div>
                <Footer></Footer>
            </div>
        );
    }

}

export default Funtivity;
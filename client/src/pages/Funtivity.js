import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";
import FunCard from "../components/Funcard";
import Border from "../components/Border";
import Headers from "../components/Headers";
import MyCalendars from "../components/Calendar";
import API from "../utils/API";
import { isValidObjectId } from "mongoose";

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

    state= {
        organizationid: "5e35c71607cf87e4497c41a9",
        programs: [],
        events: []
    }

    componentDidMount(){
        this.getPrograms();
        this.getEvents()
    }
    getPrograms = () =>{
        API.getAllPrograms(this.state.organizationid)
        .then(res =>{
            console.log(res)
            this.setState({programs: res.data})
            })
    }
    getEvents = () =>{
        API.getAllEvents(this.state.organizationid)
        .then(res =>{
            console.log(res)
            this.setState({events: res.data})
        })
    }

    render() {
        return (
            <div>
            <div className="container">

                <Border>
                    <Headers heading="Programs" />
                    <Row>

                        {/* <Border> */}
                        {/* <Col size="6"> */}
                        {this.state.programs.map(upcomingprograms => (
                            <FunCard key={upcomingprograms._id} event={upcomingprograms.name} description={upcomingprograms.description} date={upcomingprograms.dateStart} price={upcomingprograms.price}></FunCard>))}
                        {/* </Col> */}
                        {/* location={upcomingprograms.location} */}
                        {/* </Border> */}
                    </Row>
                </Border>
                {/* <div className="border align-middle"> */}

                <Border>
                {/* <BorderWrapper> */}
                    <Headers heading="Events" />
                    <Row>

                        {this.state.events.map(upcomingevents => (
                            <FunCard 
                            event={upcomingevents.name}
                            description={upcomingevents.description} 
                            date={upcomingevents.startDate} 
                            // location={upcomingevents.location} 
                            price={upcomingevents.cost}
                            ></FunCard>))}


                    </Row>
                </Border>
                <Border>
                <Headers heading=" Fun Calendar" />
                <Row>
                <Col size="12">
              {/* <h1>Calendar here</h1> */}
              <MyCalendars/>
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
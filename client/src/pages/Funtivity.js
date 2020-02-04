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
        programs: []
    }

    componentDidMount(){
        this.getPrograms();
    }
    getPrograms = () =>{
        API.getAllPrograms(this.state.organizationid)
        .then(res =>{
            console.log(res)
            this.setState({programs: res.data})
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
                            <FunCard event={upcomingprograms.name} description={upcomingprograms.description} date={upcomingprograms.dateStart} price={upcomingprograms.price}></FunCard>))}
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

                        {events.map(upcomingevents => (
                            <FunCard event={upcomingevents.event} description={upcomingevents.description} date={upcomingevents.date} location={upcomingevents.location} price={upcomingevents.price}></FunCard>))}


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
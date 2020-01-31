import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer"
import FunCard from "../components/Funcard"

const programs = [{
    event: "Dolphin Swim Practice",
    description: "Ages 7-10",
    date: "February 1, 2020 at 6pm",
    location: "Carrboro, NC",
    price: "$75"
},
{
    event: "Boys Youth basketball",
    description: "Ages 12-15",
    date: "2/1/20-5/1/20",
    location: "Chapel Hill YMCA",
    price: "$100"
},

{
    event: "Boys Youth basketball",
    description: "Ages 12-15",
    date: "2/1/20-5/1/20",
    location: "Chapel Hill YMCA",
    price: "$100"

},
{
    event: "Dolphin Swim Practice",
    description: "",
    date: "February 1, 2020 at 6pm",
    location: "Carrboro, NC",
    price: "$75"
},
{
    event: "Dolphin Swim Practice",
    description: "",
    date: "February 1, 2020 at 6pm",
    location: "Carrboro, NC",
    price: "$75"
}

];
const events = [{
    event: "Dolphin Swim Practice",
    description: "Ages 7-10",
    date: "February 1, 2020 at 6pm",
    location: "Carrboro, NC",
    price: "$75"
},
{
    event: "Boys Youth basketball",
    description: "Ages 12-15",
    date: "2/1/20-5/1/20",
    location: "Chapel Hill YMCA",
    price: "$100"
},

{
    event: "Boys Youth basketball",
    description: "Ages 12-15",
    date: "2/1/20-5/1/20",
    location: "Chapel Hill YMCA",
    price: "$100"

},
{
    event: "Dolphin Swim Practice",
    description: "",
    date: "February 1, 2020 at 6pm",
    location: "Carrboro, NC",
    price: "$75"
},
{
    event: "Dolphin Swim Practice",
    description: "",
    date: "February 1, 2020 at 6pm",
    location: "Carrboro, NC",
    price: "$75"
}

];


class Funtivity extends Component {

    render() {
        return (
            <div className="container">
                <h3>Programs</h3>
                <Row>
                {/* <Col size="12"> */}
                        {programs.map(upcomingprograms => (
                            <FunCard event={upcomingprograms.event} description={upcomingprograms.description} date={upcomingprograms.date} location={upcomingprograms.location} price={upcomingprograms.price}></FunCard>))}
        {/* </Col> */}
         </Row>
         <h3>Events</h3>
         <Row>
         {events.map(upcomingevents => (
                            <FunCard event={upcomingevents.event} description={upcomingevents.description} date={upcomingevents.date} location={upcomingevents.location} price={upcomingevents.price}></FunCard>))}
        

         </Row>



                <Footer></Footer>
            </div>
        );
    }

}

export default Funtivity;
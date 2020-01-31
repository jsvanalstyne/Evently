import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";
import FunCard from "../components/Funcard";
import Border from "../components/Border";
import BorderWrapper from "react-border-wrapper";
import Headers from "../components/Headers"

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
            <div>
            <div className="container">

                <Border>
                    <Headers heading="Programs" />
                    <Row>

                        {/* <Border> */}
                        {/* <Col size="6"> */}
                        {programs.map(upcomingprograms => (
                            <FunCard event={upcomingprograms.event} description={upcomingprograms.description} date={upcomingprograms.date} location={upcomingprograms.location} price={upcomingprograms.price}></FunCard>))}
                        {/* </Col> */}
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
                <Headers heading="Calendar" />
                <Row>
                    <Col size="12">
                      
                        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
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
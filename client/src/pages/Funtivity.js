import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";
import FunCard from "../components/Funcard";
import Border from "../components/Border";
import BorderWrapper from "react-border-wrapper";
import Headers from "../components/Headers";
import MyCalendars from "../components/Calendar";
import Nav from "../components/Nav";

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


var programCards;

class Funtivity extends Component {
    programCardArray = () => {
        var programCards = programs.map(upcomingprograms => {
            return <FunCard event={upcomingprograms.event} description={upcomingprograms.description} date={upcomingprograms.date} location={upcomingprograms.location} price={upcomingprograms.price}></FunCard>
        })


        return programCards;
    }

    render() {
        return (
            <div>
                <Nav></Nav>>
            <div className="container">

                    <Border>
                        <Headers heading="Programs" />
                        <Row>
                           
                            {this.programCardArray().length > 3 ? (
                                <div>
                                { programCards.splice(0, 2)}
                                <p>
                                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    See more Programs
                                </a>
                                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    See less Programs
                                </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    {programCards.splice(3, 5)}
                                </div>
                            </div>
                            </div>
                        ):(
                            {programCards}
                                
                        )}
                       
                            {/* <Border> */}
                        {/* <Col size="6"> */}
                        {/* {programs.map(upcomingprograms => (
                            <FunCard event={upcomingprograms.event} description={upcomingprograms.description} date={upcomingprograms.date} location={upcomingprograms.location} price={upcomingprograms.price}></FunCard>))} */}
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
                    <Headers heading=" Fun Calendar" />
                    <Row>
                        <Col size="12">
                            {/* <h1>Calendar here</h1> */}
                            <MyCalendars />
                        </Col>
                    </Row>
                </Border>

            </div>
            <Footer></Footer>
            </div >
        );
    }

}

export default Funtivity;
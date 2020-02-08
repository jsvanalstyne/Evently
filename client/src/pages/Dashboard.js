import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card";
import Footer from "../components/Footer"
import List from "../components/List";
import Nav from "../components/Nav";
import MyCalendars from "../components/Calendar";
const upcomingprogram = [{
  name: "Dolphin Swim Practice",
  description:"Girls Ages 12-14",
  dateStart: "2020-02-04T22:54:57.475Z",
  dateEnd: "2020-04-04T22:54:57.475Z",
  price: "75"
},
{
  name: "Dolphin Swim Practice",
  description:"Girls Ages 12-14",
  dateStart: "2020-04-04T22:54:57.475Z",
  dateEnd: "2020-05-04T22:54:57.475Z",
  price: "75"
},

{
  name: "Dolphin Swim Practice",
  description:"Girls Ages 12-14",
  dateStart: "2020-05-05T22:54:57.475Z",
  dateEnd: "2020-06-04T22:54:57.475Z",
  price: "75"
}

];
const upcomingevent = [{
  name: "Dolphin Swim Practice",
  description:"Girls Ages 12-14",
  dateStart: "2020-06-03T22:54:57.475Z",
  dateEnd: "2020-06-04T22:54:57.475Z",
  price: "75"
},
{
  name: "Dolphin Swim Practice",
  description:"Girls Ages 12-14",
  dateStart: "2020-03-04T22:54:57.475Z",
  dateEnd: "2020-03-04T22:54:57.475Z",
  price: "75"
},

{
  name: "Dolphin Swim Practice",
  description:"Girls Ages 12-14",
  dateStart: "2020-04-04T22:54:57.475Z",
  dateEnd: "2020-04-04T22:54:57.475Z",
  price: "75"
}

];
const promo = [{ event: "Race for the Cure",  date: "April 17, 2020 at 3pm" }, { event: "Community Yard Sale",  date: "April 17, 2020 at 3pm"  }, { event: "Father Daughter Dance",  date: "April 17, 2020 at 3pm"  }, { event: "CPR training",  date: "April 17, 2020 at 3pm"  }
];


class Dashboard extends Component {
  state = {
    upcomingprogram: [],
    upcomingevent: [],
    programopen: false,
    eventopen: false,
    promo:[]
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
          <h1 className="text-center dashboard"> Dashboard</h1>
          <Row>
            <Col size="6">

              <Card title="Your upcoming events and programs:" >
                
                {upcomingevent.map(upcomingEvents => (
                  <List event={upcomingEvents.name} date={upcomingEvents.dateStart}></List>
                ))}
                {upcomingprogram.map(upcomingPrograms => (
                  <List event={upcomingPrograms.name} date={upcomingPrograms.dateStart}></List>
                ))}
              </Card>

            </Col>
            <Col size="6">
              <Card title="Events you may be interested in:">
                {promo.map(promoEvents => (
                  <List event={promoEvents.event} />
                ))}
              </Card>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              {/* <h1>Calendar here</h1> */}
              {/* <MyCalendars
              event={}
              /> */}
            </Col>
          </Row>
        </div>
        <Footer />

      </div>
    );
  }
}

export default Dashboard;
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card";
import Footer from "../components/Footer"
import List from "../components/List";
import MyCalendars from "../components/Calendar";
import API from "../utils/API";
import Nav from "../components/Nav"
import Headers from "../components/Headers"

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
  componentDidMount(){
    this.getUserInformation();
  }
getUserInformation = () =>{
  API.getUserInformationFromDb()
    .then(dataRes => {
      console.log (dataRes.data);
      this.setState({upcomingprogram: dataRes.data})
      
    })

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
                
                {this.state.upcomingevent.map(upcomingEvents => (
                  <List event={upcomingEvents.name} date={upcomingEvents.dateStart}
                  ></List>
                ))}
                {this.state.upcomingprogram.map(upcomingPrograms => (
                  <List event={upcomingPrograms.name} 
                  // date={upcomingPrograms.dateStart}
                  ></List>
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
            <Headers heading="Your Programs and Events Calendar" />
              <MyCalendars
                events={this.state.upcomingprogram}
                // programs={this.state.upcomingprogram}
              />
            </Col>
          </Row>
        </div>
        <Footer />

      </div>
    );
  }
}

export default Dashboard;
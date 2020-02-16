import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card";
import Footer from "../components/Footer"
import List from "../components/List";
import MyCalendars from "../components/Calendar";
import API from "../utils/API";
import Nav from "../components/Nav";
import Headers from "../components/Headers";
import Dropdowns from "../components/Dropdown";
import PromoDropdowns from "../components/PromoDropdown"
// import Moment from 'react-moment';




class Dashboard extends Component {
  state = {
    organizationId: "5e35c71607cf87e4497c41a9",
    upcomingprogram: [],
    upcomingevent: [],
    programopen: false,
    eventopen: false,
    calendar: [],
    promo: []
  }
  componentDidMount() {
    this.getUserInformation();
    this.getOrganizationsPromoEvents(this.state.organizationId);
    this.getUserCalendar();
  }
  getUserInformation = () => {
    API.getUserInformationFromDb()
      .then(dataRes => {
        console.log(dataRes);
        this.setState({ upcomingevent: dataRes.data})
        console.log(this.state.upcomingevent);
      })
    API.getUserPrograms()
      .then(dataResults => {
        console.log("line40on dashboard.js " + JSON.stringify(dataResults))
        this.setState({ upcomingprogram: dataResults.data })
      })

  }
  getUserCalendar = () => {
    API.getUserEventsProgramCalendar()
      .then(res => {
        this.setState({ calendar: res.data })
      })
  }

  getOrganizationsPromoEvents = (id) => {
    console.log("Line 40 dashboard " + id)
    API.getOrganizationsPromos(id)
      .then(results => {
        this.setState({ promo: results.data.results })
      })
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <h1 className="text-center dashboard"> Dashboard</h1>
          <Row>
            <Col size="6">

              <Card title="Your upcoming events and programs:" >

                {this.state.upcomingevent.map(upcomingEvents => (
                  <Dropdowns
                    name={upcomingEvents.name}
                    description={upcomingEvents.description}
                    dateStart={upcomingEvents.dateStart}
                  />
                ))}
                {this.state.upcomingprogram.map(upcomingPrograms => (

                  <Dropdowns
                    name={upcomingPrograms.name}
                    description={upcomingPrograms.description}
                    dateStart={upcomingPrograms.dateStart}
                  />


                ))}

              </Card>

            </Col>
            <Col size="6">
              <Card title="Events you may be interested in:">
                {this.state.promo.map(promoEvents => (
                  <PromoDropdowns
                    name={promoEvents.name}
                    description={promoEvents.description}
                    dateStart={promoEvents.dateStart}
                    price={promoEvents.price}
                  />
                ))}
              </Card>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <Headers heading="Your Programs and Events Calendar" />
              <MyCalendars
                events={this.state.calendar}
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
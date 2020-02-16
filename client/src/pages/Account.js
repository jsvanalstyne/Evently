

import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";

import Nav from "../components/Nav";
import API from "../utils/API";
import AccountInfoCard from "../components/AccountInfoCard"
import AccountEventCard from "../components/AccountEventCard";
import EventList from "../components/EventList";

class Account extends Component{
    
    state={
        events:[],
        information:[],
        programs: []
    }

    componentDidMount(){
        this.userAccountInfo();
        this.getUserEvents()
    }
    userAccountInfo(){
        API.getUserAccountInfoFromDb()
        .then(results =>{
            console.log(results)
            this.setState({information: results.data})
            console.log("line 29 " +JSON.stringify(this.state.information))
        })
    }
    getUserEvents(){
        console.log("inside get UserEvents")
        API.getUserInformationFromDb()
        .then(dataRes => {
          console.log ("line 33 "+dataRes.data);
          this.setState({events: dataRes.data})
          console.log("line 37"+JSON.stringify(this.state.events));
          
        })
        console.log("exiting getUseEvevents")
        
    }





    render(){
        return(
            <div>
                <Nav></Nav>
                <div className="container">
                    <Row>
                        <Col size="6">
                        {this.state.information.map(data =>(
                        
                          <AccountInfoCard
                          name= {data.name}
                          street= {data.street}
                          zipcode={data.zipcode}
                          stateCode = {data.stateCode}
                          city = {data.city}
                          email= {data.email}
                          />
                            
                        ))}
                        </Col>
                        <Col size ="6">
                          <AccountEventCard>
                        {this.state.events.map(event =>(
                        
                        <EventList
                        name= {event.name}
                        eventid = {event._id}
                        />
                          
                      ))}
                      </AccountEventCard>  
                          <AccountEventCard>
                        {this.state.programs.map(program =>(
                        
                        <EventList
                        name= {program.name}
                        eventid = {program._id}
                        />
                          
                      ))}
                      </AccountEventCard>  
                            
                        </Col>
                    </Row>

                </div>
                <Footer></Footer>
            </div>
        )
    }



}

export default Account;
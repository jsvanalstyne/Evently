

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
        programs: [],
        bills:[]
    }

    componentDidMount(){
        this.userAccountInfo();
        this.getUserEvents();
        this.getUserPrograms();
        this.getUserBills();
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
    getUserPrograms(){
        API.getUserPrograms()
        .then(data => {
                console.log(data)
            this.setState({programs: data.data})
        })
        
    }
    getUserBills(){
        API.getUserBills()
        .then(data => {
            console.log(data)
        });
    }





    render(){
        return(
            <div>
                <Nav></Nav>
                <div className="container">
                    <Row>
                        <Col size="3">
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
                        <Col size ="3">
                          <AccountEventCard header="Your Events:">
                        {this.state.events.map(event =>(
                        
                        <EventList
                        name= {event.name}
                        eventid = {event._id}
                        type="event"
                        />
                          
                      ))}
                      </AccountEventCard>
                      </Col>
                      <Col size ="3">
                          <AccountEventCard header="Your Programs:">
                        {this.state.programs.map(program =>(
                        
                        <EventList
                        name= {program.name}
                        eventid = {program.id}
                        type="program"
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
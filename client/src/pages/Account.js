

import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";

import Nav from "../components/Nav";
import API from "../utils/API";
import AccountInfoCard from "../components/AccountInfoCard"
import AccountEventCard from "../components/AccountEventCard";
import EventList from "../components/EventList";
import BillsTable from "../components/BillsTable";

const style ={
    flex : {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
        

    }
}

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
            console.log(this.state.programs)
        })
        
    }
    getUserBills(){
        API.getUserBills()
        .then(data => {
            
            // console.log(data.data[0].eventPaidFor.name);
            console.log(data)
            this.setState({bills: data.data})

        });
    }





    render(){
        return(
            <div>
                <Nav/>
                <div style={style.flex}>
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
                       <AccountEventCard header="Your Events:">
                        {this.state.events.map(event =>(
                        
                        <EventList
                        name= {event.name}
                        eventid = {event._id}
                        type="event"
                        />
                          
                      ))}
                      </AccountEventCard>
                      <AccountEventCard header="Your Programs:">
                        {this.state.programs.map(program =>(
                        
                        <EventList
                        name= {program.name}
                        eventid = {program.id}
                        type="program"
                        />
                          
                      ))}
                      </AccountEventCard>  
                      </div>
                        {/* <div> */}
                        
                      <BillsTable bills= {this.state.bills}>
                        {this.state.bills.map(userBill => (
                            {name: userBill.eventPaidFor.name,
                            amount: userBill.amountOwed,
                            datePaid: userBill.dateIssued
                            }
                        ))}
                        </BillsTable>
                        {/* </div> */}
                        <Footer></Footer>
                </div>
                // <Footer/>



                /* <Nav></Nav>
                <div className="container" >
                    <Row style={style.flex}> 
                        <Col size="4">
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
                        <Col size ="4">
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
                      <Col size ="4">
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
                    <Row>
                    <Col size="12">
                        <BillsTable bills= {this.state.bills}>
                        {/* {this.state.bills.map(userBill => (
                            {name: userBill.eventPaidFor.name,
                            amount: userBill.amountOwed,
                            datePaid: userBill.dateIssued
                            }
                        ))} */
                    /* </BillsTable> */
                        /* </Col> */

                    /* </Row> */

                /* </div> */
                /* <Footer></Footer> */
            // </div>
        )
    // }

                        }

}

export default Account;
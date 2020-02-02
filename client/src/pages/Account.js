
import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar"
import Nav from "../components/Nav";
import UserCard from "../components/UserCard";
let user ={
    username: "Jerrica VanAlstyne",
    address: "101 Maple Stree",
    state: "Graham, NC",
    birthday: "01/01/89",
    email: "jvan@gmail.com"
}

class Account extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <div class="container">
                    <Row>
                        <Col size="12">
                           
                        </Col>
                    </Row>
                    <Row>
                        <Col size="6">
                            <UserCard username={user.username} address={user.address} state={user.state} birthday={user.birthda} email= {user.email}
                            ></UserCard>
                        </Col>
                        <Col size="6"></Col>
                    </Row>

                </div>
                <Footer></Footer>
            </div>
        )
    }



}

export default Account;
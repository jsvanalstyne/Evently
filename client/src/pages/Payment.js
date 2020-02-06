import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
// import SquarepayForm from "../components/PaymentForm"
import SquareApp from "../components/SquareApp"




class PaymentPage extends Component {

  render() {
    return (
        <Wrapper>
          <SquareApp />
        </Wrapper>
        
    );
  }
}

export default PaymentPage;
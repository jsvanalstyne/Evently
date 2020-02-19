import React, { Component } from 'react';
import './style.css';
import PaymentForm from '../PaymentForm';

// creating square class component that runs when the register for even button has been clicked
class SquareApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false
    }

  }
// defining the squarepayment javascript library and setting the loaded state to true
  componentWillMount(){
    // const that = this;
    let sqPaymentScript = document.createElement('script');
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript"
    sqPaymentScript.async = false;
    sqPaymentScript.onload = ()=>{this.setState({
      loaded: true
    })};
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }
// if loaded is true, render the payement form component
  render() {
    return (
      this.state.loaded &&
        <PaymentForm
          eventId={this.props.eventId}
          paymentForm={ window.SqPaymentForm }
          price={this.props.price}
          eventId={this.props.eventId}
          closeModal={this.props.closeModal}
        />
    );
  }
}

export default SquareApp;
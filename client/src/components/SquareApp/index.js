import React, { Component } from 'react';
import './style.css';
import PaymentForm from '../PaymentForm';

class SquareApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentWillMount(){
    const that = this;
    let sqPaymentScript = document.createElement('script');
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript"
    sqPaymentScript.async = false;
    sqPaymentScript.onload = ()=>{that.setState({
      loaded: true
    })};
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }

  render() {
    return (
      this.state.loaded &&
        <PaymentForm
          paymentForm={ window.SqPaymentForm }
        />
    );
  }
}

export default SquareApp;
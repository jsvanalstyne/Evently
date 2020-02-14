import React, { Component } from 'react';
// payment widget styles
const styles = {
  name: {
    verticalAlign: 'top',
    display: 'none',
    margin: 0,
    border: 'none',
    fontSize: "16px",
    fontFamily: "Helvetica Neue",
    padding: "16px",
    color: "#373F4A",
    backgroundColor: "transparent",
    lineHeight: "1.15em",
    placeholderColor: "#000",
    _webkitFontSmoothing: "antialiased",
    _mozOsxFontSmoothing: "grayscale",
  },
  leftCenter: {
    float: 'left',
    textAlign: 'center'
  },
  blockRight: {
    display: 'block',
    float: 'right'
  },
  center: {
    textAlign: 'center'
  }
}

export default class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardBrand: "",
      nonce: undefined,
      googlePay: false,
      applePay: false,
      masterpass: false
    }
    this.requestCardNonce = this.requestCardNonce.bind(this);
  }

  requestCardNonce() {
    this.paymentForm.requestCardNonce();
  }

  componentDidMount() {
    const config = {
      applicationId: "sandbox-sq0idb-___GqOJOEgvbEUelV8xgWA",
      locationId: "GMT96A77XABR1",
      inputClass: "sq-input",
      autoBuild: false,
      inputStyles: [
        {
          fontSize: "16px",
          fontFamily: "Helvetica Neue",
          padding: "16px",
          color: "#373F4A",
          backgroundColor: "transparent",
          lineHeight: "1.15em",
          placeholderColor: "#000",
          _webkitFontSmoothing: "antialiased",
          _mozOsxFontSmoothing: "grayscale"
        }
      ],
      // other payment options
      applePay: {
        elementId: 'sq-apple-pay'
      },
      masterpass: {
        elementId: 'sq-masterpass'
      },
      googlePay: {
        elementId: 'sq-google-pay'
      },
      // placeholders for card widget
      cardNumber: {
        elementId: "sq-card-number",
        placeholder: "• • • •  • • • •  • • • •  • • • •"
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV"
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY"
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Zip"
      },
      callbacks: {
        // if other payament methods are supported, change the state of the correct method to allow for render
        methodsSupported: (methods) => {
          if (methods.googlePay) {
            this.setState({
              googlePay: methods.googlePay
            })
          }
          if (methods.applePay) {
            this.setState({
              applePay: methods.applePay
            })
          }
          if (methods.masterpass) {
            this.setState({
              masterpass: methods.masterpass
            })
          }
          return;
        },
        // using the square payment API to create a payment object from the amount and users card data
        createPaymentRequest: () => {
          return {
            requestShippingAddress: false,
            requestBillingInfo: true,
            currencyCode: "USD",
            countryCode: "US",
            total: {
              label: "MERCHANT NAME",
              amount: "100",
              pending: false
            },
            lineItems: [
              {
                label: "Subtotal",
                amount: "100",
                pending: false
              }
            ]
          };
        },
        // if a nonce (payment key) is recieved, do this stuff
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          // if errors, log them
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            console.log("Encountered errors:");
            errors.forEach(function (error) {
              console.log("  " + error.message);
            });

            return;
          }
          // alert(`The generated nonce is:\n${nonce}`);
          // change the state of nonce to the generated nonce
          this.setState({
            nonce: nonce
          })
          // fetch the payament route to process the payment
          fetch('api/payments/process', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nonce: this.state.nonce,
              amount: (this.props.price * 100)
            })
          })
            // network arror catching
            .catch(err => {
              alert('Network error: ' + err);
            })
            .then(response => {
              if (!response.ok) {
                return response.text().then(errorInfo => Promise.reject(errorInfo));
              }
              return response.text();
            })
            // alerts for payment success and failure
            .then(data => {
              console.log(JSON.stringify(data));
              alert('Payment complete successfully!\nCheck browser developer console for more details');
            })
            .catch(err => {
              console.error(err);
              alert('Payment failed to complete!\nPlease try again or use another card.');
            });

        },
        unsupportedBrowserDetected: () => {
        },
        // validation for the card input fields
        inputEventReceived: (inputEvent) => {
          switch (inputEvent.eventType) {
            case "focusClassAdded":
              break;
            case "focusClassRemoved":
              break;
            case "errorClassAdded":
              document.getElementById("error").innerHTML =
                "Please fix card information errors before continuing.";
              break;
            case "errorClassRemoved":
              document.getElementById("error").style.display = "none";
              break;
            case "cardBrandChanged":
              if (inputEvent.cardBrand !== "unknown") {
                this.setState({
                  cardBrand: inputEvent.cardBrand
                })
              } else {
                this.setState({
                  cardBrand: ""
                })
              }
              break;
            case "postalCodeChanged":
              break;
            default:
              break;
          }
        },
        // when the form data loads, display the form
        paymentFormLoaded: function () {
          document.getElementById('name').style.display = "inline-flex";
        }
      }
    };
    this.paymentForm = new this.props.paymentForm(config);
    this.paymentForm.build();
  }

  render() {
    // the payment form itself
    return (
      <div className="pay-container">
        <div id="form-container">
          <div id="sq-walletbox">
            <button style={{ display: (this.state.applePay) ? 'inherit' : 'none' }}
              className="wallet-button"
              id="sq-apple-pay"></button>
            <button style={{ display: (this.state.masterpass) ? 'block' : 'none' }}
              className="wallet-button"
              id="sq-masterpass"></button>
            <button style={{ display: (this.state.googlePay) ? 'inherit' : 'none' }}
              className="wallet-button"
              id="sq-google-pay"></button>
            <hr />
          </div>

          <div id="sq-ccbox">
            <p>
              <span style={styles.leftCenter}>Enter Card Info Below </span>
              <span style={styles.blockRight}>
                {this.state.cardBrand.toUpperCase()}
              </span>
            </p>
            <div id="cc-field-wrapper">
              <div id="sq-card-number"></div>
              <input type="hidden" id="card-nonce" name="nonce" />
              <div id="sq-expiration-date"></div>
              <div id="sq-cvv"></div>
            </div>
            <input
              id="name"
              style={styles.name}
              type="text"
              placeholder="Name"
            />
            <div id="sq-postal-code"></div>
          </div>
          <button className="button-credit-card"
            onClick={this.requestCardNonce}>Pay</button>
        </div>
        <p style={styles.center} id="error"></p>
      </div>
    )
  }
}
// ripped from Okta docs
// https://developer.okta.com/code/react/okta_react_sign-in_widget/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import LoginForm from "./LoginForm.js"

const style = {
    container: {
        display: "flex",
        justifyContent: "center", 
        marginTop: "100px"    
    }, 
    form: {

    }
    
    // alignItems: "center",
}

const formStyle = {

}

export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
    console.log(props.baseUrl);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess = (res) => {
    if (res.status === 'SUCCESS') {
      return this.props.auth.redirect({
        sessionToken: res.sessionToken
      });
   } else {
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <div style={style.container}>
          <LoginForm
            baseUrl={this.props.baseUrl}
            onSuccess={this.onSuccess}
            onError={this.onError}/>
      </div>
  }
});
// ripped from Okta docs: https://developer.okta.com/docs/guides/sign-users-out/react/sign-out-of-okta/

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import Button from 'react-bootstrap/Button';

const issuer = 'https://dev-844753.okta.com/oauth2/default';
const redirectUri = `${window.location.origin}/`;

// Basic component with logout button
export default withAuth(class Logout extends Component {

  logout = async () => {
    // Read idToken before local session is cleared
    const idToken = await this.props.auth.getIdToken();
    // Clear local session
    await this.props.auth.logout('/');
    // Clear remote session
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  }

  render() {
    return (
      <Button onClick={this.logout}>Logout</Button>
    );
  }
});

const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-844753.okta.com/',
  token: '00q6y7NFb54vxK39xXQuAYZyImCFpvNlBeuVNJyLW3' 
});

module.exports = client;
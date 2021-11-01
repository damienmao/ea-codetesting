const {Given} = require('cucumber');

import openWebsite from '../support/action/openWebsite';


Given(
  /^the user navigates to the website "([^"]*)?"$/,
      openWebsite
)

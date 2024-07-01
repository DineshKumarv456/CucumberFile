$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/gmail.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To check the funtions of facebook page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "To open the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "To pass values in the \"\u003cemailfield\u003e\" email field",
  "keyword": "And "
});
formatter.step({
  "name": "To pass values in the \"\u003cpasswordfield\u003e\" password field",
  "keyword": "And "
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailfield",
        "passwordfield"
      ]
    },
    {
      "cells": [
        "SOexample one",
        "12345"
      ]
    },
    {
      "cells": [
        "SOexample two",
        "24680"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "cucuMail.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the funtions of facebook page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "To open the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Scenariooutlines.to_open_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass values in the \"SOexample one\" email field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenariooutlines.to_pass_values_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass values in the \"12345\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenariooutlines.to_pass_values_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenariooutlines.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has to launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "cucuMail.user_has_to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the funtions of facebook page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "To open the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Scenariooutlines.to_open_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass values in the \"SOexample two\" email field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenariooutlines.to_pass_values_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass values in the \"24680\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenariooutlines.to_pass_values_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenariooutlines.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});
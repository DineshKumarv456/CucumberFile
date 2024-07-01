Feature: To validate the login functionality of facebook login page

Background:
Given User has to launch the browser and maximize the window

Scenario: To validate the login with email and password

When User has to hit the gmail url
And User has to pass the data in email field
|dinesh|kumar|dk|
And User has to pass the data in password field
|12345|24680|67890|
|abcce|3r3rr|g4t4|
Then User has to close the browser


@new
Scenario Outline: To check the funtions of facebook page

When To open the facebook url
And To pass values in the "<emailfield>" email field
And To pass values in the "<passwordfield>" password field
Then To close the browser

Examples:
|emailfield|passwordfield|
|SOexample one|12345|
|SOexample two|24680|

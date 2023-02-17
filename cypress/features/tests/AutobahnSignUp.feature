@autobahn
Feature: Autobahn Sign Up

    Scenario: Verify user success to signup in Autobahn site
        Given Generate email from mail site
        When user open autobahn signup page
        And input email
        And input password
        And click Sign Up button
        And user input info data
        And click start using autobahn button
        And click verify account from mail box
        Then user should be redirected to home page
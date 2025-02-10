@stackFeature
Feature: Testing Stack Data Structure
  User will be able to learn about Stack Data Structure

  @StackOperations
  Scenario: Learning Operations in Stack
    Given The user clicks on Get started button of Stack after logged in
    When The user try to click the "Operations in Stack" button
    Then The user should be directed to "Operations in Stack" Page
    When The user clicks "Try Here" button
    Then  The user should be redirected to a page having an tryEditor with a Run button to test
    Then The user should be redirected to a page having an tryEditor with a Run button to test
    When The user enters Python Code into editor and clicks Run button
    Then User should see the result 

@StackImplementations
   Scenario: Learning Implementations in Stack
    Given The user clicks on Get started button of Stack after logged in
    When The user try to click the "Implementation" button
    Then The user should be directed to "Implementation" Page
    When The user clicks "Try Here" button
    Then  The user should be redirected to a page having an tryEditor with a Run button to test
    Then The user should be redirected to a page having an tryEditor with a Run button to test
    When The user enters Python Code into editor and clicks Run button
    Then User should see the result

 @StackImplementations
   Scenario: Learning Implementations in Stack
    Given The user clicks on Get started button of Stack after logged in
    When The user try to click the "Applications" button
    Then The user should be directed to "Applications" Page
    When The user clicks "Try Here" button
    Then  The user should be redirected to a page having an tryEditor with a Run button to test
    Then The user should be redirected to a page having an tryEditor with a Run button to test
    When The user enters Python Code into editor and clicks Run button
    Then User should see the result     
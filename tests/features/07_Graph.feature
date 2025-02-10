@GraphFeature
Feature: Testing graph Data Structure
  User will be able to learn about Graph Data Structure

  @Graph
  Scenario: Graph
    Given The user clicks on Get started button of Graph after logged in
    When The user try to click the "Graph" button
    Then The user should be directed to "Graph" Page
    When The user clicks "Try Here" button
    Then  The user should be redirected to a page having an tryEditor with a Run button to test
    Then The user should be redirected to a page having an tryEditor with a Run button to test
    When The user enters Python Code into editor and clicks Run button
    Then User should see the result 

@GraphRepresentations
   Scenario: Graph Representations
    Given The user clicks on Get started button of Graph after logged in
    When The user try to click the "Graph Representations" button
    Then The user should be directed to "Graph Representations" Page
    When The user clicks "Try Here" button
    Then  The user should be redirected to a page having an tryEditor with a Run button to test
    Then The user should be redirected to a page having an tryEditor with a Run button to test
    When The user enters Python Code into editor and clicks Run button
    Then User should see the result

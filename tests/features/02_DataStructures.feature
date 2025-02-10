Feature: DataStructures
 A  Data structure is a way to store, organize, and manage information(or data) in a way that allows the programmer to easily access or modify the values in them.
@DataStructuresTS03
  Scenario: DataStructures
    Given  User Clicks on "Get Strated" Button on  "Data Structures-Introduction"
    Then   The user should land in "Data Structures-Introduction" Page 
    When   The user clicks "Time Complexity" button on Data Structures-Introduction page
    Then   User will be redirected to "Time Complexity" page
    When   The user clicks "Try Here" button on Time Complexity page
    Then   The user should be redirected to a page having an tryEditor with a Run button to test
    When  The user enters Python Code into editor and clicks Run button
    Then User should see the result 
    When   The user naviagtes back and clicks the "Practice Questions" link on left side of page
    Then   The user should be redirected to "Practice Questions" of Data structures-Introduction
    And    User clicks Sign out
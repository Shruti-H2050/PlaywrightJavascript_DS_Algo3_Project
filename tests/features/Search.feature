Feature: Braustin webapplication Search Bar and Filter Functionality 

Scenario: Verify user is able to search results   
Given User is on Braustin webapplication and clicks search bar
When User enters "<item>" to be searched in search bar 
Then User must see the searched items on the page

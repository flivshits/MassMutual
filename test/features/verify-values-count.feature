Feature: Need to verify the right count of values appear on the screen.

   Background: Assuming the user has logged in succesfully //If there was a Given, it would go here;

   Scenario: Verify the correct count of values on the screen
      When I scrape elements for label elements
      Then I scrape elements for dollar elements
      And I expect to have the correct count for values on the screen
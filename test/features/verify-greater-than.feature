Feature: Verify for all values on the screen.
    Scenario: Confirm all values are grater than 0
        When I scrape all dollar elements for values
        Then I expect that all of the numbers are greater than '0'
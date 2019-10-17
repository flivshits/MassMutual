Feature: Verify that all number values are in currency format.
    Scenario: Confirm all values are correctly formatted
        When I scrape all dollar elements for currency
        And I derive their number values
        And I convert their numeric values to currency format 
        Then I validate that the original currency value is the same as the new currency value
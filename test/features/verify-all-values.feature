Feature: Verify Total Balance is correct based on the values listed.
    Scenario: Confirm all the values are in place correctly basedon ID's
        When I scrape elements for dollar elements
        And I scrape elements for label elements
        And I examine their respective attribute: 'id'
        Then I confirm that the values would produce the correct Total Balance
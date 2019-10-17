Feature: The total balance is correct based on the sum of the other values.
    Scenario: Confirm values add up to total balance
        When I scrape dollar elements for values sans total balance
        And I take the sum for all values
        And I take the value for total balance
        Then the sum for all elements and total balance should be equal
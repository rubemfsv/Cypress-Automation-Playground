Feature: End to end Ecommerce validation

  Application Regression

  Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When I add items to cart
    And validate the total prices
    Then select the country submit and verify Thank you
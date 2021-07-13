Feature: End to end Ecommerce validation

  Application Regression

  @Regression
  Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And validate the total prices
    Then select the country submit and verify Thank you

  @Smoke
  Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
      | name | gender |
      | Bob  | Male   |
    Then validate the form behavior
    And select the shop page
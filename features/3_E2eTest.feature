Feature: e2e test scenarios on an e-commerce website
  Scenario Outline: As a registered user, I should be able to place an order.

    Given I launch the application
    When I click sign in page
    When I login with <LoginName> and <Password>
    #Then I validate the <FirstName> is displayed in the account section
    When I mouseover on the <Menu> and select <Product>
    Then I select 2 product and add to the Cart
    Then I proceed to checkout
    Then I verify the products in the payment page
    Then I logout the application
    Then I close the browser

    Examples:
      | FirstName  | LoginName | Password | Menu      | Product |
      | RameshBabu | TestLast  | Password | FRAGRANCE | Men     |



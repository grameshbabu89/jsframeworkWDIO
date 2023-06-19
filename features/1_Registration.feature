Feature: New user registration
  # Change username for every iteration

  Scenario Outline: As a user, I should be able to register as a new customer
    Given I launch the application
    When I click sign in page
    Then I click continue to new registration
    Then I am on the registration page
    Then I enter <Email>, <FirstName>, <LoginName>, <Password> and other mandatory fields then submit
    Then I validate the <FirstName> is displayed in the account section
    Then I logout the application
    Then I close the browser

    Examples:
      | Email                 | FirstName | LoginName | Password |
      | wdiotesting8@test.com | TestUser  | TestLast  | Password |

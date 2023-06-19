Feature: Login and Logout
  # Change username for every iteration

  Scenario Outline: As a user, I should be able to Login and Logout to the application
    Given I launch the application
    When I click sign in page
    When I login with <LoginName> and <Password>
    Then I validate the <FirstName> is displayed in the account section
    Then I logout the application
    Then I close the browser

    Examples:
      | FirstName | LoginName | Password |
      | Test1     | Test0123  | Password |

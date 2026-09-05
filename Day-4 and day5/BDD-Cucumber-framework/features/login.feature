Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the dashboard

  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters invalid credentials
    And clicks the login button
    Then an error message should be displayed

    Scenario Outline: Verify login with multiple sets of credentials
        Given the user is on the login page
        When the user enters "<username>" and "<password>"
        And clicks the login button
        Then the user should see homepage if credentials are valid, otherwise an error message should be displayed
        Examples:
          | username      | password     |
          | standard_user | secret_sauce |
          | secret        | sauce        |
          | visual_user   | secret_sauce |
          | invalid_user  | invalid_pass |
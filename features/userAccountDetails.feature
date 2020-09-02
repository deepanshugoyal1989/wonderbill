Feature: User Account Details

  Scenario: As a user, I should be able to see payment details of all my accounts in json format
    Given I login with valid credential
    When I collect payment data for each account
    Then I should display payment details in json format for all accounts
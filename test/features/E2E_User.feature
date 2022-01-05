Feature: Test End to End User

  Scenario Outline: Validate End to End Get Single User
    Given I am on the page <PageUrl>
    When I Perform <EndPoint> user search
    And I make Get <EndPoint> api call
    Then I validate the serach result

    Examples:
      | PageUrl                 | EndPoint     |
      | http://resttesttest.com | /api/users/2 |
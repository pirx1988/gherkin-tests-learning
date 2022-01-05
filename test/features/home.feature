Feature: The Internet website homepage

  Scenario Outline: As a user, I can open internet website

    Given I open the browser and load the url <homePageUrl>
    Then I should see a header with text <homeHeaderText>

    Examples:
      | homePageUrl                        | homeHeaderText          |
      | https:/the-internet.herokuapp.com/ | Welcome to the-internet |

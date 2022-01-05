Feature: The stream list web app

  Scenario Outline: As a user, I can see list of streams

    Given I am on the stream list page with the url <streamsAppUrl>
    Then I should see a header text <headerText>

    Examples:
      | streamsAppUrl          | headerText                     |
      | http://localhost:3000/ | Streams |

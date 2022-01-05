Feature: New Stream create page

  Scenario Outline:
    Given I am on the stream list page with the url <streamsAppUrl>
    When I type title <title> and description <description>
    And I set title and description empty
    Then I should see 2 alerts messages

    Examples:
      | streamsAppUrl                     | title     | description |
      | http://localhost:3000/streams/new | testTitle | testDesc    |

  Scenario Outline:
    Given I am on the stream list page with the url <streamsAppUrl>
    When I type title <title> and description <description>
    And I click submit button
    Then I should see header with text <headerText> on streams list page

    Examples:
      | streamsAppUrl                     | title     | description | headerText |
      | http://localhost:3000/streams/new | testTitle | testDesc    | Streams    |
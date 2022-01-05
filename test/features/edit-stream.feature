Feature: Edit stream

  Scenario Outline:
    Given I am sig in with on the page <streamAppUrl> credentials: login: <login>, password: <password>
    Examples:
      | streamsAppUrl         | login                            | password | editTitle                | EditPassword            |
      | http://localhost:3000 | krzysztof.michalski314@gmail.com | Pirx1988 | StreamTitleEditedByRobot | StreamDescEditedByRobot |

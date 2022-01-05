Feature: Actions after user is logged in

  Background:
    Given I am logged in user


  Scenario Outline: I can create new stream

    Given I go to the stream create page
    When I fill up the form with <title> and <desc>
    And Click Create stream button
    Then I can see my new created stream <title> and <desc> on the list of streams

    Examples:
      | title           | desc           |
      | testTitleStream | testDescStream |

  Scenario Outline: I can edit stream

    Given I go to the stream edit page
    When I change the title and desc to <editedTitle> and <editedDesc>
    And Click Edit stream button
    Then I can see my edited stream with title: <editedTitle> and desc: <editedDesc> on the list of streams

    Examples:
      | editedTitle           | editedDesc           |
      | testEditedTitleStream | testEditedDescStream |

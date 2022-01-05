Feature: Actions after user is logged in

  Background:
    Given I am logged in user

  Scenario Outline: I can edit stream

    Given I go to the stream edit page
    When I change the title and desc to <editedTitle> and <editedDesc>
    And Click Edit stream button
    Then I can see my edited stream with title: <editedTitle> and desc: <editedDesc> on the list of streams

    Examples:
      | editedTitle           | editedDesc           |
      | testEditedTitleStream | testEditedDescStream |
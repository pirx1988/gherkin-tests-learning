Feature: Chai page

  Scenario Outline:
    Given I am on practice page: "http://www.practiceselenium.com/practice-form.html"
    Then I validate page header "Practice form"
    When I enter firstname <fname> and lastname <lname>
    And I select gender <gender> years <yrs> favorite chai <favchai> and reason <reason>
    And I select continent <continent> and commands <command>
    And I click on submit button
    Then I validate page header "We're passionate about tea."

    Examples:
      | fname | lname  | gender | yrs | favchai           | reason                   | continent | command       |
      | Emma  | watson | Female | 6   | Red Tea,Black Tea | Harmless Addiction,Break | Europe    | Wait Commands |
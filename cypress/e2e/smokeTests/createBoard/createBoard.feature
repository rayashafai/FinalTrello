Feature: create board in trello website

   Scenario: validate that the user can create board
   Given open Trello Website and login
   When click on create button in navbar
   And choose create board option
   And type a board name
   And click on create button
   Then The board should be created successfully
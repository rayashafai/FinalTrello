Feature: create card functionality 
    
    Scenario: validate that the user can create card successfully
      Given The user navigates to the board
      When The user clicks on add a card button
      And The user types the card title in the card title field
      And The user clicks on add card button
      Then The card should be created successfully

      
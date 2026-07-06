Feature: update Template Name

   Scenario: validate that the user can update the name of Template
      Given the user open the board that including a card
      When the user creates a Template card
      And the user clicks on the edit icon in Template Card
      And the user writes new name for the Template card   
      And the user clicks on the save button    
      Then the name of the Template card should be updated successfully   
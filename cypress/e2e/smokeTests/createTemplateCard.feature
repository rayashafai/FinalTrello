Feature: create a Template Card

   Scenario: validate that the user can create a Template Card
      Given the user open the board that including a normal card
      When the user clicks on the card
      And the user clicks on the Actions part in Template Card
      And the user clicks on Make template button   
      And the user clicks on the close button    
      Then the Template card should be created successfully   
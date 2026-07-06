Feature: move Template to any list

   Scenario: validate that the user can move Template to any list
      Given the user open the board that having a card
      When the user makes a Template card
      And the user clicks on the edit icon un that Template Card
      And the user clicks on move button 
      And the user clicks on the list menu  
      And the user chooses the list want to move
      And the user after that clicks on move button  
      Then the Template card should moved to that list successfully   
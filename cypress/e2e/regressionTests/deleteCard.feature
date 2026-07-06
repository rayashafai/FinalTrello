Feature: delete the existing Card

   Scenario: validate that the user can delete existing card
      Given the user open the board that include a card
      When the user clicks on the existing card
      And the user clicks on the Actions part
      And the user clicks in the Archive button
      And the user clicks on the Delete button
      And the user clicks on the Delete card button
      Then the card will be deleted successfully from the board

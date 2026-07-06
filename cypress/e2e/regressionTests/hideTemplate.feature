Feature: hide a Template from the list

   Scenario: validate that the user can hide a Template from the list
      Given the user open the board that including a Template card
      When the user create a Template card
      And the user clicks on the Template 
      And the user clicks on actions part   
      And the user clicks on Hide from list   
      And the user click on close button
      Then the Template card should be hide from the list successfully   
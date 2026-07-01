import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../../support/dataUtils.cy";
import createCardActions from "../../../pageObjects/createCard/Actions.cy";
import createCardAssertions from "../../../pageObjects/createCard/Assertions.cy";

const dataUtil=new dataUtils()
let boardUrl;
let boardId;
const createCard=new createCardActions()
const cardName="cyCard"
const createCardAssertion=new createCardAssertions()


Before(()=>{
    if (!Cypress.spec.name.includes("createCard")) return;
    dataUtil.createBoard("cyBoard").then((response)=>{
      boardUrl = response.body.url
      boardId = response.body.id

      cy.log(JSON.stringify(response.body))
      console.log("Response Body:", response.body)

      cy.log("Board ID = " + boardId)
      console.log("Board ID =", boardId)
  })
  cy.loginToTrello()
})
Given("The user navigates to the board",()=>{
      cy.wait(3000)
      createCard.openBoard(boardUrl)
})

When("The user clicks on add a card button",()=>{
   createCard.clickOnAddACardButton()
})
When("The user types the card title in the card title field",()=>{
    createCard.typeInCardTitleField(cardName)
})
When("The user clicks on add card button",()=>{
    createCard.clickOnAddCardButton()
})

Then("The card should be created successfully",()=>{
    createCardAssertion.checkCardTitleIsContain(cardName)
})

After(()=>{
   
  if (!Cypress.spec.name.includes("createCard")) return;
     cy.log("Deleting board: " + boardId)
   console.log("Deleting board:", boardId)

   dataUtil.deleteBoard(boardId)

})
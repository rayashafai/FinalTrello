import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../../support/dataUtils.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/Actions.cy";
import deleteCardAsserions from "../../../pageObjects/deleteCard/Assertions.cy";

const dataUtil = new dataUtils();
const deleteCard = new deleteCardActions();
const deleteCardAssertion=new deleteCardAsserions();

let boardUrl;
let boardId;
let listId;
let cardId;

const cardName = "My Test Card";

Before(() => {
    if (!Cypress.spec.name.includes("deleteCard")) return;
    dataUtil.createBoard("rayaBoard").then((response) => {

        boardUrl = response.body.url;
        boardId = response.body.id;

        cy.log("Board ID = " + boardId);
        cy.log("Board URL = " + boardUrl);

        // الحصول على الـ List الموجودة داخل الـ Board
        dataUtil.getLists(boardId).then((listsResponse) => {

            listId = listsResponse.body[0].id;

            cy.log("List ID = " + listId);

            // إنشاء Card داخل الـ List
            dataUtil.createCard(listId, cardName).then((cardResponse) => {

                cardId = cardResponse.body.id;

                cy.log("Card ID = " + cardId);

            });

        });

    });

    cy.loginToTrello();

});

Given("the user open the board that include a card",()=>{
      deleteCard.openBoard(boardUrl)
})

When("the user clicks on the existing card",()=>{
     deleteCard.clicksOnCard()
})
When("the user clicks on the Actions part",()=>{
     deleteCard.clicksOnActionButton()
})
When("the user clicks in the Archive button",()=>{
     deleteCard.clicksOnArchiveButton()
})
When("the user clicks on the Delete button",()=>{
     deleteCard.clicksOnDeleteButton()
})
When("the user clicks on the Delete card button",()=>{
     deleteCard.clicksOnDeleteConfirmButton()
})
Then("the card will be deleted successfully from the board",()=>{
     deleteCardAssertion.checkCardDeleted(cardId)
})


After(()=>{
if (!Cypress.spec.name.includes("deleteCard")) return;
   dataUtil.deleteBoard(boardId)

})

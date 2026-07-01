import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../../support/dataUtils.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/Actions.cy";
import deleteCardAsserions from "../../../pageObjects/deleteCard/Assertions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";

const dataUtil = new dataUtils();
const deleteCard = new deleteCardActions();
const deleteCardAssertion=new deleteCardAsserions();
const sharedAction=new sharedActions();

let boardUrl;
let boardId;
let listId;
let cardId;

const cardName = "My Test Card";

Before(() => {
    if (!Cypress.spec.name.includes("deleteCard")) return;

     sharedAction.loginToTrelloWebsite();
     sharedAction.createBoard().then((response) => {
        boardId = response.boardId;
        boardUrl = response.boardUrl;
        sharedAction.createCard(boardId,cardName).then((card) => {
            cardId = card.cardId;
        })

    });   
});

Given("the user open the board that include a card",()=>{
      sharedAction.openBoard(boardUrl)
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

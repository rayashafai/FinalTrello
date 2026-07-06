import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../../support/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createTemplateCardActions from "../../../pageObjects/createTemplateCard/Actions.cy";
import createTemplateCardAssertions from "../../../pageObjects/createTemplateCard/Assertions.cy";


const dataUtil = new dataUtils();
let boardUrl;
let boardId;
let cardId;
const sharedAction=new sharedActions();
const createTemplateCard=new createTemplateCardActions();
const createTemplateCardAssertion=new createTemplateCardAssertions();

const cardName = "Template Card";

Before(() => {
    if (!Cypress.spec.name.includes("createTemplateCard")) return;

     sharedAction.loginToTrelloWebsite();
     sharedAction.createBoard().then((response) => {
        boardId = response.boardId;
        boardUrl = response.boardUrl;
        sharedAction.createCard(boardId,cardName).then((card) => {
            cardId = card.cardId;
        })

    });   
});

Given("the user open the board that including a normal card",()=>{
     sharedAction.openBoard(boardUrl)
})
When("the user clicks on the card",()=>{
    createTemplateCard.clicksOnTemplateCard()
})
When("the user clicks on the Actions part in Template Card",()=>{
    createTemplateCard.clicksOnActionTemplateButton()
})
When("the user clicks on Make template button",()=>{
    createTemplateCard.clicksOnMakeTemplateButton()
})
When("the user clicks on the close button",()=>{
    createTemplateCard.clicksOnCloseButton()
})
Then("the Template card should be created successfully",()=>{
    createTemplateCardAssertion.checkTheCardIsTemplate()
})
After(()=>{
if (!Cypress.spec.name.includes("createTemplateCard")) return;
   dataUtil.deleteBoard(boardId)

})
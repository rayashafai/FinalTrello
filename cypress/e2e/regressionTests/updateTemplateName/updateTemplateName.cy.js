import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createTemplateCardActions from "../../../pageObjects/createTemplateCard/Actions.cy";
import updateTemplateNameActions from "../../../pageObjects/updateTemplateName/Actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/Assertions.cy";
import dataUtils from "../../../support/dataUtils.cy";



const sharedAction=new sharedActions();
const createTemplateCard=new createTemplateCardActions();
const updateTemplateName=new updateTemplateNameActions();
const updateTemplateNameAssertion=new updateTemplateNameAssertions
const updateName="updated Template Name";
const dataUtil=new dataUtils();

const cardName = "raya Card";


Before(() => {
    if (!Cypress.spec.name.includes("updateTemplateName")) return;

     sharedAction.loginToTrelloWebsite();
     sharedAction.createBoard().then((response) => {
        boardId = response.boardId;
        boardUrl = response.boardUrl;
        sharedAction.createCard(boardId,cardName).then((card) => {
            cardId = card.cardId;
        })

    });   
});

Given("the user open the board that including a card",()=>{
     sharedAction.openBoard(boardUrl)
})
When("the user creates a Template card",()=>{
    createTemplateCard.createTemplateCard()
})
When("the user clicks on the edit icon in Template Card",()=>{
    updateTemplateName.clicksOnEditIcon()
})
When("the user writes new name for the Template card",()=>{
    updateTemplateName.typeANewName()
})
When("the user clicks on the save button",()=>{
    updateTemplateName.clicksOnSaveButton()
})
Then("the name of the Template card should be updated successfully",()=>{
    updateTemplateNameAssertion.checkTheNameOfTemplateIsUpdated(updateName)
})


After(()=>{
if (!Cypress.spec.name.includes("updateTemplateName")) return;
   dataUtil.deleteBoard(boardId)

})
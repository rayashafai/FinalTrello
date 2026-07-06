import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createTemplateCardActions from "../../../pageObjects/createTemplateCard/Actions.cy";
import dataUtils from "../../../support/dataUtils.cy";
import hideTemplateActions from "../../../pageObjects/hideTemplate/Actions.cy";
import hideTemplateAssertions from "../../../pageObjects/hideTemplate/Assertions.cy";



const sharedAction=new sharedActions();
const createTemplateCard=new createTemplateCardActions();
const dataUtil=new dataUtils();
const hideTemplate=new hideTemplateActions();
const hideTemplateAssertion=new hideTemplateAssertions();

const cardName = "raya Card";


Before(() => {
    if (!Cypress.spec.name.includes("hideTemplate")) return;

     sharedAction.loginToTrelloWebsite();
     sharedAction.createBoard().then((response) => {
        boardId = response.boardId;
        boardUrl = response.boardUrl;
        sharedAction.createCard(boardId,cardName).then((card) => {
            cardId = card.cardId;
        })

    });   
});

Given("the user open the board that including a Template card",()=>{
     sharedAction.openBoard(boardUrl)
})
When("the user create a Template card",()=>{
    createTemplateCard.createTemplateCard()
})
When("the user clicks on the Template",()=>{
    hideTemplate.clicksOnTheTemplate()
})
When("the user clicks on actions part",()=>{
    hideTemplate.clicksOnActionPart()
})
When("the user clicks on Hide from list",()=>{
    hideTemplate.clicksOnHideButton()
})
When("the user click on close button",()=>{
    hideTemplate.clicksOnCloseIcon()
})
Then("the Template card should be hide from the list successfully",()=>{
    hideTemplateAssertion.checkIfTemplateIsHideFromList(cardName)
})


After(()=>{
if (!Cypress.spec.name.includes("hideTemplate")) return;
   dataUtil.deleteBoard(boardId)

})
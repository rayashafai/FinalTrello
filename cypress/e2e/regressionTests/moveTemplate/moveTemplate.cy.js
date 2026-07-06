import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createTemplateCardActions from "../../../pageObjects/createTemplateCard/Actions.cy";
import dataUtils from "../../../support/dataUtils.cy";
import moveTemplateActions from "../../../pageObjects/moveTemplate/Actions.cy";
import moveTemplateAssertions from "../../../pageObjects/moveTemplate/Assertions.cy";



const sharedAction=new sharedActions();
const createTemplateCard=new createTemplateCardActions();
const dataUtil=new dataUtils();
const moveTemplate=new moveTemplateActions();
const moveTemplateAssertion=new moveTemplateAssertions();

const cardName = "raya Card";


Before(() => {
    if (!Cypress.spec.name.includes("moveTemplate")) return;

     sharedAction.loginToTrelloWebsite();
     sharedAction.createBoard().then((response) => {
        boardId = response.boardId;
        boardUrl = response.boardUrl;
        sharedAction.createCard(boardId,cardName).then((card) => {
            cardId = card.cardId;
        })

    });   
});

Given("the user open the board that having a card",()=>{
     sharedAction.openBoard(boardUrl)
})
When("the user makes a Template card",()=>{
    createTemplateCard.createTemplateCard()
})
When("the user clicks on the edit icon un that Template Card",()=>{
    moveTemplate.clickOnEditIcon()
})
When("the user clicks on move button",()=>{
    moveTemplate.clicksOnMoveIcon()
})
When("the user clicks on the list menu",()=>{
    moveTemplate.clicksOnListMenu()
})
When("the user chooses the list want to move",()=>{
    moveTemplate.chooseAnyList()
})
When("the user after that clicks on move button",()=>{
    moveTemplate.clicksOnMoveButton()
})
Then("the Template card should moved to that list successfully",()=>{
    moveTemplateAssertion.checkIfTemplateMovedToTheCorrectList(cardName)
})


After(()=>{
if (!Cypress.spec.name.includes("moveTemplate")) return;
   dataUtil.deleteBoard(boardId)

})
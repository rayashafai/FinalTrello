import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createBoardActions from "../../../pageObjects/createBoard/Actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/Assertions.cy";
 
const boardName="firstboard";
const sharedAction= new sharedActions();
const createBoardAction= new createBoardActions();
const createBoardAssertion= new createBoardAssertions();

Given("open Trello Website and login",()=>{
    sharedAction.loginToTrelloWebsite()
})

When("click on create button in navbar",()=>{
    createBoardAction.clickOnCreateButtonInNavbar()
})
When("choose create board option",()=>{
    createBoardAction.chooseBoardOption()
})
When("type a board name",()=>{
    createBoardAction.typeBoardTitle(boardName)
})
When("click on create button",()=>{
    createBoardAction.clickOnCreateButton()
})
Then("The board should be created successfully",()=>{
    createBoardAssertion.checkUrlIsContain(boardName).checkBoardNameIsContain(boardName)
})
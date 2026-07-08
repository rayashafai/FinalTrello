class createBoardActions{

clickOnCreateButtonInNavbar(){
    cy.wait(5000)
    cy.findByTestId("header-create-menu-button").click()
    return this
}
chooseBoardOption(){
    cy.findByTestId("header-create-board-button").click()
    return this
}

typeBoardTitle(boardName){
    cy.findByTestId("create-board-title-input").type(boardName)
    return this
}
clickOnCreateButton(){
    cy.findByTestId("create-board-submit-button").click()
}
}
export default createBoardActions
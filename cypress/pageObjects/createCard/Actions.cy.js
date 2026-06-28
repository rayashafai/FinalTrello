class createCardActions{


    openBoard(url){
        cy.visit(url)
        return this
    }
    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button",{ timeout: 10000 }).should('be.visible').first().click()
        return this
    }
    typeInCardTitleField(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        return this
    }
    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button").click()
        return this
    }
}
export default createCardActions
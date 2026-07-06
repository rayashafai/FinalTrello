class hideTemplateActions{

    clicksOnTheTemplate(){
        cy.findByTestId("list-card").click()
        return this
    }
    clicksOnActionPart(){
          cy.findByTestId("card-back-actions-button").click()
         return this
    }
    clicksOnHideButton(){
        cy.findByTestId("card-back-archive-button").click()
        return this
    }
    clicksOnCloseIcon(){
          cy.findByTestId("CloseIcon").click()
         return this
    }

}
export default hideTemplateActions
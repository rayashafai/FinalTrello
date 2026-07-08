 class createTemplateCardActions{

      createTemplateCard() {
        cy.findByTestId("list-cards").eq(0).click()
        cy.findByTestId("card-back-actions-button").click()
        cy.findByTestId("card-back-make-template-button").click()
        cy.get("[aria-label='Close dialog']").click()

        return this
    }
    clicksOnTemplateCard(){
          cy.findByTestId("list-cards").eq(0).click()
         return this
    }

    clicksOnActionTemplateButton(){
          cy.findByTestId("card-back-actions-button").click()
         return this
    }
    clicksOnMakeTemplateButton(){
          cy.findByTestId("card-back-make-template-button").click()
         return this
    }
    clicksOnCloseButton(){
         cy.get("[aria-label='Close dialog']").click()
         return this
    }
}
export default createTemplateCardActions
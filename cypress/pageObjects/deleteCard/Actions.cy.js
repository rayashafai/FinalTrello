class deleteCardActions{
    
   
    clicksOnCard(){
          cy.findByTestId("list-cards").eq(0).click()
         return this
    }
    clicksOnActionButton(){
          cy.findByTestId("card-back-actions-button").click()
         return this
    }
    clicksOnArchiveButton(){
          cy.findByTestId("card-back-archive-button").click()
         return this
    }
    clicksOnDeleteButton(){
          cy.findByTestId("card-back-delete-card-button").click()
         return this
    }
    clicksOnDeleteConfirmButton(){
          cy.findByTestId("popover-confirm-button").click()
         return this
    }
}
export default deleteCardActions
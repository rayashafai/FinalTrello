class updateTemplateNameAssertions{
      
    checkTheNameOfTemplateIsUpdated(updateName){
        cy.findByTestId("card-name").should("be.visible").and("contain",updateName)
    }
}
export default updateTemplateNameAssertions
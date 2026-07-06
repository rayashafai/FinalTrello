class updateTemplateNameActions{

    clicksOnEditIcon(){
        cy.findByTestId("quick-card-editor-button").click()
    }
    typeANewName(){
        cy.findByTestId("quick-card-editor-card-title").type("updated Template Name")
    }
    clicksOnSaveButton(){
        cy.get("[type='submit']").click()
    }
}
export default updateTemplateNameActions
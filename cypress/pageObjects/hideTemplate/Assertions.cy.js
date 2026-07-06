class hideTemplateAssertions{

    checkIfTemplateIsHideFromList(templateName){
        cy.wait(1000)
        cy.contains('[data-testid=card-name]', templateName).should('not.exist')
    }
}
export default hideTemplateAssertions
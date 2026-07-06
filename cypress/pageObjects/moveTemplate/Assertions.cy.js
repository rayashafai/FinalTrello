class moveTemplateAssertions{

    checkIfTemplateMovedToTheCorrectList(listName){
        cy.get('[data-testid=list-wrapper]').eq(2).find('[data-testid=card-name]').should('contain',listName)
    }
}
export default moveTemplateAssertions
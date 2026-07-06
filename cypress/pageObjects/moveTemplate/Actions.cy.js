class moveTemplateActions{

    clickOnEditIcon(){
        cy.findByTestId("quick-card-editor-button").click()
    }
    clicksOnMoveIcon(){
        cy.findByTestId("quick-card-editor-move").click({ force: true })
    }
    clicksOnListMenu(){
        cy.findByTestId("move-card-popover-select-list-destination-select--indicators-container").click()
    }
    chooseAnyList(){
        cy.contains('[role="option"]', 'Done').click()
    }
    clicksOnMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click()
    }
}
export default moveTemplateActions
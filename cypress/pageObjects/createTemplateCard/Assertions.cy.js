class createTemplateCardAssertions{

    checkTheCardIsTemplate(){
        cy.get(".nGT0DJOrI676qn").should("contain","This card is a template.")
    }
}
export default createTemplateCardAssertions
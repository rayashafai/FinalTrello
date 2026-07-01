import dataUtils from "../../support/dataUtils.cy"
const dataUtil=new dataUtils();

class sharedActions{

        loginToTrelloWebsite(){
        cy.loginToTrello()
        return this
    }
    openBoard(url){
        cy.wait(5000)
        cy.visit(url)
        cy.wait(3000)
        return this
    }
   createBoard() {
    return dataUtil.createBoard("rayaBoard").then((response) => {

        const boardId = response.body.id;
        const boardUrl = response.body.url;

        cy.log("Board ID = " + boardId);
        cy.log("Board URL = " + boardUrl);

       return cy.wrap({ boardId, boardUrl }); 
    });
}

    createCard(boardId,cardName) {

    return dataUtil.getLists(boardId).then((listsResponse) => {

        const listId = listsResponse.body[0].id;

        cy.log("List ID = " + listId);

        return dataUtil.createCard(listId, cardName).then((cardResponse) => {

            const cardId = cardResponse.body.id;

            cy.log("Card ID = " + cardId);

            return cy.wrap({ cardId });
        });
    });

} 



}

export default sharedActions
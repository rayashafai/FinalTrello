import { APIKey, APIToken } from "../../support/constants.cy";

class deleteCardAsserions {

    checkCardDeleted(cardId) {
        cy.wait(1500)
        cy.request({
            method: "GET",
            url: `https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`,
            failOnStatusCode: false
        }).then((response) => {

            expect(response.status).to.eq(404);

        });

        return this;
    }
}

export default deleteCardAsserions;
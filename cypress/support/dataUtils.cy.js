import{APIKey,APIToken} from "../support/constants.cy"

class dataUtils{

    createBoard = (boardName) => {
  return cy.request({
    method: "POST", url: `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`,
    failOnStatusCode: false
  })
}
    // createBoard=(boardName)=>{
    //     return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    // }

    deleteBoard=(id)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`)
    }
    }
export default dataUtils
describe("Login Functionality" , () => {
    it("Open the Demo application and login", () =>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('input[name="username"]').type("jun")
        cy.get('input[name="password"]').type("jun")
        cy.get('input[type="submit"]').click()



    })
    
        
    
}) 
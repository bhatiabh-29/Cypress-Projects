describe("Automate Registration" , () => {
    it("Open the Demo application", () =>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('input[id="customer.firstName"]').type("Jun")
        cy.get('input[id="customer.lastName"]').type("Lion")
        cy.get('input[id="customer.address.street"]').type("55 northend")
        cy.get('input[id="customer.address.city"]').type("Boston")
        cy.get('input[id="customer.address.state"]').type("MA")
        cy.get('input[id="customer.address.zipCode"]').type("11111")
        cy.get('input[id="customer.phoneNumber"]').type("0000000000")
        cy.get('input[id="customer.ssn"]').type("0000000000")
        cy.get('input[id="customer.username"]').type("jun")
        cy.get('input[id="customer.password"]').type("jun")
        cy.get('input[id="repeatedPassword"]').type("jun")
        cy.get("input[value='Register']").click()



    })
    
        
    
}) 
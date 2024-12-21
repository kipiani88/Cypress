Cypress.Commands.add('correctlog', () => {
    
    cy.get('[data-qa="login-email"]').type("boohooh@gmail.com")
    cy.get('[data-qa="login-password"]').type("12345678")
    cy.get('[data-qa="login-button"]').click()
    
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type("ragacposta@gmail.com")
    cy.get('[data-qa="login-password"]').type("53413454")
    cy.get('[data-qa="login-button"]')click(

    )
  })
})
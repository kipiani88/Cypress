describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
    cy.contains("Login to your account").should("be.visible")

cy.correctlog()
    
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/login')
cy.fixture('Users.json').then((userInfo) =>{
  cy.get('[data-qa="login-email"]').type(userInfo.firstName);
  cy.get('[data-qa="login-password"]').type(userInfo.password)
  cy.get('[data-qa="login-button"]').click()
})    
  })
})
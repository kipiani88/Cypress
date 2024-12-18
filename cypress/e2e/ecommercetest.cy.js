describe('e-commerce test', () => {
  it('passes', () => {
    cy.visit('https://wk-modules.com/en/search-products/')

  

cy.logging()    
    // მომხმარებლის დეტალებს შეცვლა -   footer > YOUR ACCOUNT > Information- + შეამოწმეთ რომ შენახვის შემდეგ ცვლილებები აისახა.
    cy.get('#identity-link > .link-item').click()
    cy.get('#field-firstname').should("have.value", 'Alex')
    cy.get('#field-lastname').should("have.value", 'Kross')
    cy.get('#field-password').type("paroli")
    cy.get(':nth-child(11) > .col-md-6 > .custom-checkbox > label > input').click()
    cy.get('.form-footer > .btn').click()
    cy.contains("Alex").should("be.visible")
    cy.contains("Kross").should("be.visible")

    // ახალი მისამართის დამატება - footer > YOUR ACCOUNT > Add first address
    cy.get('.page-footer > [href="https://wk-modules.com/en/my-account"] > span').click()
    cy.get('#addresses-link > .link-item').click()
    cy.get('#field-id_country').select("United States")
    cy.get('#field-address1').type('Jason Barnum 14')
    cy.get('#field-city').type("New York")
    cy.get('#field-id_state').select('New York')
    cy.get('.form-footer > .btn').type('18848')
    cy.get('.form-footer > .btn').click()
    
    //არსებული მისამართის შეცვლა  
    //მისამართის წაშლა
    cy.get('[href="//wk-modules.com/en/address?id_address=8&delete=1&token=214a04320882d68ff266eae78cd5fcd2"] > span').click()
  })
})
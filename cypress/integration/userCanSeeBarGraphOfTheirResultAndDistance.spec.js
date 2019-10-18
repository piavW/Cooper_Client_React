describe('User attempts to view their performance data', () => {

  before(function() {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
    cy.get('input[id="distance"]').type('1000')
    cy.get('select[id="gender"]').select('female')
    cy.get('input[id="age"]').type('23')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
    cy.get('input[id="distance"]')
      .clear()
      .type('1500')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
  });

  it('user view it successfully', async () => {
    cy.get('button[id="show-index"]').click()
    cy.contains('.#bar-graph')
    cy.contains('Poor, 1000 meters')
    cy.contains('Average, 15000 meters')
  })
})
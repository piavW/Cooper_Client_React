describe('User can save and then retrieve distance data successfully', () => {
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
      .type('1000')
      cy.get('input[id="distance"]')
      .clear()
      .type('2500')
      cy.get('input[id="distance"]')
      .clear()
      .type('2000')
      cy.get('#show-index').click()
      })

  it('displays first distance', () => {
    cy.contains('Poor, 1000 meters')
  })

  it('displays second distance', () => {
    cy.contains('Above average, 2500 meters')
  })

  it('displays third distance', () => {
    cy.contains('Average, 2000 meters')
  })
});
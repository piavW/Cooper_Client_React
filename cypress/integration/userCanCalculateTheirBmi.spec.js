describe('BMI Converter', () => {
  before(function() {
      cy.visit('http://localhost:3001');
  });

  beforeEach(function() {
      cy.reload();
  });

  it('should display "BMI Converter" text on page', () => {
      cy.contains('BMI Converter');
  });

  describe('Metric method', () => {
      beforeEach(() => {
          cy.get('select[id="method"]').select('metric')
          cy.get('input[name="weight"]').type('95')
          cy.get('input[name="height"]').type('186')
      })

      it('displays assesment', async () => {   
          cy.contains('You are Overweight')
      })

      it('displays BMI value', async () => {   
          cy.contains('BMI of 27.46')
      })
  })

  describe('Imperial method', async () => {
      beforeEach( async () => {
          cy.get('select[id="method"]').select('imperial')
          cy.get('input[name="weight"]').type('200')
          cy.get('input[name="height"]').type('73')
      })

      it('displays assesment', async () => {   
          cy.contains('You are Overweight')
      })

      it('displays BMI value', async () => {   
          cy.contains('BMI of 26.38')
      })
  })
}); 
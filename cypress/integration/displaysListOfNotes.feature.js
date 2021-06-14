describe('Client displays list of notes on each Inquiry', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://flex-coast-api-development.herokuapp.com/api/inquiries',
      {
        fixture: 'listOfInquiries.json',
      }
    )
    cy.visit('/')
    cy.window().its('store').invoke('dispatch', {
      type: 'AUTHENTICATE',
      payload: 'Johhny Cage',
    })
    cy.get('[data-cy=inquiry]').first().click()
  })
  describe('Successfully', () => {
    it('is expected to display a list of 3', () => {
      cy.get('[data-cy=inquiry-collapsible-cell]').within(() => {
        cy.get('[data-cy=notes]').should('have.length', '3')
      })
    })

    it('is expected to display the expected content', () => {
      cy.get('[data-cy=inquiry-collapsible-cell]').within(() => {
        cy.get('[data-cy=notes]')
          .first()
          .should('include', 'This inquiry was submitted 14 Jun 2021')
          .and('include', 'by: System')
        cy.get('[data-cy=notes]')
          .eq(1)
          .should('include', 'This inquiry was started 14 Jun 2021')
          .and('include', 'by: John Doe')
        cy.get('[data-cy=notes]')
          .eq(2)
          .should('include', 'This inquiry was finished 14 Jun 2021')
          .and('include', 'by: John Doe')
      })
    })
  })
})

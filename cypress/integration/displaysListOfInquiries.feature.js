describe('User can see the inquiries', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://flex-coast-development.herokuapp.com/api/inquiries',
      {
        fixture: 'listOfInquiries.json',
      }
    )
    cy.visit('/')
  })
  describe('Successfully', () => {
    it('is expected to show three inquiries ', () => {
      cy.get('[data-cy=inquiry]').should('have.length', 3)
    })
    it('is expected to show the content of the inquiries', () => {
      cy.get('[data-cy=inquiry]')
        .first()
        .within(() => {
          cy.get('[data-cy=email]').should('contain', 'lucy@example.com')
          cy.get('[data-cy=company]').should('contain', 'comp1')
          cy.get('[data-cy=start-date]').should('contain', '2021-06-21')
          cy.get('[data-cy=inquired-at]').should('contain', '2021-06-19')
        })
    })
  })
})

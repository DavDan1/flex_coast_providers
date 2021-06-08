describe('Broker is able to update status of inquiry', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://flex-coast-development.herokuapp.com/api/inquiries',
      {
        fixture: 'listOfInquiries.json',
      }
    )
    cy.intercept(
      'PUT',
      'https://flex-coast-development.herokuapp.com/api/inquiries/**',
      {
        message: 'The inquiry status has been updated',
      }
    )
    cy.visit('/')
  })

  it('is expected to update the status to started', () => {
    cy.get('[data-cy=inquiry]').first().click()
    cy.get('[data-cy=inquiry-collapsible-cell]').within(() => {
      cy.fixture('listOfInquiries.json').then((inquiries) => {
        cy.intercept(
          'GET',
          'https://flex-coast-development.herokuapp.com/api/inquiries',
          { body: inquiries }
        ).as('inquiries')
        cy.get('[data-cy=status-btn-2]').click()
        cy.wait('@inquiries').then(() => {
          inquiries[0].inquiry_status = 'started'
          cy.intercept(
            'GET',
            'https://flex-coast-development.herokuapp.com/api/inquiries',
            { body: inquiries }
          )
        })
      })

      cy.get('[data-cy=inquiry-status]').should('contain', 'started')
    })
  })
})

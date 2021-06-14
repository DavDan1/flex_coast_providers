describe('Brokers can create new notes', () => {
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
    it('is expected to display the new message on top of the notes list', () => {
      cy.get('[data-cy=note-input]').type('Client has monthly budget of 50.000 sek')
      cy.fixture('listOfInquiries.json').then((fixture) => {
        let newNote = {
          body: 'Client has monthly budget of 50.000 sek',
          id: 19,
          date: '17 Jun 2021',
          creator: {
            id: 4,
            email: 'johndoe@flexcoast.se',
            name: 'John Doe',
          },
        }
        fixture.inquiries[4].notes.unshift(newNote)
        cy.intercept(
          'GET',
          'https://flex-coast-api-development.herokuapp.com/api/inquiries',
          { body: fixture }
        )
      })
      cy.get('[data-cy=note-submit-btn]').click()
      cy.get('[data-cy=note]')
          .first()
          .should('contain', 'Client has monthly budget of 50.000 sek')
          .and('contain', 'by: John Doe')
    })
  })

  describe('Unsuccessfully', () => {
  })
})

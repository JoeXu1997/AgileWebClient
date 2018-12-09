
describe('Manage Movie Page', () => {
  beforeEach(() => {
    cy.request('http://localhost:3000/movies')
      .its('body')
      .then((movies) => {
        movies.forEach((element) => {
          cy.request('DELETE',
            'http://localhost:3000/movies/' + element._id)
        })
      })
    cy.fixture('movies')
      .then((movies) => {
        movies.forEach((movie) => {
          cy.request('POST',
            'http://localhost:3000/addmoviestest', movie)
        })
      })
    cy.visit('/')
    // Click Manage Donations navbar link
    cy.get(':nth-child(3) > .nav-link > .fa').click()
  })

  it('allows a movie to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 10)
    // Click trash/delete link of 3rd donation in list
    cy.get(':nth-child(10) > :nth-child(8)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 9)
  })

  // it('allows a movie to be edited', () => {
  //   // Click + symbol of 2nd donation in list
  //   cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
  //   cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
  //   // Unclick same + symbol
  //   cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
  //   cy.get('div.vue-message').should('not.exist')
  // })
})

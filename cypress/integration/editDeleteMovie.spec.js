
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
  it('allows a movie to be edited', () => {
    // Click + symbol of 2nd donation in list
    cy.get(':nth-child(10) > :nth-child(7) > .fa').click()
    cy.get('label').contains('Movie Name').next().type('newtest')
    cy.get('#movietype').select('Comedy')
    cy.get('label').contains('Main Actor').next().type('xuyue')
    cy.get('label').contains('Director').next().type('xuyue')
    cy.get('button[type=submit]').click()
    cy.get(':nth-child(6) > .btn').click()
  })

  it('allows a movie to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 10)
    // Click trash/delete link of 3rd donation in list
    cy.get(':nth-child(10) > :nth-child(8)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 9)
  })

})

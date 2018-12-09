describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Movie Time !!')
    cy.get('h2').should('contain', 'Just go to the Movie page and make your choice')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar-brand').should('contain', 'MyMovie')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Movie')
        cy.get('.nav-item:nth-child(3)').should('contain', 'VoteRank')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Add Movie')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Login')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Logout')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get(':nth-child(1) > :nth-child(2) > .nav-link > .fa').click()
      cy.url().should('include', '/slide')
      cy.get(':nth-child(3) > .nav-link > .fa').click()
      cy.url().should('include', '/movie')
      cy.get(':nth-child(4) > .nav-link > .fa').click()
      cy.url().should('include', '/addMovie')
      cy.get('.ml-auto > :nth-child(1) > .nav-link > .fa').click()
      cy.url().should('include', '/login')
      cy.get('.ml-auto > :nth-child(2) > .nav-link > .fa').click()
      cy.url().should('include', '/logout')
      // etc
    })
  })
})

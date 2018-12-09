describe('Home page', () => {
  beforeEach(() => {
    cy.visit('#/login')
  })

  it('Shows a header', () => {
    cy.get('h3').should('contain', 'Join Us Here!')
  })
  describe('Login', () => {
    it('should login successfully and could access logout page', () => {
      cy.get('[type="text"]').type('test@gmail.com')
      cy.get('[type="password"]').type('123456')
      cy.get('.login-button').click()
      cy.get('p').should('contain', 'pictiure and user information here')
    })
    it('should failed login if username and pw are invalid', () => {
      cy.get('[type="text"]').type('notexist@gmail.com')
      cy.get('[type="password"]').type('123456')
      cy.get('.login-button').click()
      cy.get('.hero > :nth-child(9)').should('contain', 'There is no user record corresponding to this identifier. The user may have been deleted.')
    })
  })
})

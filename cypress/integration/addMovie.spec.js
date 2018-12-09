describe('Add New Movie', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Donate navbar link
    cy.get('.nav-item:nth-child(4)').click()
  })

  it('allows a valid movie to be submitted', () => {
    // Fill out web form
    cy.get('label').contains('Movie Name').next().type('newtest')
    cy.get('.form-label').should('contain', 'Select Movie Type')
    cy.get('#movietype').select('Horror')
    cy.get('label').contains('Main Actor').next().type('xuyue')
    cy.get('label').contains('Director').next().type('xuyue')
    cy.contains('Add Successfully!').should('not.exist')
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Add Successfully!').should('exist')
  })

  it('shows error messages for incomplete form fields', () => {
    cy.get('button[type=submit]').click()
    cy.get('.error').contains('Name is Required')
    cy.get('.error').contains('Actor is Required(even null)')
    cy.get('.error').contains('Director is Required')
    cy.get('label').contains('Movie Name').next().type('newtest')
    cy.get('.error').contains('Name is Required').should('not.exist')
    cy.get('#movietype').select('Horror')
    cy.get('label').contains('Main Actor').next().type('xuyue')
    cy.get('.error').contains('Actor is Required(even null)').should('not.exist')
    cy.get('label').contains('Director').next().type('xuyue')
  })
})

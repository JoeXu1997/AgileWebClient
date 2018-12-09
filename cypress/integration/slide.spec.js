describe('Home page', () => {
  beforeEach(() => {
    cy.visit('#/slide')
  })

  it('Shows a header', () => {
    cy.get('h3').should('contain', 'Eachone You like Is Here!')
  })
  it('should change pictures', () => {
    cy.get('.controlbar > :nth-child(4)').click()
    cy.get('.controlbar > :nth-child(9)').click()
  })
  it('should turn to comment page', () => {
    cy.get('[style=""] > a > .slideimg').click()
    cy.get('p').should('contain', 'Movie and Comments Here')
  })
})

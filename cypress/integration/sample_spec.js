describe('verifies page load', () => {
  it('visits the string reverse flashtab', () => {
    cy.visit('./index.html')
  })
})

describe('verifies strReverse reverses input', () => {
  it('finds the reverse button', () => {
    cy.visit('./index.html')
    cy.get('.action-input')
       .type('Hi I am A Hooman')
       .should('have.value', 'Hi I am A Hooman')
    cy.contains('Reverse It!').click()
    cy.get('h1')
      .should('contain', 'Hi I am A Hooman reversed is namooh a ma i ih , and is 16 letters long.')


  })
})

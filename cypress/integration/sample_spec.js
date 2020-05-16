describe('verifies page load', () => {
  it('visits the string reverse flashtab', () => {
    cy.visit('./index.html')
  })
})

describe('verifies alert works', () => {
  it('verify alert', () => {
    cy.visit('./index.html')
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('button').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Please enter a word to reverse')

    })

  })
})

describe('verifies strReverse reverses input', () => {
  it('finds the reverse button', () => {
    cy.visit('./index.html')
    cy.get('.action-input')
       .type('Hi I am A Hooman')
       .should('have.value', 'Hi I am A Hooman')
    cy.get('button').click()
    cy.get('h1')
      .should('contain', 'Hi I am A Hooman reversed is namooh a ma i ih , and is 16 letters long.')


  })
})
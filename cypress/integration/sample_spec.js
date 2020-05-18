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
       .type('I am not a human')
       .should('have.value', 'I am not a human')
    cy.get('button').click()
    cy.get('h1')
      .should('contain', 'I am not a human reversed is namuh a ton ma i, and is 16 letters long.')


  })
})

describe('verifies strReverse detects palindrome', () => {
  it('finds the reverse button', () => {
    cy.visit('./index.html')
    cy.get('.action-input')
       .type('Racecar')
       .should('have.value', 'Racecar')
    cy.get('button').click()
    cy.get('h1')
      .should('contain', 'Racecar reversed is racecar and it is a Palindrome')


  })
})

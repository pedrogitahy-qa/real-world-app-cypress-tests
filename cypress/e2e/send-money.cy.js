const user = require('../fixtures/users.json')

describe('Send Money flow', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Send Money to another user', () => {
    cy.get('input[name="username"]').type(user.validUser.username)
    cy.get('input[name="password"]').type(user.validUser.password)
    cy.get('button[type="submit"]').click()

    cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').click()

   cy.get('[data-test="user-list-search-input"]')
  .should('be.visible')
  .click()
  .type('Ted Parisian')

    cy.contains('Ted Parisian').click()

    cy.get('input[name="amount"]').type('500')
    cy.get('#transaction-create-description-input').type('Payment')

    cy.contains('button', 'Pay').click()

    cy.contains('h2', 'Paid $500.00 for Payment').should('be.visible')
  })
})
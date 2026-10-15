const register = require('../fixtures/users.json')

describe('Signup', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Signup with valid credentials', () => {
        cy.intercept('POST', '**/users').as('createUser')
        cy.get('[name="firstName"]').type(register.signUpUser.firstName)
        cy.get('[name="lastName"]').type(register.signUpUser.lastName)
        cy.get('[name="username"]').type(register.signUpUser.username)
        cy.get('[name="password"]').type(register.signUpUser.password)
        cy.get('[name="confirmPassword"]').type(register.signUpUser.password)
        cy.get('[type="submit"]').click()
        cy.wait('@createUser').its('response.statusCode').should('eq', 201)
        cy.location('pathname').should('eq', '/signin')
        })

    })
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('FillCustDetail', () => {

    cy.clearCookies()
    cy.clearLocalStorage()

    //FILL CUSTOMER DETAILS
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input')
    .type('Fachry Ramadhan')

    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input')
    .type('fachrydan@gmail.com')

    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input')
    .type('081518739390')

    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input')
    .type('South Jakarta')
    
    cy.get('textarea').clear()
    cy.get('textarea').type('Jln. Kampung Durian Runtuh')

    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear()
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input')
    .type('12010')

    cy.contains('CHECKOUT').click()
})
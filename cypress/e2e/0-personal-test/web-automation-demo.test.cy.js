/// <reference types="cypress" />

describe ('Demo-Midtrans-Eduwork', () => {
    before(() => {
        cy.visit('https://demo.midtrans.com/')
        cy.url().should('include', '')
        cy.contains('Midtrans Pillow').should('be.visible')
        cy.contains('BUY NOW').click()
        //cy.pause()
    });

    it('Should try to fill cust detail with valid data', () => {
        cy.get('.input-label').should('be.visible')
        
        //USE COMMANDS
        //cy.FillCustDetail()

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

        //cy.get('logo-payment-type-input-field').should('be.visible')
        //cy.contains('Virtual account').should('be.visible')
        //cy.get('[alt="BCA"]').click()
        //cy.get('[src="https://d2f3dnusg0rbp7.cloudfront.net/snap/assets/bca-906e4db60303060666c5a10498c5a749962311037cf45e4f73866e9138dd9805.svg]').click()

        //cy.xpath('//*[@id="application"]/div/div[3]/a/div[1]/div[1]').click()
        //cy.get('a[href="#/gopay-qris"]').click()
    });

});
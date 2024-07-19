describe('Querying Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('get tests', () => {
        cy.get('.home-list').find('li').contains('get').should('be.visible')
        cy.get('.home-list').find('li').contains('get').click()
        cy.get('#query-btn').should('contain', 'Button')

    })

    it('contains tests', () => {
        cy.get('.home-list').find('li').contains('contains').should('be.visible')
        cy.get('.home-list').find('li').contains('contains').click()

        cy.get('.query-list')
            .contains('bananas').should('have.class', 'third')

    })

    it('within tests', () => {
        cy.get('.home-list').find('li').contains('within').should('be.visible')
        cy.get('.home-list').find('li').contains('within').click()

        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    })

    it('root tests', () => {
        cy.get('.home-list').find('li').contains('root').should('be.visible')
        cy.get('.home-list').find('li').contains('root').click()


        cy.get('.query-ul').within(() => {
            // In this within, the root is now the ul DOM element
            cy.root().should('have.class', 'query-ul')
            cy.root().find('li').contains('One').should('be.visible')
        })
    })


})
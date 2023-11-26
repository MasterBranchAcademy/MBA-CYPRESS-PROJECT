describe('Navigation Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('go tests', () => {
        cy.get('.home-list').find('li').contains('go').should('be.visible')
        cy.get('.home-list').find('li').contains('go').click()

        cy.go('back')
        cy.location('pathname').should('not.include', 'navigation')

    })

    it.only('reload tests', () => {
        cy.get('.home-list').find('li').contains('reload').should('be.visible')
        cy.get('.home-list').find('li').contains('reload').click()

        cy.go('back')
        cy.reload()

    })
})
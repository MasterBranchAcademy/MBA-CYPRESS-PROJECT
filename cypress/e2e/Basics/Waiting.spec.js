describe('Waiting Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('wait tests', () => {
        cy.get('.home-list').find('li').contains('wait').should('be.visible')
        cy.get('.home-list').find('li').contains('wait').click()

        cy.get('.wait-input1').type('Wait 1000ms after typing')
        cy.wait(1000)
        cy.get('.wait-input2').type('Wait 1000ms after typing')
        cy.wait(1000)
        cy.get('.wait-input3').type('Wait 1000ms after typing')
        cy.wait(1000)

    })
})
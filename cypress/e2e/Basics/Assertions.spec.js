describe('Assertions Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('should tests', () => {
        cy.get('.home-list').find('li').contains('should').should('be.visible')
        cy.get('.home-list').find('li').contains('should').click()
        cy.get('.assertion-table')
            .find('tbody tr:last').should('have.class', 'success')

    })










    it('expect tests', () => {
        cy.get('.home-list').find('li').contains('each').should('be.visible')
        cy.get('.home-list').find('li').contains('each').click()


        cy.get('.connectors-each-ul>li').first()
            .each(function (actualName) {
                let expectedName = "Lara Williams"
                expect(expectedName).to.equal(actualName.text())
            })


    })

})
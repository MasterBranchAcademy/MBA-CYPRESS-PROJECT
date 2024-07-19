describe('Aliasing Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('as tests', () => {
        cy.get('.home-list').find('li').contains('as').should('be.visible')
        cy.get('.home-list').find('[href="/commands/aliasing"]').contains('as').click()

        cy.get('.as-table')
            .find('tbody>tr').first()
            .find('td').first()
            .find('button').as('firstBtn')

            cy.get('@firstBtn').click()

    })
})
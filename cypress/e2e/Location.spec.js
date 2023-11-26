describe('Location Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('location tests', () => {
        cy.get('.home-list').find('li').contains('location').should('be.visible')
        cy.get('.home-list').find('li').contains('location').click()

        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('https://example.cypress.io/commands/location')
            expect(location.host).to.eq('example.cypress.io')
            expect(location.hostname).to.eq('example.cypress.io')
            expect(location.origin).to.eq('https://example.cypress.io')
            expect(location.pathname).to.eq('/commands/location')
            expect(location.port).to.eq('')
            expect(location.protocol).to.eq('https:')
            expect(location.search).to.be.empty
          })
        

    })

    it.only('url tests', () => {
        cy.get('.home-list').find('li').contains('url').should('be.visible')
        cy.get('.home-list').find('li').contains('url').click()

        cy.url().should('include', 'cypress.io')
    
    })
})
describe('Connectors Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('each tests', () => {
        cy.get('.home-list').find('li').contains('each').should('be.visible')
        cy.get('.home-list').find('li').contains('each').click()

        cy.get('.connectors-each-ul>li')
            .each((name) => {
                cy.log(name.text())
            })
    })

    it('its tests', () => {
        cy.get('.home-list').find('li').contains('its').should('be.visible')
        cy.get('.home-list').find('li').contains('its').click()

        cy.get('.connectors-its-ul>li')
            .its('length')
            .should('be.gt', 2)
    })

    it('invoke tests', () => {
        cy.get('.home-list').find('li').contains('invoke').should('be.visible')
        cy.get('.home-list').find('li').contains('invoke').click()

        cy.get('.connectors-div').should('be.hidden')
            .invoke('show')
            .should('be.visible')

    })

    it('then tests', () => {
        cy.get('.home-list').find('li').contains('then').should('be.visible')
        cy.get('.home-list').find('li').contains('then').click()

        cy.get('.connectors-list>li').then(function ($lis) {
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')
        })

    })

})
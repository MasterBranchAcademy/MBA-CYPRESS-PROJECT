describe('Actions Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('type tests', () => {
        cy.get('.home-list').find('li').contains('type').should('be.visible')
        cy.get('.home-list').find('li').contains('type').click()

        cy.get('.action-email')
            .type('fake@email.com').should('have.value', 'fake@email.com')

    })

    it('clear tests', () => {
        cy.get('.home-list').find('li').contains('clear').should('be.visible')
        cy.get('.home-list').find('li').contains('clear').click()

        cy.get('.action-clear').type('Clear this text')
            .should('have.value', 'Clear this text')
            .clear()
            .should('have.value', '')

    })

    it('click tests', () => {
        cy.get('.home-list').find('li').contains('click').should('be.visible')
        cy.get('.home-list').find('li').contains('click').click()

        cy.get('.action-btn').click()
    })

    it('check tests', () => {
        cy.get('.home-list').find('li').contains('check').should('be.visible')
        cy.get('.home-list').find('li').contains('check').click()

        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            .check().should('be.checked')
    })

    it('select tests', () => {
        cy.get('.home-list').find('li').contains('select').should('be.visible')
        cy.get('.home-list').find('li').contains('select').click()

        cy.get('.action-select').select('bananas')
    })

    it('scrollIntoView tests', () => {
        cy.get('.home-list').find('li').contains('scrollIntoView').should('be.visible')
        cy.get('.home-list').find('li').contains('scrollIntoView').click()

        cy.get('#scroll-horizontal button').scrollIntoView()
            .should('be.visible')
    })

    it('scrollTo tests', () => {
        cy.get('.home-list').find('li').contains('scrollTo').should('be.visible')
        cy.get('.home-list').find('li').contains('scrollTo').click()

        cy.get('#scrollable-horizontal').scrollTo('right')
        cy.wait(3000)
        cy.get('#scrollable-horizontal').scrollTo('left')

    })

    it.only('trigger tests', () => {
        cy.get('.home-list').find('li').contains('trigger').should('be.visible')
        cy.get('.home-list').find('li').contains('trigger').click()

        cy.get('.trigger-input-range')
            .invoke('val', 25)
            .trigger('change')
            .get('input[type=range]').siblings('p')
            .should('have.text', '25')

    })
})
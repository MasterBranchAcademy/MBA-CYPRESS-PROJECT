describe('Traversal Tests', () => {

    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('children tests', () => {
        cy.get('.home-list').find('li').contains('children').should('be.visible')
        cy.get('.home-list').find('li').contains('children').click()

        cy.get('.traversal-breadcrumb')
            .children('.active')
            .should('contain', 'Data')

    })

    it('closest tests', () => {
        cy.get('.home-list').find('li').contains('closest').should('be.visible')
        cy.get('.home-list').find('li').contains('closest').click()

        cy.get('.traversal-badge')
            .closest('ul')
            .should('have.class', 'list-group')

    })

    it('eq tests', () => {
        cy.get('.home-list').find('li').contains('eq').should('be.visible')
        cy.get('.home-list').find('li').contains('eq').click()

        cy.get('.traversal-list>li')
            .eq(1).should('contain', 'siamese')

    })

    it('filter tests', () => {
        cy.get('.home-list').find('li').contains('filter').should('be.visible')
        cy.get('.home-list').find('li').contains('filter').click()

        cy.get('.traversal-nav>li')
            .filter('.active').should('contain', 'About')

    })

    it('find tests', () => {
        cy.get('.home-list').find('li').contains('find').should('be.visible')
        cy.get('.home-list').find('li').contains('find').click()

        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)

    })

    it('first tests', () => {
        cy.get('.home-list').find('li').contains('first').should('be.visible')
        cy.get('.home-list').find('li').contains('first').click()

        cy.get('.traversal-table td')
            .first().should('contain', '1')
    })

    it('last tests', () => {
        cy.get('.home-list').find('li').contains('last').should('be.visible')
        cy.get('.home-list').find('li').contains('last').click()

        cy.get('.traversal-buttons .btn')
            .last().should('contain', 'Submit')
    })

    it('next tests', () => {
        cy.get('.home-list').find('li').contains('next').should('be.visible')
        cy.get('.home-list').find('li').contains('next').click()

        cy.get('.traversal-ul')
            .contains('apples').next().should('contain', 'oranges')
    })

    it('not tests', () => {
        cy.get('.home-list').find('li').contains('not').should('be.visible')
        cy.get('.home-list').find('li').contains('not').click()

        cy.get('.traversal-disabled .btn')
            .not('[disabled]').should('contain', 'Button')
    })

    it('parent tests', () => {
        cy.get('.home-list').find('li').contains('parent').should('be.visible')
        cy.get('.home-list').find('li').contains('parent').click()

        cy.get('.traversal-mark')
            .parent().should('contain', 'Morbi leo risus')
    })

    it('prev tests', () => {
        cy.get('.home-list').find('li').contains('prev').should('be.visible')
        cy.get('.home-list').find('li').contains('prev').click()

        cy.get('.birds').find('.active')
            .prev().should('contain', 'Lorikeets')
    })

    it.only('siblings tests', () => {
        cy.get('.home-list').find('li').contains('siblings').should('be.visible')
        cy.get('.home-list').find('li').contains('siblings').click()

        cy.get('.traversal-pills .active')
            .siblings().should('have.length', 2)
    })
})
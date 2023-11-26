describe("Ders 1", () => {

    beforeEach(function () {

        cy.log("Logged in")
    })

    afterEach(function(){
        cy.log("Logged Out")
    })

    it.skip("Visits the kitchen Sink", () => {
        cy.visit("https://example.cypress.io/")
    })

    it("Visits MBA", () => {
        cy.visit("https://masterbranchacademy.com")
    })

})









class Viewport_Page{

    //is displayed
    static is_viewport_title_displayed(){
        return cy.get('.home-list')
        .find('[href="/commands/viewport"]').parent().contains('Viewport')
    }

    //click
    static click_viewport_title(){
       return cy.get('.home-list')
        .find('[href="/commands/viewport"]').parent().contains('Viewport')
    }

    //get
    static get_header_text(){
        return cy.get('h1')
    }
}

export default Viewport_Page;
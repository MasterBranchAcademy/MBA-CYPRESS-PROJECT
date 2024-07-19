import Viewport_Page from "../../pages/Viewport_Page";


const environment = Cypress.env(`environment`);
const domain = Cypress.env().test.baseUrl;

describe('Async await Tests', () => {
let user;
    beforeEach(function () {
        cy.fixture('userDatas/' + environment).then((user_data) => {
            user = user_data;
            cy.clearLocalStorage()
            cy.visit(domain)

            const title = user.general.title;
            cy.is_website_load_successfully(domain,title)
        })
        
    })

    it('The headers should be same', async () => {
        
            Viewport_Page.is_viewport_title_displayed().should('be.visible')
            Viewport_Page.click_viewport_title().click()

            const actual_header_text = await Viewport_Page.get_header_text().invoke('text')
            const expected_header_name = user.Viewport.header_name

            expect(expected_header_name).to.deep.equal(actual_header_text)
    })
    })

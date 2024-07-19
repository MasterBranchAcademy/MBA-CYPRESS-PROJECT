import Location_Page from "../../pages/Location_Page";
import {get_location_title_from_landing_page,
    get_location_title_from_location_page,
    get_subtitles_from_location_page,
    get_the_count_of_subtitles,
    get_the_hash_link
} from "../../support/Helpers/getters_location"

const environment = Cypress.env(`environment`);
const domain = Cypress.env().test.baseUrl;

describe('Promise Resolve Tests', () => {
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

    it('The titles should be same', () => {
        
        get_location_title_from_landing_page().then((titles_from_landing_page) => {
            Location_Page.is_location_title_displayed()
            Location_Page.click_location_title()
        get_location_title_from_location_page().then(titles_from_location_page => {
            expect(titles_from_landing_page).to.deep.equal(titles_from_location_page)

        })
    })
    })

    it('The list of subtitles should be same', () => {
        
        const expected_subtitles = user.location.subtitles;

            Location_Page.is_location_title_displayed()
            Location_Page.click_location_title()
            get_subtitles_from_location_page().then(titles_from_location_page => {
            expect(expected_subtitles).to.deep.equal(titles_from_location_page)

        })
    })

    it('The number of subtitles should be same', () => {
        
        const count_of_expected_subtitles = user.location.subtitles.length;

            Location_Page.is_location_title_displayed()
            Location_Page.click_location_title()
            get_the_count_of_subtitles().then(count_of_actual_subtitles => {
            expect(count_of_expected_subtitles).to.deep.equal(count_of_actual_subtitles)
        })
    })

    it('The hash link should be correct', () => {
        
        const expected_hash_link = user.location.links[0];

            Location_Page.is_location_title_displayed()
            Location_Page.click_location_title()
            get_the_hash_link().then(actual_hash_link => {
            expect(expected_hash_link).to.deep.equal(actual_hash_link)
        })
    })
})
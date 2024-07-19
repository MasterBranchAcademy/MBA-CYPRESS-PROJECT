import SELECTOR from "../constants";

export function get_location_title_from_landing_page() {
  return new Cypress.Promise((resolve) => {
    cy.get('.home-list')
      .find('[href="/commands/location"]')
      .first()
      .then((title) => {
        resolve(title.text());
      });
  });
}

export function get_location_title_from_location_page() {
  return new Cypress.Promise((resolve) => {
    cy.get('.container')
      .find('h1')
      .then((title) => {
        resolve(title.text());
      });
  });
}

export function get_subtitles_from_location_page() {
  return new Cypress.Promise((resolve) => {
    cy.get('#navigation')
      .find('h4')
      .find('a')
      .then((titles) => {

        cy.log(titles.text())
        const arrayList = titles.toArray().map((el) => el.innerText);
        resolve(arrayList);
      });
  });
}

export function get_the_count_of_subtitles() {
  return new Cypress.Promise((resolve) => {
    cy.get('#navigation')
      .find('h4')
      .find('a')
      .then((count) => {
        const listingCount = Cypress.$(count).length;
        resolve(listingCount);
      });
  });
}

export function get_the_hash_link() {
  return new Cypress.Promise((resolve) => {
    cy.get('#hash')
      .find('a')
      .then(($link) => {
        const href = $link.attr("href");
        resolve(href);
      });
  });
}
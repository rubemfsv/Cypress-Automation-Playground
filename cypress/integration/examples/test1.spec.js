/// <reference types="cypress" />

context('My First Test Suite', () => {
  it('should be my first test', () => {
    cy.visit(Cypress.env('url') + '/seleniumPractise/#/');

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    // selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get('.product').should('have.length', 5);
    cy.get('.product:visible').should('have.length', 4);
    // Parent child chaining
    cy.get('.products').find('.product').as('productLocator');

    cy.get('@productLocator').should('have.length', 4);

    cy.get(':nth-child(3) > .product-action > button').click();
    cy.get('@productLocator').eq(2).contains('ADD TO CART').click();

    cy.get('@productLocator').each(($el, index, $list) => {
      const product_title = $el.find('h4.product-name').text();
      if (product_title.includes('Cashews')) {
        $el.find('button').click();
      }
    });

    // assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART');

    // This is to print logs
    cy.get('.brand').then((logoElement) => {
      cy.log(logoElement.text());
    });
  });
});

/// <reference types="cypress" />

context('My Second Test Suite', () => {
  it('should be my second test', () => {
    cy.visit(Cypress.env('url') + '/seleniumPractise/#/');

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    // selenium get hit url in browser, cypress get acts like findElement of selenium

    // Parent child chaining
    cy.get('.products').find('.product').as('productLocator');

    cy.get('@productLocator').each(($el, index, $list) => {
      const product_title = $el.find('h4.product-name').text();
      if (product_title.includes('Cashews')) {
        $el.find('button').click();
      }
    });

    cy.get('.cart-icon > img').click();

    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();

  });
});

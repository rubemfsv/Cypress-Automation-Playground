/// <reference types="cypress" />

context('My First Test Suite', () => {
  it('should be my first test', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    // selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get('.product').should('have.length', 5);
    cy.get('.product:visible').should('have.length', 4);
    // Parent child chaining
    cy.get('.products').find('.product').should('have.length', 4);

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

    cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {
        const product_title = $el.find('h4.product-name').text();
        if (product_title.includes('Cashews')) {
          $el.find('button').click();
        }
      });

    cy.get('.brand').then((logoElement) => {
      cy.log(logoElement.text());
    });
  });
});

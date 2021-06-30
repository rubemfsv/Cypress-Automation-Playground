/// <reference types="cypress" />
import HomePage from '../pageObjects/HomePage';
import ProductsPage from '../pageObjects/ProductsPage';

import 'cypress-iframe';

context('My Nineth Test Suite Using Framework', () => {
  var test_data;
  before(() => {
    cy.fixture('example').then((data) => {
      test_data = data;
    });
  });

  // Uses of before hooks and fixtures
  it('should be my nineth test', () => {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();

    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    homePage.getEditBox().type(test_data.name);
    homePage.getGender().select(test_data.gender);

    // Verifies if the name typed is showed in the field
    homePage.getTwoWayDataBinding().should('have.value', test_data.name);

    // Verifies min length
    homePage.getEditBox().should('have.attr', 'minlength', '2');

    // Verifies if inline radio is disabled
    homePage.getEntrepreneur().should('be.disabled');

    // Pauses running for debug
    // cy.pause();

    Cypress.config('defaultCommandTimeout', 8000);

    // Clicks on the shop link
    homePage.getShopTab().click();

    // Checks the card titles and add to the cart using the cypress command that is on support commands
    test_data.productName.forEach((element) => {
      productsPage.selectProduct(element);
    });
    productsPage.checkoutButton().click();

    cy.contains('Checkout').click();
    cy.get('#country').type('India');

    cy.get('.suggestions > ul > li > a').click();
    cy.get('.checkbox').click();
    cy.get('input[type="submit"]').click();

    cy.get('.alert').then((element) => {
      const current_text = element.text();

      expect(current_text.includes('Success')).to.be.true;
    });
  });
});

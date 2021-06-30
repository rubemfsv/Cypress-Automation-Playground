/// <reference types="cypress" />

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
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get('input[name="name"]:nth-child(2)').type(test_data.name);
    cy.get('select').select(test_data.gender);

    // Verifies if the name typed is showed in the field
    cy.get(':nth-child(4) > .ng-untouched').should(
      'have.value',
      test_data.name
    );

    // Verifies min length
    cy.get('input[name="name"]:nth-child(2)').should(
      'have.attr',
      'minlength',
      '2'
    );

    // Verifies if inline radio is disabled
    cy.get('#inlineRadio3').should('be.disabled');

    // Clicks on the shop link
    cy.get(':nth-child(2) > .nav-link').click();

    // Checks the card titles and add the one with Blackberry to the cart using the cypress command that is on support commands
    cy.selectProduct('Blackberry');
  });
});

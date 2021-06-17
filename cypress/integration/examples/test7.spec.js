/// <reference types="cypress" />

context('My Seventh Test Suite', () => {
  it('should be my seventh test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Handling child window
    cy.get('#opentab').then((el) => {
      const url = el.prop('href');
      cy.visit(url);
    });
  });
});

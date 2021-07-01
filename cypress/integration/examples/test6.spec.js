/// <reference types="cypress" />

context('My Sixth Test Suite', () => {
  it('should be my sixth test', () => {
    cy.visit(Cypress.env('url') + '/AutomationPractice/');

    // Handling Mouse Hover Pop ups
    cy.get('div.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
  });
});

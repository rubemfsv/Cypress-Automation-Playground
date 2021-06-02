/// <reference types="cypress" />

context('My Sixth Test Suite', () => {
  it('should be my sixth test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Handling Web Tables With Cypress Usinh Each Command
    cy.get('div.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
  });
});

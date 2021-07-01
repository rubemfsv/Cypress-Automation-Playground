/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

context('My Eighth Test Suite', () => {
  it('should be my eighth test', () => {
    cy.visit(Cypress.env('url') + '/AutomationPractice/');

    // Handle iFrame loading frame
    cy.frameLoaded('#courses-iframe');

    // Handle iFrame by clicking in link inside iFrame
    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);
  });
});

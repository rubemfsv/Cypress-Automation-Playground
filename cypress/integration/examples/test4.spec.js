/// <reference types="cypress" />

context('My Fourth Test Suite', () => {
  it('should be my fourth test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Handle alerts
    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();

    // window:alert
    cy.on('window:alert', (alertMessage) => {
      // Mocha
      expect(alertMessage).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });

    // window:confirm
    cy.on('window:confirm', (confirmMessage) => {
      // Mocha
      expect(confirmMessage).to.equal(
        'Hello , Are you sure you want to confirm?'
      );
    });

    // Open tab in the same page using the jQuerry prop removeAttr
    cy.get('#opentab').invoke('removeAttr', 'target').click();

    cy.url().should('include', 'https://www.rahulshettyacademy.com/#/index')

    cy.go('back');
  });
});

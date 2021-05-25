/// <reference types="cypress" />

context('My Third Test Suite', () => {
  it('should be my third test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Checkbox
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    // Static Dropdown
    cy.get('select').select('option2').should('have.value', 'option2');

    // Dinamic Dropdown
    cy.get('#autocomplete').type('br');

    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'Brazil') {
        $el.click();
      }
    });

    cy.get('#autocomplete').should('have.value', 'Brazil');

    // Assertions for invisible elements
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    // Radio button
    cy.get('[value="radio2"]').check().should('be.checked');
  });
});

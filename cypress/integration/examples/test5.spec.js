/// <reference types="cypress" />

context('My Fifth Test Suite', () => {
  it('should be my fifth test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const textValue = $el.text();
      if (textValue.includes('Python')) {
        cy.get('tr td:nth-child(2)')
          .eq(index)
          .next()
          .then((price) => {
            const priceValue = price.text();

            expect(priceValue).to.equal('25');
          });
      }
    });
  });
});

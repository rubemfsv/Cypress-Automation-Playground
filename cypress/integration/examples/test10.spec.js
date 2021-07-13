/// <reference types="cypress" />

context('My Tenth Test Suite', () => {
  it('should be my tenth test', () => {
    cy.visit(Cypress.env('url') + '/angularAppdemo/');

    cy.intercept(
      {
        method: 'GET',
        url: Cypress.env('url') + '/Library/GetBook.php?AuthorName=shetty',
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: 'O Código da Vinci',
            isbn: 'RSU',
            aisle: '2301',
          },
        ],
      }
    ).as('bookretrievals');

    cy.get('button[class="btn btn-primary"]').click();
    cy.wait('@bookretrievals');

    cy.get('p').should('have.text', 'Oops only 1 Book available');
  });
});

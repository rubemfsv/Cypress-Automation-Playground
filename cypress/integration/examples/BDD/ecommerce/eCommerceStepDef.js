/// <reference types="cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../support/pageObjects/HomePage';
import ProductsPage from '../../../../support/pageObjects/ProductsPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();
let test_data;
let sum = 0;
let name;

beforeEach(() => {
  cy.fixture('example').then((data) => {
    test_data = data;
  });
});

Given('I open ecommerce page', () => {
  cy.visit(Cypress.env('url') + '/angularpractice/');
});

When('I add items to cart', function () {
  // Clicks on the shop link
  homePage.getShopTab().click();

  // Checks the card titles and add to the cart using the cypress command that is on support commands
  test_data.productName.forEach((element) => {
    productsPage.selectProduct(element);
  });
  productsPage.checkoutButton().click();
});

And('validate the total prices', () => {
  // Get the sum of two values
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    var current_text = $el.text();
    var res = current_text.split(' ');
    res = res[1].trim();

    sum = Number(sum) + Number(res);
  });

  // Verify the sum of two values
  cy.get('h3 strong').then((element) => {
    var current_text = element.text();
    var res = current_text.split(' ');
    var total = Number(res[1].trim());

    expect(total).to.equal(sum);
  });
});
Then('select the country submit and verify Thank you', () => {
  cy.contains('Checkout').click();
  cy.get('#country').type('India');

  cy.get('.suggestions > ul > li > a').click();
  cy.get('.checkbox').click();
  cy.get('input[type="submit"]').click();

  cy.get('.alert').then((element) => {
    var current_text = element.text();

    expect(current_text.includes('Success')).to.be.true;
  });
});

When('I fill the form details', (dataTable) => {
  name = dataTable.rawTable[1][0];
  homePage.getEditBox().type(name);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});

Then('validate the form behavior', () => {
  // Verifies if the name typed is showed in the field
  homePage.getTwoWayDataBinding().should('have.value', test_data.name);

  // Verifies min length
  homePage.getEditBox().should('have.attr', 'minlength', '2');

  // Verifies if inline radio is disabled
  homePage.getEntrepreneur().should('be.disabled');

  // Pauses running for debug
  // cy.pause();

  Cypress.config('defaultCommandTimeout', 8000);
});

And('select the shop page', () => {
  // Clicks on the shop link
  homePage.getShopTab().click();
});

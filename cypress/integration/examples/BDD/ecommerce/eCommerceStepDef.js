import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../support/pageObjects/HomePage';
import ProductsPage from '../../../../support/pageObjects/ProductsPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();

Given('I open ECommerce Page', () => {
  cy.visit(Cypress.env('url') + '/angularpractice/');
});

When('I add items to cart', function () {
  // Clicks on the shop link
  homePage.getShopTab().click();

  // Checks the card titles and add to the cart using the cypress command that is on support commands
  this.test_data.productName.forEach((element) => {
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

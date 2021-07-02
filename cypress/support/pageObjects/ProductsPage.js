class ProductsPage {
  selectProduct(element) {
    cy.selectProduct(element);
  }
  checkoutButton() {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
  }
}

export default ProductsPage;

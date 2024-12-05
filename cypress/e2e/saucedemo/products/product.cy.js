import loginPage from "../../../support/pages/login.page.js";
import inventoryPage from "../../../support/pages/inventory.page.js";
const login = require('../../../fixtures/login.json');

describe('Products Suite', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('include', 'saucedemo');
    loginPage.inputUsername(login.username);
    loginPage.inputPassword(login.password);
    loginPage.clickLoginButton();
  })

  it('Verify System Display Add to Cart Button', () => {
    inventoryPage.verfiyAddToCart();
  });

  it('Verify Success Add to Cart a Product', () => {
    inventoryPage.clickAddToCart();
    inventoryPage.verifyCartBadge('1');
  });

  it('Verify Display Remove Button after Add to Cart a Product', () => {
    inventoryPage.clickAddToCart();
    inventoryPage.verifyRemoveButton();
  });

  afterEach(() => {
    cy.clearCookies();
  })
  
});
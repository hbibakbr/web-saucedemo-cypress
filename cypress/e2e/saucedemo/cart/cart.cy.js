import loginPage from "../../../support/pages/login.page.js";
import inventoryPage from "../../../support/pages/inventory.page.js";
import cartPage from "../../../support/pages/cart.page.js";
const login = require('../../../fixtures/login.json');

describe('Cart Suite', () => {

  beforeEach(() => {
    cy.visit('/');
    loginPage.inputUsername(login.username);
    loginPage.inputPassword(login.password);
    loginPage.clickLoginButton();
  })

  it('Verify Success Display Cart Page with Click on Cart Icon ', () => {
    inventoryPage.clickCartIcon();
    cartPage.verifyCartTitleIsDisplayed();
  });

  it('Verify Success Display Product List with Click on Continue Shopping Button', () => {
    inventoryPage.clickAddToCart();
    inventoryPage.clickCartIcon();
    cartPage.verifyProductListIsDisplayed();
  });

  it('Verify Success Remove a Product after Add to Cart on Cart Page', () => {
    inventoryPage.clickAddToCart();
    inventoryPage.clickCartIcon();
    cartPage.clickRemoveButton();
    cartPage.verifyProductListIsNotDisplayed();
  });

  it('Verify Success Remove a Product after Add to Cart on Product List Page', () => {
    inventoryPage.clickAddToCart();
    inventoryPage.clickRemove();
    inventoryPage.verfiyAddToCart();
  });

  afterEach(() => {
    cy.clearCookies();
  })
  
});
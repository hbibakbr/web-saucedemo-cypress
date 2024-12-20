import loginPage from "../../../support/pages/login.page.js";
import inventoryPage from "../../../support/pages/inventory.page.js";
import menuPage from "../../../support/pages/menu.page.js";
const login = require('../../../fixtures/login.json');

describe('Authentication Suites', () => {

  describe('Positive Case Login and Logout', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.url().should('include', 'saucedemo');
    })
  
    it('Verify Success to Login with Valid Credentials', () => {
      loginPage.inputUsername(login.username);
      loginPage.inputPassword(login.password);
      loginPage.clickLoginButton();
      inventoryPage.verifyInventoryUrl();
      inventoryPage.verifyInventoryTitle();
      inventoryPage.verifyBurgerMenuIsDisplayed();
    });

    it('Verify Success to Logout', () => {
      cy.login(login.username, login.password);
      loginPage.clickLoginButton();
      menuPage.clickOpenMenu();
      menuPage.clickLogoutMenu();
      loginPage.verifyLoginUrl();
    });
  
  });
  
  describe('Negative Case Login', () => {

    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Verify Failed to Login with Username Field Empty', () => {
      loginPage.inputPassword(login.password);
      loginPage.clickLoginButton();
      loginPage.errorMessageIsDisplayed(login.message.msg_empty_username);
    });
  
    it('Verify Failed to Login with Password Field Empty', () => {
      loginPage.inputUsername(login.username);
      loginPage.clickLoginButton();
      loginPage.errorMessageIsDisplayed(login.message.msg_empty_password);
    });

    it('Verify Failed to Login with All Field Empty', () => {
      loginPage.clickLoginButton();
      loginPage.errorMessageIsDisplayed(login.message.msg_empty_username);
    });
  
    it('Verify Failed to Login with Lock Out User Account', () => {
      loginPage.inputUsername(login.locked_out_user);
      loginPage.inputPassword(login.password);
      loginPage.clickLoginButton();
      loginPage.errorMessageIsDisplayed(login.message.msg_locked_out);
    });
  
  });
  
})
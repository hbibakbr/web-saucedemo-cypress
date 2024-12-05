class FirstCheckoutPage {
    firstCheckoutPageUrl = 'https://www.saucedemo.com/checkout-step-one.html';
    firstCheckoutPageTitle = 'span[class=title]';
    firstName = 'input[id=first-name]';
    lastName = 'input[id=last-name]';
    postalCode = 'input[id=postal-code]';
    btnCancel = 'button[id=cancel]';
    btnContinue = 'input[id=continue]';
    msgError = 'h3[data-test=error]';

    inputFirstName (firstname) {
        cy.get(this.firstName).type(firstname);
    }

    inputLastName (lastname) {
        cy.get(this.lastName).type(lastname);
    }

    inputPostalCode (postal) {
        cy.get(this.postalCode).type(postal);
    }

    clickContinue () {
        cy.get(this.btnContinue).click();
    }

    clickCancel () {
        cy.get(this.btnCancel).click();
    }

    verifyFirstCheckoutUrl () {
        cy.url().should('equal', this.firstCheckoutPageUrl);
    }

    verifyFirstCheckoutPageTitle () {
        cy.get(this.firstCheckoutPageTitle).should('be.visible');
    }

    verifyErrorMessageIsDisplayed (msgError) {
        cy.get(this.msgError).should('have.text', msgError);
    }
}
export default new FirstCheckoutPage();
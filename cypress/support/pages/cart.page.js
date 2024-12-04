class CartPage {
    cartPageUrl = 'https://www.saucedemo.com/cart.html'
    cartTitle = 'span[class=title]';
    productItem = 'div[data-test=inventory-item]';
    itemPrice = 'div[data-test="inventory-item-price"]';
    btnRemove = 'button[id="remove-sauce-labs-backpack"]';
    btnContinueShopping = 'button[id=continue-shopping]';
    btnCheckout = 'button[id=checkout]';

    clickContinueShopping () {
        cy.get(this.btnContinueShopping).click();
    }

    clickCheckout () {
        cy.get(this.btnCheckout).click();
    }

    clickRemoveButton () {
        cy.get(this.btnRemove).click();
    }

    verifyCartUrl () {
        cy.url().should('equal', this.cartPageUrl);
    }

    verifyCartTitleIsDisplayed () {
        cy.get(this.cartTitle).should('have.text', 'Your Cart');
    }

    verifyProductListIsDisplayed () {
        cy.get(this.productItem).should('exist');
    }

    verifyProductListIsNotDisplayed () {
        cy.get(this.productItem).should('not.exist');
    }
}
export default new CartPage();
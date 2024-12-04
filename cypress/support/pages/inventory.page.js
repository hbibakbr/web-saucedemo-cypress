class InventoryPage {
    inventoryPageUrl = 'https://www.saucedemo.com/inventory.html';
    inventoryTitle = 'span[class=title]';
    burgerMenu = 'button[id=react-burger-menu-btn]';
    btnAddToCart = 'button[id=add-to-cart-sauce-labs-backpack]';
    btnRemove = 'button[id=remove-sauce-labs-backpack]'; 
    productItem = 'a[id=item_4_title_link]';
    cart = 'a[data-test=shopping-cart-link]';
    cartBadge = 'span[data-test=shopping-cart-badge]';
    sortDropDown = 'select[data-test="product-sort-container"]';

    clickBurgerMenu () {
        cy.get(this.burgerMenu).click();
    }

    clickAddToCart () {
        cy.get(this.btnAddToCart).click();
    }

    clickRemove () {
        cy.get(this.btnRemove).click();
    }

    clickProductItem () {
        cy.get(this.productItem).click();
    }

    clickCartIcon () {
        cy.get(this.cart).click();
    }

    verifyBurgerMenuIsDisplayed () {
        cy.get(this.burgerMenu).should('be.visible');
    }

    verifyInventoryUrl () {
        cy.url().should('equal', this.inventoryPageUrl);
    }

    verifyInventoryTitle () {
        cy.get(this.inventoryTitle).should('exist', 'Products');
    }

    verfiyAddToCart () {
        cy.get(this.btnAddToCart).should('exist', 'Add to cart');
    }

    verifyRemoveButton () {
        cy.get(this.btnRemove).should('exist');
    }

    verifyCartBadge (total) {
        cy.get(this.cartBadge).should('have.text', total);
    }

}

export default new InventoryPage();
class MenuPage {
    openMenu = 'button[id=react-burger-menu-btn]';
    closeMenu = 'button[id=react-burger-cross-btn]';
    allItemsMenu = 'a[data-test=inventory-sidebar-link]';
    aboutMenu = 'a[data-test=about-sidebar-link]';
    logoutMenu = 'a[data-test=logout-sidebar-link]';
    resetAppStateMenu = 'a[data-test=reset-sidebar-link]';

    clickOpenMenu () {
        cy.get(this.openMenu).click();
    }

    clickCloseMenu () {
        cy.get(this.closeMenu).click();
    }

    clickAllItemsMenu () {
        cy.get(this.allItemsMenu).click();
    }

    clickAboutMenu () {
        cy.get(this.aboutMenu).click();
    }

    clickLogoutMenu () {
        cy.get(this.logoutMenu).click();
    }

    clickResetAppState () {
        cy.get(this.resetAppStateMenu).click();
    }
}
export default new MenuPage();
class LoginPage {
    username = 'input[id=user-name]';
    password = 'input[id=password]';
    btnLogin = 'input[id=login-button]';
    msgError = 'h3[data-test=error]';
    loginPageUrl = 'https://www.saucedemo.com/'

    inputUsername () {
        cy.get(this.username);
    }

    inputPassword () {
        cy.get(this.password);
    }

    clickLoginButton () {
        cy.get(this.btnLogin).click();
    }

    errorMessageIsDisplayed () {
        cy.get(this.msgError);
    }


}

export default new LoginPage();
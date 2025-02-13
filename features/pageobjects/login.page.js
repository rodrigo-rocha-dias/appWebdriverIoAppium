const { $ } = require('@wdio/globals');
const Page = require('./page');
const loginElements = require('../elements/login.elements');

class LoginPage extends Page {
    
    async login(username, password) {
        await $(loginElements.inputUsername).setValue(username);
        await $(loginElements.inputPassword).setValue(password);
        await $(loginElements.btnSubmit).click();
    }

    async getHeaderText() {
        return await $(loginElements.header).getText();
    }
}

module.exports = new LoginPage();

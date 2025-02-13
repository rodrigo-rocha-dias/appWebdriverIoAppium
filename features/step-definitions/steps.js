const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

Given('o usuario esta na tela de login', async () => {
    const loginField = await $(require('../elements/login.elements').inputUsername);
    await loginField.waitForDisplayed({ timeout: 30000 });
    await expect(loginField).toBeDisplayed();
})

When('que faca login com username {string} e senha {string}', async (username, password) => {
    await LoginPage.login(username, password);
})

Then('devera visualizar header da tela {string}', async (headerText) => {
    const actualHeaderText = await LoginPage.getHeaderText();
    await expect(actualHeaderText).toBe(headerText);
})

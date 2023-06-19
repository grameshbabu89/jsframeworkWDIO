const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const expectChai = require('chai').expect;


Given(/^I launch the application$/, async () => {
    await LoginPage.open();
    await browser.maximizeWindow();

});
When(/^I click sign in page$/, async () => {
    await LoginPage.clickSignIn.click();
    await LoginPage.waitUntilTextContain(LoginPage.pageHeading, 'ACCOUNT LOGIN', 'Login page was NOT displayed.');

});
When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password);
    await LoginPage.waitUntilTextContain(LoginPage.pageHeading, 'MY ACCOUNT', 'Sign in was NOT successful.');

});
Then(/^I click continue to new registration$/, async () => {
    await LoginPage.clickContinue.click();

});




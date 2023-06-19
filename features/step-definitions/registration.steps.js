const { Given, When, Then } = require('@wdio/cucumber-framework');
const RegistrationPage = require('../pageobjects/registration.page');
const MyAccountPage = require('../pageobjects/myAccount.page');
const expectChai = require('chai').expect;

Then(/^I am on the registration page$/, async () => {
    await RegistrationPage.waitUntilTextContain(RegistrationPage.pageHeading, 'CREATE ACCOUNT', 'Registration page was NOT displayed.');
});

Then(/^I enter (.*), (.*), (.*), (.*) and other mandatory fields then submit$/, async (email, firstName, loginName, password) => {
    await RegistrationPage.newCustomerRegistration(email, firstName, loginName, password);
    await RegistrationPage.waitUntilTextContain(RegistrationPage.pageHeading, 'YOUR ACCOUNT HAS BEEN CREATED!', 'Registration was NOT successful.');
    await RegistrationPage.clickContinue.click();
});



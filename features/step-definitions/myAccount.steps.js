const { Given, When, Then } = require('@wdio/cucumber-framework');
const MyAccountPage = require('../pageobjects/myAccount.page');
const expectChai = require('chai').expect;

Then(/^I validate the (.*) is displayed in the account section$/, async (fn) => {
    const fNameXp = await MyAccountPage.LogInUser;
    const fNameText = await fNameXp.getText();
    if(fNameText != fn) {
        console.log("First Name is mismatchd with the logged in user in the accoount section");
        expectChai(true).to.equal(false);
    }
});
Then(/^I logout the application$/, async () => {
    await MyAccountPage.logout.click();
    await MyAccountPage.waitUntilTextContain(MyAccountPage.pageHeading, 'ACCOUNT LOGOUT', 'You are NOT logging off!!!');
    await MyAccountPage.clickContinue.click(); 

});
Then(/^I close the browser$/, async () => {
    browser.closeWindow();

});





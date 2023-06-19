const { Given, When, Then } = require('@wdio/cucumber-framework');
const SelectProductPage = require('../pageobjects/selectProduct.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const expectChai = require('chai').expect;

Then(/^I verify the products in the payment page$/, async () => {
    const cartList = await SelectProductPage.cartList();
	await CheckOutPage.verifyTheItemsInThePaymentPage(cartList);
    await browser.pause(2000);

});









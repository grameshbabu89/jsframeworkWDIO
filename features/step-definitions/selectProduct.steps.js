const { Given, When, Then } = require('@wdio/cucumber-framework');
const SelectProductPage = require('../pageobjects/selectProduct.page');
const expectChai = require('chai').expect;

When(/^I mouseover on the (.*) and select (.*)$/, async (menu, product) => {
	await SelectProductPage.chooseProduct(menu, product);
    await browser.pause(2000);
});


Then(/^I select (\d) product and add to the Cart$/, async (productNum) => {
	await SelectProductPage.addToCart(productNum);
    await browser.pause(2000);
});

Then(/^I proceed to checkout$/, async () => {
    await SelectProductPage.clickCheckout();
       
   });




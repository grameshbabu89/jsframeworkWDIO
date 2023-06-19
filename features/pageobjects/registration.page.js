const Page = require('./page');


class RegistrationPage extends Page {
    
    get enterFirstName () {
        return $('#AccountFrm_firstname');
    }
    get enterLastName () {
        return $('#AccountFrm_lastname');
    }
    get enterEmail () {
        return $('#AccountFrm_email');
    }
    get enterAddress () {
        return $('#AccountFrm_address_1');
    }
    get enterCity () {
        return $('#AccountFrm_city');
    }
    get selectState () {
        return $('#AccountFrm_zone_id');
    }
    get enterPostcode () {
        return $('#AccountFrm_postcode');
    }
    get selectCountry () {
        return $('#AccountFrm_country_id');
    }
    get enterLoginName () {
        return $('#AccountFrm_loginname');
    }
    get enterPassword () {
        return $('#AccountFrm_password');
    }
    get enterConfPassword () {
        return $('#AccountFrm_confirm');
    }
    get subscribeYes () {
        return $('#AccountFrm_newsletter1');
    }
    get subscribeNo () {
        return $('#AccountFrm_newsletter0');
    }
    get selectTermsCondition () {
        return $('#AccountFrm_agree');
    }
    get clickRegister () {
        return $('#submitAccount');
    }
    get regError () {
        return $('[data-dismiss="alert"]');
    }
   
    async newCustomerRegistration(email, firstName, loginName, password) {
       
        await this.enterFirstName.setValue(firstName);
        await this.enterLastName.setValue('LN');
        await this.enterEmail.setValue(email);
        await this.enterAddress.setValue('Laporte Avenue, Gandhinagar');
        await this.enterCity.setValue('Chennai');
        await this.enterPostcode.setValue('70054');
        await this.selectCountry.selectByVisibleText('India');
        await browser.pause(2000);
        await this.selectState.selectByVisibleText('Tamil Nadu');
        await this.enterLoginName.setValue(loginName);
        await this.enterPassword.setValue(password);
        await this.enterConfPassword.setValue(password);
        await this.subscribeNo.click();
        await this.selectTermsCondition.click();
        await this.clickContinue.click();
        await browser.pause(2000);
       
    }

}

module.exports = new RegistrationPage();

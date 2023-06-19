const Page = require('./page');

class LoginPage extends Page {

    get clickSignIn() {
        return $('=Login or register');
    }
    // To register a new customer
    // get continueReg() {
    //     return $('aria/Continue');
    // }
   
    // Already registered customer
    get inputUsername() {
        return $('#loginFrm_loginname');
    }
    get inputPassword() {
        return $('#loginFrm_password');
    }

    get btnSubmit() {
        return $('button[title="Login"]');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(3000);
       

    }
}

module.exports = new LoginPage();

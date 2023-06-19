
module.exports = class Page {
    
    get pageHeading () {
        return  $('.heading1 span');
    }
    get clickContinue() {
        return $('aria/Continue');
    }
    open() {
        return browser.url(`https://automationteststore.com/`);
    }
    async waitUntil(element, eleText, errorMsg) {
        await element.waitUntil(async function () {
            return (await this.getText()) === eleText
        }, {
            timeout: 10000,
            timeoutMsg: errorMsg
        });
    }
    async waitUntilTextContain(element, eleText, errorMsg) {
        await element.waitUntil(async function () {
            return (await this.getText()).includes(eleText)
        }, {
            timeout: 10000,
            timeoutMsg: errorMsg
        });
    }
}


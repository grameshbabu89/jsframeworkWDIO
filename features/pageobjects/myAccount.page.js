const Page = require('./page');


class MyAccountPage extends Page {
    
    get LogInUser () {
        return $('.heading1 span:nth-child(2)')
    }
    get logout () {
        return $('//a[text()="Logoff"]')
     } 
}

module.exports = new MyAccountPage();

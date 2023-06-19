const Page = require('./page');
const expectChai = require('chai').expect;

const productTitleList = [];
class SelectProductPage extends Page {
    
    get getProMenus () {
        return $$('//*[@class="subnav"]/ul[1]/li/a')     
    }
    get allProducts () {
        return $$('//div[@class="pricetag jumbotron"]/a')     
    }
    get menuCheckout () {
        return $(".//ul[@id='main_menu_top']//li[@data-id='menu_checkout']/a")     
    }
    get ATCButton () {
        return $('.productpagecart a')     
    }  
    get logout () {
        return $('//a[text()="Logoff"]')
     } 

    async chooseProduct(menu, product) {
        const menuCount = await this.getProMenus.length;
    
        for (let i = 1; i < menuCount; i++) {
            const menuX = await this.getProMenus[i];
            const mTxt = await menuX.getText();
            const menuTxt =await mTxt.trim();
           
            if(menu == menuTxt){
                await menuX.moveTo();
                await browser.pause(2000);
                const prodX = await $$("(//*[@class='subnav']/ul[1]/li/a)["+(i+1)+"]/../div//a");
                const prodCount =await prodX.length;

                for (let j = 0; j < prodCount; j++) {
                    const pTxt = await prodX[j].getText();
                    const prodTxt =await pTxt.trim();

                    if(product == prodTxt){
                        await prodX[j].click()
                        await browser.pause(2000);  
                        break;    
                    }   
                }
            }  
        }
    
    }
    async addToCart(productNum) {
        const proCount = await this.allProducts.length;
        if(proCount < 1){
            console.log("No items are displayed for the particular product");
            expectChai(false).to.equal(true); 
        } else if(proCount < productNum){
            console.log("The cart has only", proCount, "items, but you have selected ",productNum );
            expectChai(false).to.equal(true); 
        } else{
                const titleTxt = await this.getTitle(productNum);
                productTitleList.push(titleTxt);
                const allProducts = await this.allProducts;
                const addToCart = await allProducts[productNum-1];
                await addToCart.click();
                await browser.pause(2000);
                const isExisting = await this.ATCButton.isExisting();
                if (isExisting) await this.ATCButton.click(); 
                await browser.pause(2000);     
        }      
    }

    async clickCheckout(){
        await this.menuCheckout.click();    
    }
    
    async getTitle(productNum){
        const ele = $("(//div[@class='pricetag jumbotron']/a)["+productNum+"]/../../preceding-sibling::div[1]//a"); 
        return ele.getText();
    }
    async cartList(){
        return productTitleList;      
    }  
}

module.exports = new SelectProductPage();

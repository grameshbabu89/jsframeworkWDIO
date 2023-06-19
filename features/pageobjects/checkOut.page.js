const Page = require('./page');
const expectChai = require('chai').expect;

class CheckOutPage extends Page {
    get items () {
        return $$('.confirm_products tbody tr')     
    }
    get allProducts () {
        return $$('//div[@class="pricetag jumbotron"]/a')     
    }

    async verifyTheItemsInThePaymentPage(cartList) {
        const products = await this.items;
        const count = products.length;
        const itemsList= [];

        let flag = true;
        for (let i = 0; i < await count; i++) {
            const product = await products[i].$("td:nth-child(2) a");
            await product.scrollIntoView();
            const pText = await product.getText();
            const proText = await pText.toUpperCase();
            itemsList.push(proText);
            const status = await cartList.includes(proText);
            console.log("proText->", proText)
            if(!status){
                flag = false;
                console.log(proText,  "item was NOT added into the Cart");                
            }       
        }
        console.log("Items in the Cart page->", cartList);
        console.log("Items in the Payment page->", itemsList);
        expectChai(flag).to.equal(true);
    }     
}

module.exports = new CheckOutPage();

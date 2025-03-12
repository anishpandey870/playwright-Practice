const{test,expect} = require('@playwright/test');

class CartPage{

    constructor(page){
        this.page=page;
        this.waitLocator = page.locator("div li").first();
       this.placeOrder = page.locator("text=Checkout");
    }

    async productIsDisplayed(productName){
        await this.waitLocator.waitFor();
         const bool = await this.getProductLocator(productName).isVisible();
         expect(bool).toBeTruthy();
    }

    getProductLocator(productName){
    return this.page.locator("h3:has-text('"+productName+"')");
    }

    async Checkout(){
        await this.placeOrder.click();
    }

}
module.exports= {CartPage}; 
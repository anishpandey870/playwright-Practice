class DashboardPage {
  constructor(page) {
    this.page=page;
    this.product = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart = page.locator("[routerlink*='cart']");
  }

  async searchProductAddCart(productName) {
    const titl = await this.productsText.allTextContents();
    console.log(titl);

    const count = await this.product.count();

    for (let i = 0; i < count; i++) {
      if ( (await this.product.nth(i).locator("b").textContent()) === productName ) {
        //add to cart
        await this.product.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }

  async navigateToCart() {
    await this.cart.click();
  }
}

module.exports= {DashboardPage};

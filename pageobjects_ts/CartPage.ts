import { expect, Page, Locator } from "@playwright/test";

export class CartPage {
  page: Page;
  waitLocator: Locator;
  placeOrder: Locator;

  constructor(page: Page) {
    this.page = page;
    this.waitLocator = page.locator("div li").first();
    this.placeOrder = page.locator("text=Checkout");
  }

  async productIsDisplayed(productName: string) {
    await this.waitLocator.waitFor();
    const bool = await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();
  }

  getProductLocator(productName: string) {
    return this.page.locator("h3:has-text('" + productName + "')");
  }

  async Checkout() {
    await this.placeOrder.click();
  }
}
module.exports = { CartPage };

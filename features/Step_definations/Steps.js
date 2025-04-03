const { When, Then, Given } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const { expect } = require("@playwright/test");
const playwright = require("@playwright/test");

Given(
  "a login to shopNow application with {string} and {string}",
  { timeout: 100 * 1000 },
  async function (userName, password) {
    // Write code here that turns the phrase above into concrete actions

    const product = this.page.locator(".card-body");
    const loginPage = this.poManager.getLoginpage();
    await loginPage.goTo();
    await loginPage.validLogin(userName, password);
  }
);

When("Add {string} to Cart", async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});

Then("Verify {string} is displayed in the Cart", async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = this.poManager.getCartPage();
  await cartPage.productIsDisplayed(productName);
  await cartPage.Checkout();
});

When(
  "Enter {string} valid details and Place the Order",
  async function (userName) {
    // Write code here that turns the phrase above into concrete actions
    const fillDetailsPage = this.poManager.getDetailsPage();
    await fillDetailsPage.provideDetails("ind", " India");
    await fillDetailsPage.verifyEmailId(userName);
    this.orderId = await fillDetailsPage.submitDetails();
  }
);

Then("Verify order in present in the orderHistory", async function () {
  // Write code here that turns the phrase above into concrete actions
  const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(this.orderId);
  expect(
    this.orderId.includes(await ordersHistoryPage.getOrderId())
  ).toBeTruthy();
});

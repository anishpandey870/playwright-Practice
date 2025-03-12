const { test, expect } = require("@playwright/test");
const{customtest} =require('../utils/test-base');
const { POManager } = require("../pageobjects/POManager");
//Json -> string -> js object
const dataSet = JSON.parse(JSON.stringify(require("../utils/testData.json")));

for (const data of dataSet) {
  test.only(`@web ShopNow login for ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);
    const product = page.locator(".card-body");
    const loginPage = poManager.getLoginpage();
    await loginPage.goTo();
    await loginPage.validLogin(data.userName, data.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.productIsDisplayed(data.productName);
    await cartPage.Checkout();

    const fillDetailsPage = poManager.getDetailsPage();
    await fillDetailsPage.provideDetails("ind", " India");
    await fillDetailsPage.verifyEmailId(data.userName);
    const orderId = await fillDetailsPage.submitDetails();
    console.log(orderId);

    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });
}

//pass test data as fixture by extend test annotation
customtest(`ShopNow login`, async ({ page,testDataForOrder }) => {
  const poManager = new POManager(page);
  //const product = page.locator(".card-body");
  const loginPage = poManager.getLoginpage();
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.userName, testDataForOrder.password);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.productIsDisplayed(testDataForOrder.productName);
  await cartPage.Checkout();
})

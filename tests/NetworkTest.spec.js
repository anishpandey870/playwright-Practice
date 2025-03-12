const { test, expect, request } = require("@playwright/test");
const { ApiUtils } = require("../utils/ApiUtils");

const loginPayload = {
  userEmail: "pandeyanish2001@gmail.com",
  userPassword: "Pandey@123",
};
const orderPayload = {
  orders: [{ country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd" }],
};
const fakePayLoadOrders = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
  //api login
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
});

test("Place order ", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
      route.fulfill({
        response,
        body,
      });
      //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    }
  );

  await page.locator("button[routerlink*='myorders']").click();

  //await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

  console.log(await page.locator(".mt-4").textContent());
});

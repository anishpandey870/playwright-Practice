const { test, expect, request } = require("@playwright/test");
const { ApiUtils } = require("../utils/ApiUtils");

const loginPayload = {
  userEmail: "pandeyanish2001@gmail.com",
  userPassword: "Pandey@123",
};
const orderPayload = {
  orders: [{ country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd" }],
};
let response;
test.beforeAll(async () => {
  //api login
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
  /*const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
    data: loginPayload
}) //200
expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson = await loginResponse.json();
token=loginResponseJson.token;
console.log(token) */

  /*const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
{
    data: orderPayload,
    headers:{
        'authorization': token,
        'content-type' : 'application/json'
    },
})
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson);
orderId = orderResponseJson.orders[0];
*/
});

//create order is success

test("Place order ", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  await page.pause();
  for (let i = 0; i < (await rows.count()); i++) {
    const rowOerderId = await rows.nth(i).locator("th").textContent();
    if (response.orderId.includes(rowOerderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdDetails = await page.locator(".col-text").textContent();
  await expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});

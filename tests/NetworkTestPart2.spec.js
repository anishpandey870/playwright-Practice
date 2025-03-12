const { test,expect } = require("@playwright/test");

test("@QA Security test request intercept", async ({page}) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("pandeyanish2001@gmail.com");
  await page.locator("#userPassword").fill("Pandey@123");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  await page.locator("button[routerlink*='myorders']").click();
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6",
      })
  );
  await page.locator("button:has-text('View')").first().click();
  await expect(page.getByText("You are not authorize to view this order")).toHaveText("You are not authorize to view this order");


});

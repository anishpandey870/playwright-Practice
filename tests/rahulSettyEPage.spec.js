const { test, expect } = require("@playwright/test");

test(" @web ShopNow", async ({ page }) => {
  const productName = "ZARA COAT 3";
  const email = "pandeyanish2001@gmail.com";
  const product = page.locator(".card-body");
  // --> const userName = page.locator("#userEmail");
  const userName = page.getByPlaceholder("email@example.com");
  //  const signIn = page.locator("#userPassword");
  //const cardTitle =  page.locator(".card-body b");
  await page.goto("https://rahulshettyacademy.com/client");
  console.log(await page.title());

  //css
  await userName.fill(email);
  // --> await page.locator("#userPassword").fill("Pandey@123");
  await page.getByPlaceholder("enter your passsword").fill("Pandey@123");
  // --> await page.locator("#login").click();
  await page.getByRole("Button", { name: "Login" }).click();
  //console.log(await cardTitle.first().textContent());
  // console.log(await page.locator(".card-body b").nth(1).textContent());
  //const allTitl = await cardTitle.allTextContents();
  await page.waitForLoadState("networkidle");
  const titl = await page.locator(".card-body b").allTextContents();
  console.log(titl);

  /* const count= await product.count();

  for(let i=0;i<count;i++){
    if(await product.nth(i).locator("b").textContent() === productName){
        //add to cart
       await product.nth(i).locator("text= Add To Cart").click();
       break;
    }
  }
    */
  await page
    .locator(".card-body")
    .filter({ hasText: "ZARA COAT 3" })
    .getByRole("button", { name: "Add to Cart" })
    .click();

  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();

  await page.locator("[placeholder='Select Country']").pressSequentially("ind");
  const dropdown = page.locator(".ta-results.list-group.ng-star-inserted");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; i++) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
  const cardNumber = await page.locator("input[value*='4542 9931 9292']");
  await cardNumber.clear();
  await cardNumber.fill("5276534765276");
  await page.locator("input[class='input txt']").first().fill("666");
  const dateDropDown = page.locator(".input.ddl");
  await dateDropDown.first().selectOption("03");
  await dateDropDown.nth(1).selectOption("11");

  await page.locator("input[class='input txt']").nth(1).fill("Anish kumar");
  //.field.small input
  await page.locator(".field.small").locator("input").nth(1).fill("rahulsetty");
  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. "
  );
  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderId);
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");
  for (let i = 0; i < (await rows.count()); i++) {
    const rowOerderId = await rows.nth(i).locator("th").textContent();
    console.log(rowOerderId);
    if (orderId.includes(rowOerderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  await expect(orderId.includes(orderIdDetails)).toBeTruthy();
  await page.pause();
});

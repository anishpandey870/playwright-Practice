const { test, expect } = require("@playwright/test");

test("page context playwrite", async ({ browser }) => {
  //chrome = plugins
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/login/");
});

test("Page Playwrite", async ({ page }) => {
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});

test(" @web ShopNow", async ({ page }) => {
  const userName = page.locator("#userEmail");
  //  const signIn = page.locator("#userPassword");
  //const cardTitle =  page.locator(".card-body b");
  await page.goto("https://rahulshettyacademy.com/client");
  console.log(await page.title());

  //css
  await userName.fill("pandeyanish2001@gmail.com");
  await page.locator("#userPassword").fill("Pandey@123");
  await page.locator("#login").click();
  //console.log(await cardTitle.first().textContent());
  // console.log(await page.locator(".card-body b").nth(1).textContent());
  //const allTitl = await cardTitle.allTextContents();
  await page.waitForLoadState("networkidle");
  const titl = await page.locator(".card-body b").allTextContents();
  console.log(titl);
});

test("@Web Browser Context-Validating Error login", async ({ page }) => {
  // const context = await browser.newContext();
  //const page =  await context.newPage();
 // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  //page.on('request',request=> console.log(request.url()));
  // page.on('response',response=> console.log(response.url(), response.status()));
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  //css
  await userName.fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await signIn.click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  //type - fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();

  console.log(allTitles);
});

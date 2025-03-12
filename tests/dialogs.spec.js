const { test, expect } = require("@playwright/test");

//test.describe.configure({mode:'parallel'});

test("dialogsValidation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  /* await page.goto("https://www.google.com/");
   await page.goBack();
   await page.goForward(); */
  expect(await page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  expect(await page.locator("#displayed-text")).toBeHidden();
  page.on("dialog", (dialog) => dialog.accept());
  await page.locator("#confirmbtn").click();
  await page.locator("#mousehover").hover();
  await page.pause();
  const framesPage = page.frameLocator("#courses-iframe");
  await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  const textCheck = await framesPage.locator(".text h2").textContent();
  console.log(textCheck.split(" ")[1]);
});

test("screen shot", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  expect(page.locator("#displayed-text")).toBeVisible();
  await page
    .locator("#displayed-text")
    .screenshot({ path: "partialScreenshot.png" });
  await page.locator("#hide-textbox").click();
  await page.screenshot({ path: "screenshot.png" });
  expect(page.locator("#displayed-text")).toBeHidden();
});

test('visual comparison', async({page})=>{
    await page.goto("https://google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})


test('visualTocomparison', async({page})=>{
    await page.goto("https://jpmc-signage-qa.vercel.app/");
    await page.locator("input[name='_vercel_password']").fill("dsa-t00l!");
    await page.locator(".submit").click();
   // await page.locator("div[class*='md:grid-cols-3'] div:nth-child(1) a:nth-child(1)").click();
   await page.waitForLoadState("networkidle");
    await page.locator("img[src*='trader-column-corner']").click();
    await page.waitForLoadState("networkidle");
    expect(await page.screenshot()).toMatchSnapshot('newlanding.png');
    //expect(await page.screenshot()).toMatchSnapshot('landing.png');
})

test('comparison', async({page})=>{
    await page.goto("https://www.flightaware.com/");
    expect(await page.screenshot()).toMatchSnapshot('landingimag.png');
})
const { test, expect } = require("@playwright/test");
const { text } = require("stream/consumers");

test("UI dropdown", async ({ page }) => {
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const docLink = page.locator("[href*='documents-request']");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await userName.fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await signIn.click();
  const dropdowns = page.locator("select.form-control");
  await dropdowns.selectOption("Teacher");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  //assertions
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await expect(docLink).toHaveAttribute("class", "blinkingText");
  await expect(page.locator("[href*='.org']")).toHaveAttribute(
    "class",
    "blinkingText"
  );

  page.pause();
});

test("child window hdl", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const docLink = page.locator("[href*='documents-request']");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    docLink.click(),
  ]);
  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  //console.log(domain);
  await userName.fill(domain);
  //await page.pause();
  console.log(await userName.textContent());
  console.log(text);
});

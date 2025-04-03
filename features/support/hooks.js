const { Before,BeforeStep,AfterStep,Status} = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const playwright = require("@playwright/test");

Before({ timeout: 20000 },async function () {
    console.log("Launching browser...");
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
  this.poManager = new POManager(this.page);
});

BeforeStep( function () {
    // This hook will be executed before all steps in a scenario with tag @foo
  });

AfterStep(async function ({result}) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
     await this.page.screenshot({path:'ss2.png'});
    }
  });
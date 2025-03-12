// @ts-check
const { devices, expect } = require("@playwright/test");
const { trace } = require("console");

const config = {
  testDir: "./tests",
 // retries :1,
 //workers: 2, // running test in parallel mode based on working
  // time out one test can run for
  timeout : 30*1000,
  expect:{
   timeout:5000
   },

   use: {
    baseUrl:'https://rahulshettyacademy.com/client',
   },
   
  reporter: "html",

  projects: [
    {
      name: "safari",
      use: {
        browserName: "webkit",
        headless: false,
        screenshot: "on",
        trace: "retain-on-failure", //on,off
        ...devices['iPhone 11']
      },
    },
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        headless: false,
        screenshot: "on",
        trace: "retain-on-failure",
      //  video: 'retain-on-failure',
      // ...devices['Galaxy Tab S4']
        //viewport : {width: 800, height:850}
      },
    },
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
};
module.exports = config;

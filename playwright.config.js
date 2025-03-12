// @ts-check
const { devices, expect } = require('@playwright/test');
const { trace } = require('console');

const config = {
  testDir: './tests',
  // time out one test can run for
  // timeout : 30*1000,
  // expect:{
  //   timeout:5000
  // },
 
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    //baseURL: 'https://rahulshettyacademy.com//client//auth//login',
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure', //on,off

  },
 
};
module.exports=config;


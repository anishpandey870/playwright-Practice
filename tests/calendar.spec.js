const { test, expect } = require("@playwright/test");

test("calendar test", async ({ page }) => {
  const date = "10";
  const month = "6";
  const year = "2027";
  const exCal = [date, month, year];
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  await page.locator(".react-date-picker__inputGroup").click();
  await page
    .locator(".react-calendar__navigation__label__labelText--from")
    .click();
  await page
    .locator(".react-calendar__navigation__label__labelText--from")
    .click();
  await page.getByText(year).click();
  await page
    .locator(".react-calendar__year-view__months__month")
    .nth(Number(month) - 1)
    .click();
  await page.locator("//abbr[text()='" + date + "']").click();
  const input = await page.locator(".react-date-picker__inputGroup input");
  for (let index = 0; index < input.length; index++) {
    const value = input[index].getAttribute("value");
    expect(value).toEqual(exCal[index]);
  }
});

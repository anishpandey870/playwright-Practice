import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/auth/login');
  await page.getByPlaceholder('email@example.com').click();
});


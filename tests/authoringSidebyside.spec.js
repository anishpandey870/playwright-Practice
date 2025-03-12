import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://jpmc-signage-poc.vercel.app/');
  await page.getByLabel('VISITOR PASSWORD').click();
  await page.getByLabel('VISITOR PASSWORD').fill('dsat00l!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('VISITOR PASSWORD').fill('dsa-t00l!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'image Standard message - Side' }).click();
  await page.locator('button').filter({ hasText: 'JPMC LIGHT' }).click();
  await page.getByLabel('JPMC DARK').getByText('JPMC DARK').click();
  await page.locator('button').filter({ hasText: 'JPMC DARK' }).click();
  await page.getByLabel('EMPLOYER BRAND LIGHT').click();
  await page.locator('button').filter({ hasText: 'EMPLOYER BRAND LIGHT' }).click();
  await page.getByLabel('EMPLOYER BRAND DARK').getByText('EMPLOYER BRAND DARK').click();
  await page.locator('button').filter({ hasText: 'EMPLOYER BRAND DARK' }).click();
  await page.getByLabel('EMPLOYER BRAND BLACK').getByText('EMPLOYER BRAND BLACK').click();
  await page.locator('button').filter({ hasText: 'EMPLOYER BRAND BLACK' }).click();
  await page.getByLabel('COE BRAND LIGHT').getByText('COE BRAND LIGHT').click();
  await page.locator('button').filter({ hasText: 'COE BRAND LIGHT' }).click();
  await page.getByLabel('COE BRAND LIGHT').getByText('COE BRAND LIGHT').click();
  await page.locator('button').filter({ hasText: 'COE BRAND LIGHT' }).click();
  await page.getByLabel('COE BRAND LIGHT').getByText('COE BRAND LIGHT').click();
  await page.locator('button').filter({ hasText: 'COE BRAND LIGHT' }).click();
  await page.getByLabel('COE BRAND BLACK').getByText('COE BRAND BLACK').click();
  await page.getByPlaceholder('Enter eyebrow text here').click();
  await page.getByPlaceholder('Enter eyebrow text here').press('ArrowRight');
  await page.getByPlaceholder('Enter eyebrow text here').press('ArrowRight');
  await page.getByPlaceholder('Enter eyebrow text here').fill('');
  await page.getByPlaceholder('Enter eyebrow text here').click();
  await page.getByPlaceholder('Enter eyebrow text here').fill('lets work');
  await page.locator('label').filter({ hasText: 'Eyebrow?' }).getByRole('button').click();
  await page.getByPlaceholder('Enter headline text here').click();
  await page.getByPlaceholder('Enter headline text here').fill('hievers Conference');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').press('ArrowRight');
  await page.getByPlaceholder('Enter headline text here').fill('khi sdhfbhj hgydf ');
});




//////////-------------------------------------------

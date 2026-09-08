import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    
    await page.goto("https://www.saucedemo.com/")
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    const dashboard = page.locator('div.app_logo')
    await expect(dashboard).toHaveText('Swag Labs')
  });
});

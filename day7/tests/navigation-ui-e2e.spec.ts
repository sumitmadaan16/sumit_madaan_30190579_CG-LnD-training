import { test, expect } from './fixtures/test';
import { BASE_URL, LoginPage } from './pages/swag-labs.page';
import { getConstant } from './fixtures/data';

const backpack = getConstant('backpack');

test.describe('Navigation, UI, and End-to-End', () => {
  test('NAV-001 Open and close menu', async ({ inventory }) => { 
    const menu = await inventory.openMenu(); 
    await expect(menu.allItems).toBeVisible(); 
    await expect(menu.about).toBeVisible(); 
    await expect(menu.logout).toBeVisible(); 
    await expect(menu.reset).toBeVisible(); 
    await menu.closeButton.click(); 
    await expect(menu.closeButton).toBeHidden(); 
  });
  test('NAV-002 All Items', async ({ inventory, page }) => { 
    await inventory.productDetailsLink(backpack).click(); 
    const menu = await inventory.openMenu(); 
    await menu.allItems.click(); 
    await expect(page).toHaveURL(/inventory/); 
  });
  test('NAV-003 About', async ({ inventory, page }) => { 
    const menu = await inventory.openMenu(); 
    // Click About, then wait for DOMContentLoaded to avoid waiting for all external resources
    await menu.about.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    await expect(page).toHaveURL(/saucelabs.com/);
  });
  test('NAV-004 Logout', async ({ inventory, page }) => { 
    const menu = await inventory.openMenu(); 
    await menu.logout.click(); await expect(page).toHaveURL(/\/$/); 
  });
  test('NAV-005 Reset App State', async ({ inventory }) => { 
    await inventory.addProduct(backpack); 
    const menu = await inventory.openMenu(); 
    await menu.reset.click(); await expect(inventory.cartBadge).toBeHidden();
  });
  test('NAV-006 Menu accessibility', async ({ inventory }) => { const menu = await inventory.openMenu(); await expect(menu.allItems).toHaveAccessibleName('All Items'); await expect(menu.about).toHaveAccessibleName('About'); await menu.closeButton.click(); });
  test('UI-001 Responsive inventory', async ({ inventory, page }) => { for (const width of [1280, 768, 375]) { await page.setViewportSize({ width, height: 800 }); await expect(inventory.productCards.first()).toBeVisible(); } });
  test('UI-002 Responsive checkout', async ({ inventory, page }) => { await inventory.addProduct(backpack); const checkout = await (await inventory.openCart()).checkout(); for (const width of [1280, 768, 375]) { await page.setViewportSize({ width, height: 800 }); await expect(checkout.firstName).toBeVisible(); } });
  test('UI-003 Button visibility and state', async ({ inventory }) => {
      const product = inventory.product(backpack); 
      await expect(product.getByRole('button', { name: /add to cart/i })).toBeVisible();
      await inventory.addProduct(backpack); 
      await expect(product.getByRole('button', { name: /remove/i })).toBeVisible();
     });
  test('UI-004 Labels and messages', async ({ inventory }) => { const checkout = await (await inventory.openCart()).checkout(); await expect(checkout.firstName).toHaveAccessibleName(/first name/i); await checkout.continueButton.click(); await expect(checkout.error).toBeVisible(); });
  test('UI-005 Broken images', async ({ inventory }) => { for (const image of await inventory.productCards.locator('img').all()) { await expect(image).toHaveJSProperty('complete', true); await expect(image).toHaveAttribute('src', /.+/); } });
  test('UI-006 Keyboard focus', async ({ login, page }) => { await login.goto(); await login.username.focus(); await expect(login.username).toBeFocused(); await login.username.press('Tab'); await expect(login.password).toBeFocused(); await page.keyboard.press('Tab'); await expect(login.loginButton).toBeFocused(); });
  test('E2E-001 Single-item purchase', async ({ inventory }) => { await inventory.addProduct(backpack); const checkout = await (await inventory.openCart()).checkout(); await checkout.fillValidInformation(); const complete = await (await checkout.continue()).finish(); await expect(complete.confirmation).toBeVisible(); });
  test('E2E-002 Multi-item purchase', async ({ inventory }) => { await inventory.addProduct(backpack); await inventory.addProduct('Sauce Labs Bike Light'); const checkout = await (await inventory.openCart()).checkout(); await checkout.fillValidInformation(); const overview = await checkout.continue(); await expect(overview.items).toHaveCount(2); await expect((await overview.finish()).confirmation).toBeVisible(); });
  test('E2E-003 Cart after logout/login', async ({ inventory, page }) => { await inventory.addProduct(backpack); const menu = await inventory.openMenu(); await menu.logout.click(); const login = new LoginPage(page); const reloggedInventory = await login.loginAsStandardUser(); await expect(reloggedInventory.cartLink).toBeVisible(); await expect(reloggedInventory.cartBadge).toHaveText('1'); });
  test('E2E-004 Refresh session', async ({ inventory, page }) => { await inventory.addProduct(backpack); await page.reload(); await expect(inventory.cartBadge).toHaveText('1'); });
  test('E2E-005 Protected navigation', async ({ page, login }) => { await page.goto(`${BASE_URL}inventory.html`); await expect(login.username).toBeVisible(); });
  test('E2E-006 Reset during shopping', async ({ inventory }) => { await inventory.addProduct(backpack); const menu = await inventory.openMenu(); await menu.reset.click(); await expect(inventory.cartBadge).toBeHidden(); });
  test('E2E-007 Logout during checkout', async ({ inventory, page }) => { await inventory.addProduct(backpack); await (await inventory.openCart()).checkout(); const menu = await inventory.openMenu(); await menu.logout.click(); await expect(page).toHaveURL(/\/$/); });
  test('E2E-008 Error recovery', async ({ login }) => { await login.goto(); await login.login('bad', 'bad'); await expect(login.error).toBeVisible(); await login.login('standard_user', 'secret_sauce'); await expect(login.error).toBeHidden(); });
});

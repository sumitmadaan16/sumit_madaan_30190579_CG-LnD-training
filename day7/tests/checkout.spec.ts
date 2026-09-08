import { test, expect } from './fixtures/test';
import type { InventoryPage } from './pages/swag-labs.page';
import { findRow, getConstant } from './fixtures/data';

const backpack = getConstant('backpack');

async function checkoutWithItem(inventory: InventoryPage) {
  await inventory.addProduct(backpack);
  const cart = await inventory.openCart();
  return cart.checkout();
}

test.describe('Checkout Flow', () => {
  test('CHK-001 Required checkout fields', async ({ inventory }) => { const row = findRow('CheckoutData', 'CHK-001'); const checkout = await checkoutWithItem(inventory); await checkout.continueButton.click(); await expect(checkout.error).toContainText(row.ExpectedError); });
  test('CHK-002 Missing first name', async ({ inventory }) => { const row = findRow('CheckoutData', 'CHK-002'); const checkout = await checkoutWithItem(inventory); await checkout.lastName.fill(row.LastName); await checkout.postalCode.fill(row.PostalCode); await checkout.continueButton.click(); await expect(checkout.error).toContainText(row.ExpectedError); });
  test('CHK-003 Missing last name', async ({ inventory }) => { const row = findRow('CheckoutData', 'CHK-003'); const checkout = await checkoutWithItem(inventory); await checkout.firstName.fill(row.FirstName); await checkout.postalCode.fill(row.PostalCode); await checkout.continueButton.click(); await expect(checkout.error).toContainText(row.ExpectedError); });
  test('CHK-004 Missing postal code', async ({ inventory }) => { const row = findRow('CheckoutData', 'CHK-004'); const checkout = await checkoutWithItem(inventory); await checkout.firstName.fill(row.FirstName); await checkout.lastName.fill(row.LastName); await checkout.continueButton.click(); await expect(checkout.error).toContainText(row.ExpectedError); });
  test('CHK-005 Checkout boundary values', async ({ inventory }) => { const row = findRow('CheckoutData', 'CHK-005') || { FirstName: 'A', LastName: 'L', PostalCode: '1' }; const checkout = await checkoutWithItem(inventory); await checkout.firstName.fill(row.FirstName); await checkout.lastName.fill(row.LastName); await checkout.postalCode.fill(row.PostalCode); await checkout.continueButton.click(); await expect(checkout.error).toBeHidden(); });
  test('CHK-006 Valid information', async ({ inventory }) => { const row = findRow('CheckoutData', 'CHK-006'); const checkout = await checkoutWithItem(inventory); await checkout.fillValidInformation(row.FirstName, row.LastName, row.PostalCode); const overview = await checkout.continue(); await expect(overview.items).toHaveCount(1); await expect(overview.subtotal).toContainText('29.99'); await expect(overview.total).toBeVisible(); });
  test('CHK-007 Cancel information', async ({ inventory, page }) => { const checkout = await checkoutWithItem(inventory); await checkout.cancelButton.click(); await expect(page).toHaveURL(/cart/); });
  test('CHK-008 Cancel overview', async ({ inventory, page }) => { const checkout = await checkoutWithItem(inventory); await checkout.fillValidInformation(); const overview = await checkout.continue(); await overview.cancelButton.click(); await expect(page).toHaveURL(/inventory/); });
  test('CHK-009 Successful checkout', async ({ inventory }) => { const checkout = await checkoutWithItem(inventory); await checkout.fillValidInformation(); const overview = await checkout.continue(); const complete = await overview.finish(); await expect(complete.title).toBeVisible(); await expect(complete.confirmation).toBeVisible(); });
  test('CHK-010 Back Home', async ({ inventory }) => { const checkout = await checkoutWithItem(inventory); await checkout.fillValidInformation(); const complete = await (await checkout.continue()).finish(); await complete.backHomeButton.click(); await expect(inventory.title).toBeVisible(); });
  test('CHK-011 Empty-cart checkout', async ({ inventory, page }) => { const cart = await inventory.openCart(); await expect(cart.checkoutButton).toBeEnabled(); await cart.checkoutButton.click(); await expect(page).toHaveURL(/checkout-step-one/); await expect(page.locator('.cart_item')).toHaveCount(0); await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible(); });
  test('CHK-012 Total calculation', async ({ inventory }) => { await inventory.addProduct(backpack); await inventory.addProduct('Sauce Labs Bike Light'); const cart = await inventory.openCart(); const checkout = await cart.checkout(); await checkout.fillValidInformation(); const overview = await checkout.continue(); const subtotal = Number((await overview.subtotal.textContent())?.replace(/[^0-9.]/g, '')); const tax = Number((await overview.tax.textContent())?.replace(/[^0-9.]/g, '')); const total = Number((await overview.total.textContent())?.replace(/[^0-9.]/g, '')); expect(total).toBeCloseTo(subtotal + tax, 2); });
});

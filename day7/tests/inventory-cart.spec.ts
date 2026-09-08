import { test, expect } from './fixtures/test';
import { expectNumbersSorted, expectSorted } from './pages/swag-labs.page';
import { getConstant } from './fixtures/data';

const backpack = getConstant('backpack');
const bikeLight = getConstant('bikeLight');
const boltShirt = getConstant('boltShirt');

test.describe('Inventory and Cart', () => {
  test('INV-001 Product display and INV-002 Product uniqueness', async ({ inventory }) => {
    await expect(inventory.title).toBeVisible(); await expect(inventory.productCards).toHaveCount(6);
    const names = await inventory.productNames(); expect(new Set(names).size).toBe(names.length); await expect(inventory.productCards.first()).toContainText('$');
  });
  test('INV-003 Product details', async ({ inventory, page }) => { await inventory.productDetailsLink(backpack).click(); await expect(page.getByText(backpack, { exact: true })).toBeVisible(); await expect(page.getByText('carry.allTheThings()')).toBeVisible(); });
  test('INV-004 Name A-Z sorting', async ({ inventory }) => { await inventory.sortBy('az'); expectSorted(await inventory.productNames()); });
  test('INV-005 Name Z-A sorting', async ({ inventory }) => { await inventory.sortBy('za'); expectSorted(await inventory.productNames(), true); });
  test('INV-006 Price low-high sorting', async ({ inventory }) => { await inventory.sortBy('lohi'); expectNumbersSorted(await inventory.prices()); });
  test('INV-007 Price high-low sorting', async ({ inventory }) => { await inventory.sortBy('hilo'); expectNumbersSorted(await inventory.prices(), true); });
  test('INV-008 Image and description validation', async ({ inventory }) => { const images = inventory.productCards.locator('img'); await expect(images).toHaveCount(6); for (const image of await images.all()) { await expect(image).toHaveAttribute('src', /.+/); await expect(image).toHaveAttribute('alt', /.+/); } await expect(inventory.productCards.first().locator('.inventory_item_desc')).not.toHaveText(''); });
  test('INV-009 Inventory controls', async ({ inventory }) => { await expect(inventory.sort).toBeVisible(); await expect(inventory.cartLink).toBeVisible(); await expect(inventory.menuButton).toBeVisible(); await expect(inventory.product(backpack).getByRole('button', { name: /add to cart/i })).toBeVisible(); });
  test('CRT-001 Add one item and CRT-004 Badge accuracy', async ({ inventory }) => { await inventory.addProduct(backpack); await expect(inventory.cartBadge).toHaveText('1'); await inventory.removeProduct(backpack); await expect(inventory.cartBadge).toBeHidden(); });
  test('CRT-002 Add multiple items', async ({ inventory }) => { await inventory.addProduct(backpack); await inventory.addProduct(bikeLight); await inventory.addProduct(boltShirt); await expect(inventory.cartBadge).toHaveText('3'); });
  test('CRT-003 Remove an item', async ({ inventory }) => { await inventory.addProduct(backpack); await inventory.addProduct(bikeLight); const cart = await inventory.openCart(); await cart.remove(backpack); await expect(cart.item(backpack)).toHaveCount(0); await expect(cart.item(bikeLight)).toHaveCount(1); });
  test('CRT-005 Navigation persistence', async ({ inventory }) => { await inventory.addProduct(backpack); await inventory.sortBy('za'); await expect(inventory.cartBadge).toHaveText('1'); const cart = await inventory.openCart(); await expect(cart.item(backpack)).toHaveCount(1); });
  test('CRT-006 Cart item details', async ({ inventory }) => { await inventory.addProduct(backpack); const cart = await inventory.openCart(); await expect(cart.item(backpack)).toContainText('$29.99'); await expect(cart.item(backpack).getByText('1', { exact: true })).toBeVisible(); });
  test('CRT-007 Empty cart and CRT-008 Cart navigation', async ({ inventory, page }) => { const cart = await inventory.openCart(); await expect(cart.items).toHaveCount(0); await cart.continueShoppingButton.click(); await expect(inventory.title).toBeVisible(); await inventory.addProduct(backpack); const populated = await inventory.openCart(); await populated.checkoutButton.click(); await expect(page).toHaveURL(/checkout-step-one/); });
});

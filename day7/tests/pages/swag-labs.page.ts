import { expect, Locator, Page } from '@playwright/test';

export const BASE_URL = 'https://www.saucedemo.com/';
export const USERS = { standard: { username: 'standard_user', password: 'secret_sauce' }, locked: { username: 'locked_out_user', password: 'secret_sauce' } };

export class LoginPage {
  readonly username = this.page.getByRole('textbox', { name: 'Username' });
  readonly password = this.page.getByRole('textbox', { name: 'Password' });
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly error = this.page.locator('[data-test="error"]');
  constructor(private readonly page: Page) {}
  async goto(): Promise<void> {
    await this.page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await expect(this.username).toBeVisible();
  }
  async login(username: string, password: string): Promise<void> { await this.username.fill(username); await this.password.fill(password); await this.loginButton.click(); }
  async loginAsStandardUser(): Promise<InventoryPage> {
    await this.goto();
    await this.login(USERS.standard.username, USERS.standard.password);
    const inventory = new InventoryPage(this.page);
    await expect(inventory.title).toBeVisible();
    return inventory;
  }
}

export class InventoryPage {
  readonly title = this.page.getByText('Products', { exact: true });
  readonly productCards = this.page.locator('.inventory_item');
  readonly sort = this.page.locator('[data-test="product-sort-container"]');
  readonly cartLink = this.page.locator('[data-test="shopping-cart-link"]');
  readonly cartBadge = this.page.locator('.shopping_cart_badge');
  readonly menuButton = this.page.getByRole('button', { name: /open menu/i });
  constructor(private readonly page: Page) {}
  product(name: string): Locator { return this.productCards.filter({ hasText: name }); }
  productDetailsLink(name: string): Locator { return this.product(name).locator('[data-test$="-title-link"]').first(); }
  async addProduct(name: string): Promise<void> { await this.product(name).getByRole('button', { name: /add to cart/i }).click(); }
  async removeProduct(name: string): Promise<void> { await this.product(name).getByRole('button', { name: /remove/i }).click(); }
  async openCart(): Promise<CartPage> { await this.cartLink.click(); return new CartPage(this.page); }
  async openMenu(): Promise<Menu> { await this.menuButton.click(); return new Menu(this.page); }
  async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> { await this.sort.selectOption(value); }
  async productNames(): Promise<string[]> { return this.productCards.locator('.inventory_item_name').allTextContents(); }
  async prices(): Promise<number[]> { const values = await this.productCards.locator('.inventory_item_price').allTextContents(); return values.map((value) => Number(value.replace('$', ''))); }
}

export class CartPage {
  readonly items = this.page.locator('.cart_item');
  readonly checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
  readonly continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
  constructor(private readonly page: Page) {}
  item(name: string): Locator { return this.items.filter({ hasText: name }); }
  async remove(name: string): Promise<void> { await this.item(name).getByRole('button', { name: /remove/i }).click(); }
  async checkout(): Promise<CheckoutInfoPage> { await this.checkoutButton.click(); return new CheckoutInfoPage(this.page); }
}

export class CheckoutInfoPage {
  readonly firstName = this.page.getByRole('textbox', { name: /first name/i });
  readonly lastName = this.page.getByRole('textbox', { name: /last name/i });
  readonly postalCode = this.page.getByRole('textbox', { name: /postal code/i });
  readonly continueButton = this.page.getByRole('button', { name: 'Continue' });
  readonly cancelButton = this.page.getByRole('button', { name: 'Cancel' });
  readonly error = this.page.locator('[data-test="error"]');
  constructor(private readonly page: Page) {}
  async fillValidInformation(firstName = 'Ada', lastName = 'Lovelace', postal = '12345'): Promise<void> { await this.firstName.fill(firstName); await this.lastName.fill(lastName); await this.postalCode.fill(postal); }
  async continue(): Promise<CheckoutOverviewPage> { await this.continueButton.click(); return new CheckoutOverviewPage(this.page); }
}

export class CheckoutOverviewPage {
  readonly items = this.page.locator('.cart_item');
  readonly subtotal = this.page.locator('.summary_subtotal_label');
  readonly tax = this.page.locator('.summary_tax_label');
  readonly total = this.page.locator('.summary_total_label');
  readonly finishButton = this.page.getByRole('button', { name: 'Finish' });
  readonly cancelButton = this.page.getByRole('button', { name: 'Cancel' });
  constructor(private readonly page: Page) {}
  async finish(): Promise<CheckoutCompletePage> { await this.finishButton.click(); return new CheckoutCompletePage(this.page); }
}

export class CheckoutCompletePage {
  readonly title = this.page.getByText('Checkout: Complete!', { exact: true });
  readonly confirmation = this.page.getByText('Thank you for your order');
  readonly backHomeButton = this.page.getByRole('button', { name: 'Back Home' });
  constructor(private readonly page: Page) {}
}

export class Menu {
  readonly allItems = this.page.getByRole('link', { name: 'All Items' });
  readonly about = this.page.getByRole('link', { name: 'About' });
  readonly logout = this.page.getByRole('link', { name: 'Logout' });
  readonly reset = this.page.getByRole('link', { name: 'Reset App State' });
  readonly closeButton = this.page.getByRole('button', { name: /close menu/i });
  constructor(private readonly page: Page) {}
}

export function expectSorted(values: string[], descending = false): void { const sorted = [...values].sort((left, right) => left.localeCompare(right)); if (descending) sorted.reverse(); expect(values).toEqual(sorted); }
export function expectNumbersSorted(values: number[], descending = false): void { const sorted = [...values].sort((left, right) => left - right); if (descending) sorted.reverse(); expect(values).toEqual(sorted); }

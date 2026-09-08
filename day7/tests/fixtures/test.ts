import { test as base, expect } from '@playwright/test';
import { InventoryPage, LoginPage } from '../pages/swag-labs.page';

export type Fixtures = { login: LoginPage; inventory: InventoryPage };

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => { await use(new LoginPage(page)); },
  inventory: async ({ page }, use) => { const login = new LoginPage(page); await login.goto(); await use(await login.loginAsStandardUser()); },
});

export { expect };

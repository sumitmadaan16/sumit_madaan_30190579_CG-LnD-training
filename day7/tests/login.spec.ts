import { test, expect } from './fixtures/test';
import { findRow } from './fixtures/data';

test.describe('Login Functionality', () => {
  test('LGN-001 Valid login', async ({ login }) => {
    const row = findRow('LoginData', 'LGN-001');
    await test.step('Open login and authenticate with standard_user', async () => { const inventory = await login.loginAsStandardUser(); await expect(inventory.title).toBeVisible(); });
  });
  test('LGN-002 Invalid username', async ({ login }) => { 
    const row = findRow('LoginData', 'LGN-002'); 
    await login.goto(); 
    await login.login(row.Username, row.Password); 
    await expect(login.error).toContainText(row.ExpectedError); });
  test('LGN-003 Invalid password', async ({ login }) => { const row = findRow('LoginData', 'LGN-003'); await login.goto(); await login.login(row.Username, row.Password); await expect(login.error).toContainText(row.ExpectedError); });
  test('LGN-004 Locked-out user', async ({ login }) => { const row = findRow('LoginData', 'LGN-004'); await login.goto(); await login.login(row.Username, row.Password); await expect(login.error).toContainText(row.ExpectedError); });
  test('LGN-005 Empty credentials', async ({ login }) => { await login.goto(); await login.loginButton.click(); await expect(login.error).toContainText('Username is required'); });
  test('LGN-006 Missing username', async ({ login }) => { const std = findRow('LoginData','LGN-001'); await login.goto(); await login.password.fill(std.Password); await login.loginButton.click(); await expect(login.error).toContainText('Username is required'); });
  test('LGN-007 Missing password', async ({ login }) => { const std = findRow('LoginData','LGN-001'); await login.goto(); await login.username.fill(std.Username); await login.loginButton.click(); await expect(login.error).toContainText('Password is required'); });
  test('LGN-008 Whitespace credentials', async ({ login }) => { await login.goto(); await login.login('   ', '   '); await expect(login.error).toBeDisabled(); await expect(login.username).toBeVisible(); });
  test('LGN-009 Credential boundaries', async ({ login }) => { await login.goto(); await login.login('x'.repeat(256), 'y'.repeat(256)); await expect(login.error).toBeVisible(); await expect(login.loginButton).toBeVisible(); });
  test('LGN-010 Password masking and error dismissal', async ({ login }) => { await login.goto(); await expect(login.password).toHaveAttribute('type', 'password'); await login.login('bad', 'bad'); await expect(login.error).toBeVisible(); await login.error.locator('button').click(); await expect(login.error).toBeHidden(); });
  test('LGN-011 Keyboard login', async ({ login, page }) => { const std = findRow('LoginData','LGN-001'); await login.goto(); await login.username.fill(std.Username); await login.password.fill(std.Password); await login.password.press('Enter'); await expect(page).toHaveTitle(/Swag Labs/); });
  test('LGN-012 Login accessibility labels', async ({ login }) => { await login.goto(); await expect(login.username).toHaveAccessibleName('Username'); await expect(login.password).toHaveAccessibleName('Password'); await expect(login.loginButton).toHaveAccessibleName('Login'); });
});

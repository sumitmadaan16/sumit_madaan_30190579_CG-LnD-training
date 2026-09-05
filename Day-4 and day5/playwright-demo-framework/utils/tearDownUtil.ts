import { expect, Page } from "@playwright/test";

export async function tearDown(
    page: Page,
): Promise<void> {
    await page.getByRole('button', { name: 'Reset Database' }).click()
    await page.getByRole('button', {name: 'Sign Out'}).click()
    expect(page.url()).toBe('https://www.playwrightpad.in/sandbox/banking')
}
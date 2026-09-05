import { expect, Page } from "@playwright/test";

export interface LoginCredentials {
    username: string;
    password: string;
}
export async function login(
    page: Page,
    credentials: LoginCredentials
): Promise<void> {
    await page.goto("https://www.playwrightpad.in/sandbox/banking");
    await page.getByRole('textbox', { name: 'Enter username' }).fill(credentials.username);
    await page.getByPlaceholder('Enter password').fill(credentials.password);
    await page.getByRole("button", { name: "LOGIN" }).click();
    await expect(page.getByRole("button", { name: "Accounts Summary" })).toBeVisible();
}
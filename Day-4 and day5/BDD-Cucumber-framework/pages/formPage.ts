import { expect, Locator, Page } from '@playwright/test';

export class FormPage {
    private readonly loginButton: Locator;
    constructor(private readonly page: Page) {
        this.loginButton = this.page.locator('input[value="Login"]');
    }
    async openApp(): Promise<void> {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    }
    async fillForm(
        name: string,
        email: string,
        gender: string,
        mobile: string,
        subject: string,
        hobbies: string,
        address: string,
        state: string,
        city: string
    ): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Name:' }).fill(name);
        await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);
        await this.page.locator(`//label[normalize-space()="${gender}"]/preceding-sibling::input`).check();
        await this.page.getByRole('textbox', { name: /Mobile/i }).fill(mobile);
        await this.page.getByRole('textbox', { name: 'Subjects:' }).fill(subject);
        const hobbyList = hobbies
            .split(',')
            .map((hobby) => hobby.trim())
            .filter(Boolean);
        for (const hobby of hobbyList) {
            await this.page
                .locator(
                    `//label[normalize-space()="${hobby}"]/preceding-sibling::input`
                )
                .check();
        }
        await this.page
            .getByPlaceholder(/Current Address|Currend Address/i)
            .fill(address);
        await this.page.locator('#state').selectOption({
            label: state
        });
        await this.page.locator('#city').selectOption({
            label: city
        });
    }
    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
    async verifyLoginButtonIsEnabled(): Promise<void> {
        await expect(this.loginButton).toBeEnabled();
    }
}
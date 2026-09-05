import { expect, Locator, Page } from "@playwright/test";

export class AccountSummaryPage {
    readonly page: Page;
    readonly recentTransactionDesc: Locator;
    readonly recentTransactionAMT: Locator;

    constructor(page: Page) {
        this.page = page;
        const recentTransactionRow = page.locator("tbody tr").first();
        this.recentTransactionDesc =
            recentTransactionRow.locator("td").nth(1);
        this.recentTransactionAMT =
            recentTransactionRow.locator("td").nth(3);
    }

    async verifyRecentTransaction(
        beneficiaryName: string,
        transferAmount: string
    ): Promise<void> {
        const expectedDescription =
            `Wire Transfer to ${beneficiaryName}`;
        const expectedAmount =
            `-$${Number(transferAmount).toFixed(2)}`;
        await expect(this.recentTransactionDesc).toHaveText(
            expectedDescription
        );
        await expect(this.recentTransactionAMT).toHaveText(
            expectedAmount
        );
    }
}

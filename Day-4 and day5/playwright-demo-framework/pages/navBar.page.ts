import { Page, Locator } from "@playwright/test";

export class NavBarPage {
    page: Page;
    fundTransferBTN: Locator;
    accountSummaryBTN: Locator;
    cardControlsBTN: Locator;
    loansCenterBTN : Locator;
    customerSupportBTN : Locator;
    preferencesBTN : Locator;

    constructor(page: Page) {
        this.page = page;
        this.fundTransferBTN = page.getByRole('button', { name: 'Funds Transfer'});
        this.accountSummaryBTN = page.getByRole('button', { name: 'Accounts Summary' });
        this.cardControlsBTN = page.getByRole('button', { name: 'Cards Controls' });
        this.loansCenterBTN = page.getByRole('button', { name: 'Loans Center' });
        this.customerSupportBTN = page.getByRole('button', { name: 'Customer Support' });
        this.preferencesBTN = page.getByRole('button', { name: 'Preferences' });

    }
    async clickFundTransfer() {
        await this.fundTransferBTN.click();
    }

    async clickAccountSummary() {
        await this.accountSummaryBTN.click();
    }

}
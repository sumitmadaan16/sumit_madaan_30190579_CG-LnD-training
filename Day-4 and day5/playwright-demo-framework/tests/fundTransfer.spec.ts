import { test, expect } from "@playwright/test";

// @ts-ignore
import { login } from "../utils/loginUtil";
// @ts-ignore
import { NavBarPage } from "../pages/navBar.page";
// @ts-ignore
import { fundTransferPage } from "../pages/fundTransfer.page";
// @ts-ignore
import { AccountSummaryPage } from "../pages/accountSummary.page";
// @ts-ignore
import testData from "../testData/testData.json";
import {tearDown} from "../utils/tearDownUtil";

test.describe("Fund Transfer Tests", () => {
    test.beforeEach(async ({ page }) => {
        await login(page, testData.login);
    });
    test.afterEach(async ({ page }) => {
        await tearDown(page);
    });

    test("Add beneficiary and transfer funds", async ({ page }) => {
        const navBarPage = new NavBarPage(page);
        const fundTransfer = new fundTransferPage(page);
        // const accountSummaryPage = new accountSummaryPage(page);

        await test.step("Navigate to Funds Transfer page", async () => {
            await navBarPage.clickFundTransfer();
            await expect(
                fundTransfer.addNewBeneficiaryBTN
            ).toBeVisible();
        });

        await test.step("Add a new beneficiary", async () => {
            await fundTransfer.addBeneficiary(
                testData.beneficiary
            );
        });

        await test.step("Initiate transfer to the added beneficiary", async () => {
            await fundTransfer.initiateTransfer({
                transferType: testData.initiateTransfer.transferType,
                recipientBeneficiary: testData.beneficiary.fullName,
                recipientBank: testData.beneficiary.recipientBank,
                transferAmt: testData.initiateTransfer.transferAMT
            });
        });

        await test.step("Verifying OTP", async () => {
            await fundTransfer.verifyOTP();
            await expect(
                page.locator("div.transfer-success-msg")
            ).toContainText("complete");
        });

        await test.step("Verify recent transaction", async () => {
            await navBarPage.clickAccountSummary();
            const accountSummaryPage = new AccountSummaryPage(page);
            await accountSummaryPage.verifyRecentTransaction(
                testData.beneficiary.fullName,
                testData.initiateTransfer.transferAMT
            );
        });
    });
});
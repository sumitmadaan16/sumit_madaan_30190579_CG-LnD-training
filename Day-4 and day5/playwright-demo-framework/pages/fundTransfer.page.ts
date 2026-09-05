import { Page, Locator } from "@playwright/test";

export class fundTransferPage {
    page: Page;
    // add beneficiary
    addNewBeneficiaryBTN : Locator;
    addBeneficiaryFullNameTF : Locator;
    addBeneficiaryAccNoTF : Locator;
    addBeneficiaryRecipientBank : Locator;
    saveBeneficiaryBTN : Locator;

    //initiate Transfer
    transferTypeSF :Locator
    recipientBeneficiarySF : Locator;
    transferAmtTF : Locator;
    initiateWireBTN :Locator;

    //otp
    otpTF : Locator;
    verifyOtpBTN : Locator;
    readOtp: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addNewBeneficiaryBTN = page.getByRole('button', { name: 'Add New' });
        this.addBeneficiaryFullNameTF = page.getByRole('textbox', { name: 'e.g. John Doe' });
        this.addBeneficiaryAccNoTF = page.getByRole('textbox', { name: 'e.g. 1234567890' })
        this.addBeneficiaryRecipientBank = page.locator('#bene-bank') // selectOtion
        this.saveBeneficiaryBTN =page.getByRole('button', { name: 'Save Beneficiary' })

        this.transferTypeSF = page.locator('#transfer-type') //selectOption
        this.recipientBeneficiarySF = page.locator('#bene-select') //selectOption
        this.transferAmtTF = page.getByRole('spinbutton', { name: '0.00' }) //Text input field
        this.initiateWireBTN = page.getByRole('button', { name: 'Initiate Wire' })

        //otp flow
        this.readOtp = page.locator('.otp-display-code')
        this.otpTF = page.getByRole('textbox', { name: 'Enter 6-digit OTP' })
        this.verifyOtpBTN = page.getByRole('button', { name: 'Verify' })

    }

    async addBeneficiary(beneficiary: {
        fullName: string;
        accountNumber: string;
        recipientBank: string;
    })
    {
        await this.addNewBeneficiaryBTN.click();
        await this.addBeneficiaryFullNameTF.fill( beneficiary.fullName);
        await this.addBeneficiaryAccNoTF.fill( beneficiary.accountNumber);
        await this.addBeneficiaryRecipientBank.selectOption({ label: beneficiary.recipientBank });
        await this.saveBeneficiaryBTN.click();
    }

    async initiateTransfer(transferDetails:{
        transferType:string,
        recipientBeneficiary:string,
        transferAmt: string,
        recipientBank: string;
    }){
        await this.transferTypeSF.selectOption({
            label: transferDetails.transferType,
        });
        const beneficiaryLabel =
                `${transferDetails.recipientBeneficiary} (${transferDetails.recipientBank})`;
        await this.recipientBeneficiarySF.selectOption({
            label: beneficiaryLabel
        });
        await this.transferAmtTF.fill(transferDetails.transferAmt)
        await this.initiateWireBTN.click();
    }

    async verifyOTP(){
        const OTP = await this.readOtp.innerText()
        await this.otpTF.fill(OTP)
        await this.verifyOtpBTN.click();
    }
}
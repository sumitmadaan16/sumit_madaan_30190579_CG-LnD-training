import { Given, Then, When } from '@cucumber/cucumber';
import { FormPage } from '../../pages/formPage';

Given('the user is on the login page on the form page', async function () {
        const formPage = new FormPage(this.page);
        await formPage.openApp();
    }
);
When('the user fill in the form with {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', async function (name: string, email: string, gender: string, mobileNumber: string, subject: string, hobbies: string, address: string, state: string, city: string) {
        const formPage = new FormPage(this.page);
        await formPage.fillForm(name, email, gender, mobileNumber, subject, hobbies, address, state, city);
    }
);
When('the user clicks on Login button', async function () {
        const formPage = new FormPage(this.page);
        await formPage.clickLoginButton();
    }
);
Then('the user should see that login button is enabled', async function () {
        const formPage = new FormPage(this.page);
        await formPage.verifyLoginButtonIsEnabled();
    }
);
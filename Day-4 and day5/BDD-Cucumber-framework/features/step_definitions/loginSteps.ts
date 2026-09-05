import {Given, Then, When} from "@cucumber/cucumber";
import {loginPage} from "../../pages/loginPage";
import {customWorld} from "../../support/world";

let login : loginPage

Given('the user is on the login page', async function(this:customWorld) {
    login = new loginPage(this.page);
    await login.openApp()
});

When('the user enters valid credentials', async function (this:customWorld) {
    await login.login()
});

When('clicks the login button',async function (this:customWorld) {
    await login.click()
});

Then('the user should be redirected to the dashboard',async function (this:customWorld) {
    console.log('login successfully');
});

When('the user enters invalid credentials',async function (this:customWorld) {
    await login.loginWithInvalidCredentials()
});


Then('an error message should be displayed', async function (this:customWorld) {
    console.log("error message is displayed")
    await login.errorCheck()
});
When(/^the user enters "([^"]*)" and "([^"]*)"$/, async function (this:customWorld, username: string, password: string) {
    console.log('loggin in with multiple users');
    await login.loginWithMultipleUsers(username, password)
    await login.click()
});
Then(/^the user should see homepage if credentials are valid, otherwise an error message should be displayed$/, async function () {
    await login.errorCheck()
});
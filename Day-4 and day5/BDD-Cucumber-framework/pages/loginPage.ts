import {expect, Page} from '@playwright/test';

export class loginPage {

  constructor(
      private page: Page
  ) {}
  // locators
  private txtUser = '#user-name';
  private txtPass = '#password';
  async openApp() {
    await this.page.goto(
        'https://www.saucedemo.com/');
  }
  async login() {
      console.log('Entering credentials');
  // Example
      await this.page.fill('input[name="user-name"]', 'standard_user');
      await this.page.fill("//input[@id='password']", 'secret_sauce');
  }
  async loginWithInvalidCredentials() {
      console.log('Entering invalid credentials');
  // Example
      await this.page.fill('input[name="user-name"]', 'user');
      await this.page.fill("//input[@id='password']", 'sauce');
  }

  async click(){
      console.log('clicked');
      await this.page.click('input[name="login-button"]');
  }

  async errorCheck(){
      const errors = await this.page.locator('[data-test="error"]').innerText();
      if(errors.includes('user')){
            console.log('Login failed');
      }else{
            console.log('Login successful');
          await this.page.getByRole('button', { name: 'Open Menu' }).click()
          await this.page.getByRole('link', { name: 'Logout' }).click()
      }
  }
    async loginWithMultipleUsers(username: string, password: string) {
        await this.page.fill(this.txtUser, username);
        await this.page.fill(this.txtPass, password);
    }
}


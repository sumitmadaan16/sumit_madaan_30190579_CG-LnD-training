// import { chromium, firefox, webkit } from '@playwright/test';
//
// async function globalSetup() {
//
//     const browsers = [
//         {
//             browser: chromium,
//             authFile: 'playwright/.auth/chromium.json'
//         },
//         {
//             browser: firefox,
//             authFile: 'playwright/.auth/firefox.json'
//         },
//         {
//             browser: webkit,
//             authFile: 'playwright/.auth/webkit.json'
//         }
//     ];
//
//     for (const item of browsers) {
//
//         const browser = await item.browser.launch();
//
//         const page = await browser.newPage();
//
//         await page.goto('https://www.playwrightpad.in/sandbox/banking');
//
//         await page.getByRole('textbox', { name: 'Enter username' }).fill('apex_user')
//         await page.getByPlaceholder('Enter password').fill('Password123!');
//
//         await page.getByRole('button', { name: 'LOGIN' }).click();
//         await page.waitForLoadState('networkidle');
//
//         await page.context().storageState({
//             path: item.authFile,
//         });
//
//         await browser.close();
//     }
// }
//
// export default globalSetup;
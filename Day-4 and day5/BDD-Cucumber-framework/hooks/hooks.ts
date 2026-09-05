import {Before , After,setDefaultTimeout } from '@cucumber/cucumber';
import {customWorld} from '../support/world';
import {chromium} from '@playwright/test';

setDefaultTimeout(
    60000
);

Before( async function(this:customWorld){

    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

});

After (async function(this:customWorld){
    await this.browser.close();
});

// take the screenshot if the scenario is failing

After(async function (scenario) {
    if (scenario.result?.status ==='FAILED') {
        await this.page.screenshot({
            path:
                `reports/${Date.now()}.png`});
    }
    await this.browser.close();
});





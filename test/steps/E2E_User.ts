import {Given, When, Then} from '@cucumber/cucumber';
import {BASE_URI} from "../../src/config/APIConfig";
import UsersPage from '../../src/pages/Users.page';
Given(/^I am on the page (.+)$/, async (pageurl: string) => {
    console.log("strona: ", pageurl);
    await UsersPage.openApp(pageurl);
});

When(/^I Perform (.+) user search$/, async (endpoint) => {
    await UsersPage.enterAPIUrl(BASE_URI + endpoint);
    await UsersPage.clickOnAjaxBtn();
});

When(/^I make Get (.+) api call$/, async (endpoint) => {
    console.log("To implement");
});

Then(/^I validate the serach result$/, async () => {
    console.log(" To implement")
    const ui_status = await UsersPage.getStatusText();
    const ui_response = await UsersPage.getStatusText();
    console.log("RESPONSE FROM UI:", ui_response);
    await browser.pause(3000);
});
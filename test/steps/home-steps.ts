import {Given, When, Then} from '@cucumber/cucumber';

Given(/^I open the browser and load the url (.+)$/, async (homePageUrl) => {
    await browser.url(homePageUrl);
    await browser.maximizeWindow();
});

Then(/^I should see a header with text (.+)$/, async (homeHeaderText) => {
    const header = await $('.heading');
    expect(await header.getText()).toEqual(homeHeaderText);
});

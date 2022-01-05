import {Given, When, Then} from '@cucumber/cucumber';
Given(/^I am on the stream list page with the url (.+)$/, async (streamsAppUrl) => {
    await browser.url(streamsAppUrl);
    await browser.maximizeWindow();
});

Then(/^I should see a header text (.+)$/, async (headerText) => {
    const header = await $('.MuiTypography-root.MuiTypography-h3');
    expect(await header.getText()).toEqual(headerText);
});

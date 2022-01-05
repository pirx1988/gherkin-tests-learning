import {Given, When, Then} from '@cucumber/cucumber';

// @ts-ignore
browser.addLocatorStrategy('blur', (selector: string, root: HTMLElement = document) => {
    /**
     * scope should be document if called on browser object
     * and `root` if called on an element object
     */
    const scope = root ? root : document
    return scope.querySelectorAll(selector)
})


Given(/^I am on the stream list page with the url (.+)$/, async (streamsAppurl) => {
    await browser.url(streamsAppurl)
    await browser.maximizeWindow();
});


When(/^I type title (.+) and description (.+)$/, async (title, description) => {
    const titleElem = await browser.$("#new_stream_title");
    const descElem = await browser.$("#new_stream_description");
    (await titleElem).setValue(title);
    await descElem.setValue(description);
    await browser.pause(5000);
});

When(/^I set title and description empty$/, async () => {
    const titleElem = await browser.$("#new_stream_title");
    const descElem = await browser.$("#new_stream_description");
    await titleElem.setValue("");
    await descElem.setValue("");
    await browser.pause(5000);
});

When(/^I click submit button$/, async () => {
    const submitButton = await browser.$('#submit_streams');
    await submitButton.click();
})


Then(/^I should see 2 alerts messages$/, async () => {
    const titleAlertElem = await browser.$$("#title_alert");
     const descAlertElem = await browser.$$("#description_alert");
    expect(titleAlertElem.length).toBe(1);
    expect(descAlertElem.length).toBe(1);

});

Then(/^I should see header with text (.+) on streams list page$/, async (headerText) => {
    const header = await $('.MuiTypography-root.MuiTypography-h3');
    browser.pause(5000);
    expect(await header.getText()).toEqual(headerText);
});
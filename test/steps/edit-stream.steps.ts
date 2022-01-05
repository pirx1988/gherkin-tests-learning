import {Given, When, Then} from '@cucumber/cucumber';
import EditStream from '../../src/pages/editStream.page';
import CreateStream from "../../src/pages/createStream.page";


Given(/^I go to the stream edit page$/, async () => {
    await EditStream.clickEditStreamButton();
    await browser.pause(2000);
});

When(/^I change the title and desc to (.+) and (.+)$/, async (editedtitle, editedesc) => {
    await EditStream.enterTitle(editedtitle);
    await EditStream.enterDescription(editedesc);
    await browser.pause(3000);
});

When(/^Click Edit stream button$/, async () => {
    await CreateStream.clickSubmitStreamButton();
    await browser.pause(5000);
});

Then(/^I can see my edited stream with title: (.+) and desc: (.+) on the list of streams$/, async (editedtitle, editeddesc) => {
    const foundedTitle = await CreateStream.findCreatedTitle(editedtitle);
    const foundedDesc = await CreateStream.findCreatedDescription(editeddesc);
    expect(foundedTitle.length).toBe(1);
    expect(await foundedTitle[0].getText()).toBe(editedtitle);
    expect(foundedDesc.length).toBe(1);
    expect(await foundedDesc[0].getText()).toBe(editeddesc);
});



import {Given, When, Then} from '@cucumber/cucumber';
import CreateStream from '../../src/pages/createStream.page';

const STREAM_APP_URL = "http://localhost:3000/";
const USERNAME = "wdrivertestkmichalski1988@gmail.com ";
const PASSWORD = "Pirx1988"

Given(/^I go to the stream create page$/, async  () => {
    await CreateStream.clickCreateNewStreamButton();
    await browser.pause(2000);
});

When(/^I fill up the form with (.+) and (.+)$/, async (title: string, desc: string)  =>{
    await CreateStream.enterTitle(title);
    await CreateStream.enterDescription(desc)
    await browser.pause(3000);
});

Then(/^Click Create stream button$/, async () => {
    await CreateStream.clickSubmitStreamButton();
    await browser.pause(5000);
});

Then(/^I can see my new created stream (.+) and (.+) on the list of streams$/,async (title, desc) => {
    const foundedTitle = await CreateStream.findCreatedTitle(title);
    const foundedDesc = await CreateStream.findCreatedDescription(desc);
    expect(foundedTitle.length).toBe(1);
    expect(await foundedTitle[0].getText()).toBe(title);
    expect(foundedDesc.length).toBe(1);
    expect(await foundedDesc[0].getText()).toBe(desc);
});

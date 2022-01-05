import {Given, When, Then} from '@cucumber/cucumber';
import chaiPage from '../../src/pages/register.page'

Given(/^I am on practice page: \"([^\"]*)\"$/, async (appUrl: string) => {
    await browser.url(appUrl);
    await browser.maximizeWindow();
});

Then(/^I validate page header \"([^\"]*)\"$/, async (headerText: string) => {
    expect(await chaiPage.getHeader()).toHaveText(headerText);
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname: string, lname: string) => {
        await chaiPage.enterFirstName(fname);
        await chaiPage.enterLastName(lname);
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async (gender: string, yrs: string, favchai: string, reason: string) => {
    await chaiPage.selectGender(gender);
    await chaiPage.selectYrsRadio(yrs);
    await chaiPage.selectFavChaiCheckbox(favchai);
    await chaiPage.selectWhyChaiCheckbox(reason);
});

When(/^I select continent (.+) and commands (.+)$/, async (continent, command) => {
    await chaiPage.selectContinent(continent);
    await chaiPage.selectCommand(command);
    await browser.pause(5000);
});

When(/^I click on submit button$/, async () => {
    await chaiPage.clickOnSubmitBtn();
});



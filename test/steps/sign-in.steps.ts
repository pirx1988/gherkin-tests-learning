import {Given} from '@cucumber/cucumber';
import CreateStream from "../../src/pages/createStream.page";
const STREAM_APP_URL = "http://localhost:3000/";
const USERNAME = "wdrivertestkmichalski1988@gmail.com ";
const PASSWORD = "Pirx1988";

Given(/^I am logged in user$/, async() => {

    await browser.url(STREAM_APP_URL);
    await browser.maximizeWindow();
    await CreateStream.clickSignInBtn();
    await browser.pause(5000);

    let windows: string[];
    windows = await browser.getWindowHandles();
    browser.switchToWindow(windows[1]);
    await CreateStream.enterLogin(USERNAME);
    await browser.pause(5000);

    await CreateStream.clickNextButton();
    await browser.pause(3000);
    await CreateStream.enterPassword(PASSWORD);
    await CreateStream.clickPasswordNextButton();
    await browser.pause(5000);
    // back to handle main window
    browser.switchToWindow(windows[0]);
});